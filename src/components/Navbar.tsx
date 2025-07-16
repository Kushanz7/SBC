import { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Moments", "Hotel Types", "The Collectives",
    "Bookmarks", "Our Services", "About Us", "Contact Us",
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-4 bg-transparent text-white">
        {/* Hamburger menu button with improved hover animation */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-15 h-15 rounded-full bg-white/30 flex items-center justify-center z-50 hover:bg-white/50 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={25} className="text-black transition-opacity duration-200" />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              {isHovered ? (
                <span className="text-white text-gl font-light tracking-wide animate-fadeIn">MENU</span>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-2 animate-fadeIn">
                  <span className="w-8 h-0.5 bg-white block"></span>
                  <span className="w-6 h-0.5 bg-white block"></span>
                  <span className="w-7 h-0.5 bg-white block"></span>
                </div>
              )}
            </div>
          )}
        </button>
        
        {/* Logo centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-light tracking-wide whitespace-nowrap">
          Story Book Collectives
        </div>
        
        {/* Right side elements styled like the image */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-6">
            <a href="/bookings" className="flex flex-col items-center text-sm hover:text-yellow-400 transition-colors">
              <svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
              </svg>
              <span className="text-xs tracking-wide">BOOKINGS</span>
            </a>
            <a href="/login" className="flex flex-col items-center text-sm hover:text-yellow-400 transition-colors">
              <svg className="h-5 w-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="5" strokeWidth="2" />
                <path d="M3 21v-2a7 7 0 0114 0v2" strokeWidth="2" />
              </svg>
              <span className="text-xs tracking-wide">LOGIN</span>
            </a>
          </div>
        </div>
      </div>

      {/* Drawer sidebar that slides from left */}
      <div 
        className={`fixed top-0 left-0 w-2/4 h-full bg-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar content with scrollable menu */}
        <div className="flex flex-col h-full">
          {/* Close button at the top */}
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black"
              aria-label="Close menu"
            >
            </button>
          </div>
          
          {/* Scrollable menu items aligned to the left */}
          <nav className="flex-1 overflow-y-auto px-8 pb-4 pt-8">
            <ul className="w-full">
              {menuItems.map((item) => (
                <li key={item} className="border-b border-gray-100">
                  {item === "Moments" ? (
                    <button
                      className="block text-2xl text-black hover:text-yellow-500 transition-all duration-300 py-4 pl-4 font-light text-left w-full group"
                      onClick={() => {
                        setIsOpen(false);
                        navigate('/moments');
                      }}
                    >
                      <span className="inline-block transform group-hover:translate-x-2 group-hover:scale-105 group-hover:opacity-90 transition-all duration-300">
                        {item}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-2xl text-black hover:text-yellow-500 transition-all duration-300 py-4 pl-4 font-light text-left group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="inline-block transform group-hover:translate-x-2 group-hover:scale-105 group-hover:opacity-90 transition-all duration-300">
                        {item}
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Bottom section - fixed at the bottom */}
          <div className="py-6 border-t border-gray-200 px-8">
            <div className="flex space-x-6 mb-4">
              <a href="#" className="text-black hover:text-yellow-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-yellow-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            
            <div className="text-sm text-gray-600">
              <a href="/contact" className="block py-1 hover:text-black transition-colors">
                Contact Us
              </a>
              <a href="/login" className="block py-1 hover:text-black transition-colors md:hidden">
                Login / Register
              </a>
              <a href="/tel:0800-0482-314" className="block py-1 hover:text-black transition-colors">
                0800-0482-314
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay that appears when drawer is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}