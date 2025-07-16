import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  companyName?: string;
  navItems?: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ 
  companyName = "Story Book Collectives",
  navItems = [
    { label: "Moments", href: "/moments" },
    { label: "Hotel Types", href: "/hotel-types" },
    { label: "The Collectives", href: "/collectives" },
    { label: "Bookmarks", href: "/bookmarks" },
    { label: "Our Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-4">
      <div className="text-white text-2xl font-bold">
        {companyName}
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-white">
        {navItems.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className="hover:text-gray-300 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-90 md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;