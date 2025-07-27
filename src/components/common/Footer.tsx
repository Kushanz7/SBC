import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and tagline column */}
          <div className="mb-8 md:mb-0">
            <div className="mb-6">
              <img src="/images/SBC-logo-black.png" alt="Storybook Collectives" className="h-16" />
              <p className="text-sm mt-2 italic text-gray-600">Independently Curated</p>
            </div>
          </div>
          
          {/* Column 1 */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Storybook</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-600 hover:text-amber-700 text-sm">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-amber-700 text-sm">About Storybook</Link></li>
              <li><Link to="/our-story" className="text-gray-600 hover:text-amber-700 text-sm">Story by Storybook</Link></li>
              <li><Link to="/sustainable" className="text-gray-600 hover:text-amber-700 text-sm">Actively Sustainable Luxury Hotels</Link></li>
              <li><Link to="/media" className="text-gray-600 hover:text-amber-700 text-sm">Media Relations</Link></li>
              <li><Link to="/best-rate" className="text-gray-600 hover:text-amber-700 text-sm">Best Rate Promise</Link></li>
              <li><Link to="/partnerships" className="text-gray-600 hover:text-amber-700 text-sm">Charities & Partnerships</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-amber-700 text-sm">Jobs at Storybook hotels</Link></li>
              <li><Link to="/global-jobs" className="text-gray-600 hover:text-amber-700 text-sm">Jobs at global Storybook offices</Link></li>
              <li><Link to="/new-hotels" className="text-gray-600 hover:text-amber-700 text-sm">New Storybook Member Hotels</Link></li>
              <li><Link to="/membership" className="text-gray-600 hover:text-amber-700 text-sm">Hotel Membership</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-amber-700 text-sm">Vendor Partners</Link></li>
              <li><Link to="/owners-club" className="text-gray-600 hover:text-amber-700 text-sm">Owners Club</Link></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Agent</h3>
            <ul className="space-y-3">
              <li><Link to="/agent-registration" className="text-gray-600 hover:text-amber-700 text-sm">Agent Registration</Link></li>
              <li><Link to="/benefits" className="text-gray-600 hover:text-amber-700 text-sm">Benefits</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-amber-700 text-sm">Log-in</Link></li>
            </ul>
          </div>
          
          {/* Newsletter and social media */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Follow Us</h3>
            <div className="flex space-x-3 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-700">
                <Mail size={20} />
                <span className="sr-only">Medium</span>
              </a>
            </div>
            
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Sign up to our Newsletter</h3>
            <form className="mb-6">
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4 flex items-start">
                <input 
                  type="checkbox" 
                  id="terms-agreement" 
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="terms-agreement" className="text-xs text-gray-600">
                  I agree to the Storybook <a href="/terms" className="text-amber-700 hover:underline">Terms & Conditions</a> and I have read the <a href="/privacy" className="text-amber-700 hover:underline">Privacy Policy</a>
                </label>
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with copyright and links */}
      <div className="bg-gray-800 mt-16 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Storybook Collectives of the World
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="/terms" className="text-white text-sm hover:text-amber-300 mb-2 md:mb-0">Terms & Conditions</a>
            <a href="/privacy" className="text-white text-sm hover:text-amber-300 mb-2 md:mb-0">Privacy Policy</a>
            <a href="/club-terms" className="text-white text-sm hover:text-amber-300 mb-2 md:mb-0">Club Terms</a>
            <a href="/reservation-terms" className="text-white text-sm hover:text-amber-300 mb-2 md:mb-0">Reservation Terms</a>
            <a href="/contact" className="text-white text-sm hover:text-amber-300 mb-2 md:mb-0">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;