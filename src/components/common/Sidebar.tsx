import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const navigate = useNavigate();

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    "Moments", "Hotel Types", "The Collectives",
    "Bookmarks", "Our Services", "About Us", "Contact Us",
  ];

  const handleNavigation = (item: string) => {
    setIsOpen(false);
    
    if (item === "Moments") {
      navigate('/moments');
    } else if (item === "Hotel Types") {
      navigate('/hotel-types');
    } else if (item === "The Collectives") {
      navigate('/collectives');
    } else if (item === "Bookmarks") {
      navigate('/bookmarks');
    } else if (item === "Our Services") {
      navigate('/our-services');
    } else if (item === "About Us") {
      navigate('/about-us');
    } else if (item === "Contact Us") {
      navigate('/contact-us');
    } else {
      navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="sidebar-container">
      {/* Drawer sidebar that slides from left */}
      <div 
        className={`fixed top-0 left-0 w-full sm:w-80 md:w-96 h-full bg-white transform transition-transform duration-300 ease-in-out z-[100] overflow-hidden shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar content with scrollable menu */}
        <div className="flex flex-col h-full">
          {/* Add proper close button at the top */}
          <div className="flex items-center justify-between p-8 border-b">
            <h2 className="text-xl font-light">Menu</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Scrollable menu items */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="w-full space-y-2">
              {menuItems.map((item) => (
                <li key={item} className="border-b border-gray-100">
                  <button
                    className="block w-full text-xl text-gray-800 hover:text-amber-600 transition-all duration-300 py-4 font-light text-left group"
                    onClick={() => handleNavigation(item)}
                  >
                    <span className="transform group-hover:translate-x-2 group-hover:scale-105 transition-all duration-300 flex items-center">
                      {item}
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay that appears when drawer is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black z-[90] transition-opacity duration-300 ease-in-out"
          style={{ opacity: 0.5 }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}