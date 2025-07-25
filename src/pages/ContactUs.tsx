import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { gsap } from 'gsap';

const ContactUs = () => {
  const floatingImagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  useEffect(() => {
    // Animation for floating images
    if (floatingImagesRef.current) {
      const images = floatingImagesRef.current.querySelectorAll('.floating-image');
      
      images.forEach((image, index) => {
        const img = image as HTMLElement;
        // Simple CSS animations instead of GSAP for compatibility
        img.style.opacity = '0';
        img.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 10 - 5}deg)`;
        
        setTimeout(() => {
          img.style.transition = 'all 1s ease-out';
          img.style.opacity = '1';
        }, index * 200);
        
        // Continuous floating animation
        setInterval(() => {
          img.style.transform = `translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) rotate(${Math.random() * 16 - 8}deg)`;
        }, 5000 + Math.random() * 3000);
      });
    }

    // Animate title and subtitle
    if (titleRef.current && subtitleRef.current) {
      setTimeout(() => {
        titleRef.current!.style.opacity = '1';
        titleRef.current!.style.transform = 'translateY(0)';
      }, 100);
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 400);
    }

    // Animate form and contact info
    if (formRef.current) {
      const formElements = formRef.current.querySelectorAll('input, textarea, button');
      formElements.forEach((el, i) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, 600 + i * 100);
      });
    }

    if (contactInfoRef.current) {
      const infoItems = contactInfoRef.current.querySelectorAll('.info-item');
      infoItems.forEach((item, i) => {
        setTimeout(() => {
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).style.transform = 'translateX(0)';
        }, 800 + i * 150);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-600/90 via-amber-100/40 to-teal-50/30 relative overflow-hidden pb-20">
      {/* Floating Images - Now using real images */}
      <div 
        ref={floatingImagesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <img 
          src="/images/about-us/aerial-beach.jpg" 
          alt="" 
          className="floating-image absolute w-40 h-40 object-cover rounded-lg shadow-lg top-20 left-10 z-0"
        />
        <img 
          src="/images/about-us/pool-view.jpg" 
          alt="" 
          className="floating-image absolute w-32 h-32 object-cover rounded-lg shadow-lg top-40 right-10 z-0"
        />
        <img 
          src="/images/contact/floating1.jpg" 
          alt="" 
          className="floating-image absolute w-36 h-36 object-cover rounded-lg shadow-lg bottom-20 left-20 z-0"
        />
        <img 
          src="/images/contact/floating2.jpg" 
          alt="" 
          className="floating-image absolute w-28 h-28 object-cover rounded-lg shadow-lg bottom-40 right-20 z-0"
        />
        <img 
          src="/images/contact/floating3.jpg" 
          alt="" 
          className="floating-image absolute w-24 h-24 object-cover rounded-lg shadow-lg top-64 left-1/3 z-0"
        />
        <img 
          src="/images/contact/floating4.jpg" 
          alt="" 
          className="floating-image absolute w-32 h-32 object-cover rounded-lg shadow-lg top-80 right-1/4 z-0"
        />
        <img 
          src="/images/contact/floating5.jpg" 
          alt="" 
          className="floating-image absolute w-28 h-28 object-cover rounded-lg shadow-lg bottom-60 left-40 z-0"
        />
        <img 
          src="/images/contact/floating2.jpg" 
          alt="" 
          className="floating-image absolute w-20 h-20 object-cover rounded-lg shadow-lg bottom-10 right-40 z-0"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-28 relative z-10">
        <div className="text-center mb-16">
          <h1 
            ref={titleRef}
            className="text-amber-50 text-4xl md:text-5xl font-light mb-4 opacity-0 transform translate-y-12 transition-all duration-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Connect With Us
          </h1>
          <p 
            ref={subtitleRef}
            className="text-amber-100 text-lg max-w-xl mx-auto opacity-0 transform translate-y-8 transition-all duration-800"
          >
            We'd love to hear from you. Our team is always here to help you plan your perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Removed dummy values */}
          <div 
            ref={formRef}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-200"
          >
            <h2 className="text-2xl font-light mb-2 text-gray-800">Send Us a Message</h2>
            
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white text-gray-800 opacity-0 transform translate-y-10" 
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white text-gray-800 opacity-0 transform translate-y-10" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white text-gray-800 opacity-0 transform translate-y-10" 
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white text-gray-800 opacity-0 transform translate-y-10 resize-vertical" 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group opacity-0 transform translate-y-10 font-medium"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Decorative image at bottom of form */}
              <div className="mt-18 text-center">
                <img 
                  src="/images/safari.jpg" 
                  alt="Storybook Collectives" 
                  className="h-70 mx-auto opacity-70"
                />
                <p className="text-xs text-gray-500 mt-2">Your luxury stay begins with a conversation</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="flex flex-col justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl mb-8 border border-gray-200">
              <h2 className="text-2xl font-light mb-6 text-gray-800">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="info-item flex items-start opacity-0 transform translate-x-10">
                  <MapPin className="w-5 h-5 text-amber-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">78 Marine Drive</p>
                    <p className="text-gray-600">Colombo 06</p>
                    <p className="text-gray-600">Sri Lanka</p>
                  </div>
                </div>
                
                <div className="info-item flex items-start opacity-0 transform translate-x-10">
                  <Phone className="w-5 h-5 text-amber-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">Reception: +94 11 234 5678</p>
                    <p className="text-gray-600">Reservations: +94 77 890 1234</p>
                    <p className="text-gray-600">Concierge: +94 76 567 8901</p>
                  </div>
                </div>
                
                <div className="info-item flex items-start opacity-0 transform translate-x-10">
                  <Mail className="w-5 h-5 text-amber-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">hello@storybookcollectives.com</p>
                    <p className="text-gray-600 text-sm">reservations@storybookcollectives.com</p>
                    <p className="text-gray-600 text-sm">events@storybookcollectives.com</p>
                  </div>
                </div>
                
                <div className="info-item flex items-start opacity-0 transform translate-x-10">
                  <Clock className="w-5 h-5 text-amber-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Reception: 24/7</p>
                    <p className="text-gray-600">Reservations: Mon-Fri 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Weekend: Sat 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-200">
              <h2 className="text-2xl font-light mb-6 text-gray-800">Follow Us</h2>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-900 flex items-center justify-center text-white transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-900 flex items-center justify-center text-white transition-all transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-900 flex items-center justify-center text-white transition-all transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-amber-800 hover:bg-amber-900 flex items-center justify-center text-white transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              
              {/* Additional Contact Options */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 mb-3">Quick Contact</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">WhatsApp: +94 77 123 4567</p>
                  <p className="text-sm text-gray-600">Emergency: +94 11 911 2345</p>
                  <p className="text-sm text-gray-600">Fax: +94 11 234 5679</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-2xl font-light mb-6 text-center text-gray-800">Find Us</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gray-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585891321!2d79.7861542871973!3d6.9218375963939875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1627382714486!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Google Maps - Find Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;