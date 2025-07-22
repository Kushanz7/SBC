import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function NavBar({ setIsSidebarOpen }: { setIsSidebarOpen: (isOpen: boolean) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // GSAP animation for navbar background on scroll
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const navbar = document.querySelector('nav');
          
          if (navbar) {
            if (progress > 0.05) { // Start transition after 5% scroll
              gsap.to(navbar, {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                duration: 0.3,
                ease: 'power2.out'
              });

              // Change text and icon color to black
              gsap.to('.nav-text, .nav-icon', {
                color: '#000000',
                stroke: '#000000',
                fill: '#000000',
                textShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
              });
            } else {
              gsap.to(navbar, {
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0px)',
                boxShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
              });

              // Change text and icon color to white
              gsap.to('.nav-text, .nav-icon', {
                color: '#ffffff',
                stroke: '#ffffff',
                fill: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                duration: 0.3,
                ease: 'power2.out'
              });
            }
          }
        }
      }
    });

    return () => {
      navTween.kill();
    };
  }, []);

  // Closed Book Icon Component
  const ClosedBookIcon = ({ className }: { className?: string }) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" // <-- use currentColor
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`nav-icon ${className ?? ''}`}
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );

  // Open Book Icon Component
  const OpenBookIcon = ({ className }: { className?: string }) => (
    <svg 
      width="25" 
      height="25" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`nav-icon ${className ?? ''}`}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Book menu button with improved hover animation */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="nav-text relative w-15 h-15 rounded-full flex items-center justify-center z-50 transition-all duration-300 bg-black/20 hover:bg-black/30 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            {isHovered ? (
              <span className="text-white nav-text text-gl font-light tracking-wide animate-fadeIn">MENU</span>
            ) : (
              <div className="flex items-center justify-center animate-fadeIn">
                <ClosedBookIcon className="nav-text" />
              </div>
            )}
          </div>
        </button>
        
        {/* Logo centered with GSAP-controlled styling */}
        <button
          onClick={() => navigate('/')}
          className="nav-text absolute left-1/2 transform -translate-x-1/2 text-2xl font-light tracking-wide whitespace-nowrap bg-transparent border-none cursor-pointer transition-all duration-300 hover:scale-105 text-white"
          style={{ outline: 'none' }}
          aria-label="Go to Home"
        >
          Story Book Collectives
        </button>
        
        {/* Right side elements with GSAP-controlled styling */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-6">
            <a href="/bookings" className="nav-text flex flex-col items-center text-sm hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              <svg className="h-5 w-5 mb-1 nav-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
              </svg>
              <span className="text-xs tracking-wide">BOOKINGS</span>
            </a>
            <a href="/login" className="nav-text flex flex-col items-center text-sm hover:text-yellow-400 transition-all duration-300 hover:scale-105">
              <svg className="h-5 w-5 mb-1 nav-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <circle cx="12" cy="8" r="5" strokeWidth="2" />
                <path d="M3 21v-2a7 7 0014 0v2" strokeWidth="2" />
              </svg>
              <span className="text-xs tracking-wide">LOGIN</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}