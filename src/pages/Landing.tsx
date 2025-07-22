import React, { useEffect, useState, useRef } from 'react';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function LandingPage() {
  const [arrowBounce, setArrowBounce] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(Array(6).fill(null));
  
  const videos = [
    "/b.mp4",
    "/b1.mp4",
    "/b2.mp4",
    "/b3.mp4",
    "/b4.mp4",
    "/b5.mp4"
  ];

  // Set up the bounce animation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setArrowBounce(true);
      setTimeout(() => setArrowBounce(false), 500);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle video transitions
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Event listener for when current video ends
    const handleVideoEnd = () => {
      // Move to next video in sequence
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
    
    // Add fade-in class when video starts playing
    const handlePlay = () => {
      video.classList.add('opacity-100');
      video.classList.remove('opacity-0');
    };
    
    // Listen for video ended event to transition to next video
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('play', handlePlay);
    
    // Clean up event listeners
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('play', handlePlay);
    };
  }, [currentVideoIndex, videos.length]);
  
  // Preload videos for smoother transitions
  useEffect(() => {
    videos.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'video';
      document.head.appendChild(link);
    });
  }, []);
  
  // Handle scroll to destinations section
  const handleScrollToDestinations = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (destinationsRef.current) {
      destinationsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback if ref isn't attached
      const destinationsSection = document.getElementById('destinations');
      if (destinationsSection) {
        destinationsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  // Marquee animation
  useEffect(() => {
    const marqueeText = document.querySelector('.marquee-text');
    if (marqueeText) {
      // Get the width of first set of items (half of the total content)
      const contentWidth = (marqueeText as HTMLElement).offsetWidth / 2;
      
      // Create the looping animation
      gsap.to(marqueeText, {
        x: `-${contentWidth}px`,
        ease: "none",
        duration: 20,
        repeat: -1,
        // Reset position when complete for seamless loop
        onRepeat: function() {
          gsap.set(marqueeText, { x: 0 });
        }
      });
    }
  }, []);

  return (
    <div className="relative h-full">
     
      {/* Main Content - explicitly enable scrolling */}
      <main className="h-full overflow-y-auto">
        {/* Hero Section */}
        <div className="relative w-full h-screen overflow-hidden" id="hero">
          {/* Video background with crossfade transition */}
          <video
            key={videos[currentVideoIndex]}
            ref={videoRef}
            autoPlay
            muted
            className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-0"
            onLoadedData={(e) => e.currentTarget.play()}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              SUSTAINABLE SANCTUARIES
            </h1>
            <p className="mb-8 text-lg md:text-xl">Explore Considerate Collection</p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 flex items-center space-x-4 w-full max-w-4xl mb-8">
              <div className="flex items-center space-x-2 px-4 py-2 flex-1">
                <MapPin className="text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="outline-none text-gray-700 w-full"
                />
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 border-l">
                <Calendar className="text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Check-in"
                  className="outline-none text-gray-700 w-24"
                />
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 border-l">
                <Calendar className="text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Check-out"
                  className="outline-none text-gray-700 w-24"
                />
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 border-l">
                <Users className="text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Guests"
                  className="outline-none text-gray-700 w-20"
                />
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <button className="group flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full py-4 px-8 text-white hover:bg-white/30 transition-all duration-500">
              EXPLORE CONSIDERATE COLLECTION 
              <div className="flex items-center justify-center">
                <span className="group-hover:bg-white group-hover:p-2 group-hover:rounded-full transform group-hover:rotate-0 -rotate-180 transition-all duration-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none" className="transform group-hover:scale-75 transition-all duration-500">
                    <path d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z" fill="white" className="group-hover:fill-black transition-all duration-500" />
                  </svg>
                </span>
              </div>
            </button>
            
            {/* Animated down arrow button */}
            <button 
              onClick={handleScrollToDestinations} 
              className="absolute bottom-10 animate-bounce transition-all duration-500 cursor-pointer bg-transparent border-0 focus:outline-none"
              aria-label="Scroll to destinations"
            >
              <div className="flex flex-col items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-8 w-8 transition-transform duration-300 ${arrowBounce ? 'translate-y-1' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Destinations Section - Minimalistic White UI */}
        <div id="destinations" ref={destinationsRef} className="bg-[#faf6f2] py-16 md:py-14 scroll-mt-10">
          <div className="container mx-auto px-4 md:px-8">
            {/* Three Column Destinations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Destination 1 */}
              <div className="bg-white p-4 pb-8 flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src="/images/destinations/arched-entry.jpg" 
                    alt="In With The Old" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-black font-medium text-lg mb-1">In With The Old</h3>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  Experience historic elegance through our collection of beautifully restored properties that blend timeless architecture with contemporary comfort, creating spaces that tell stories of the past.
                </p>
                <button className="text-amber-800 text-sm hover:text-amber-900 font-medium">
                  VIEW MORE →
                </button>
              </div>
              
              {/* Destination 2 */}
              <div className="bg-white p-4 pb-8 flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src="/images/destinations/seaside-hotel.jpg" 
                    alt="Seaside Bliss" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-black font-medium text-lg mb-1">Seaside Bliss</h3>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  Discover our carefully curated oceanfront havens where the rhythmic sounds of waves become your daily soundtrack and every sunrise paints a new masterpiece on your horizon.
                </p>
                <button className="text-amber-800 text-sm hover:text-amber-900 font-medium">
                  VIEW MORE →
                </button>
              </div>
              
              {/* Destination 3 */}
              <div className="bg-white p-4 pb-8 flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src="/images/destinations/urban-oasis.jpg" 
                    alt="Urban Vibes" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-black font-medium text-lg mb-1">Urban Vibes</h3>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  Immerse yourself in culture and energy with our city center sanctuaries, offering refined luxury amidst the vibrant pulse of metropolitan life with access to the best local experiences.
                </p>
                <button className="text-amber-800 text-sm hover:text-amber-900 font-medium">
                  VIEW MORE →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          
        </div>
        {/* Add this section to your landing page */}
        <div className="bg-[#faf6f2] pb-12 overflow-hidden">
          <div 
            className="marquee-container"
            ref={(el) => { sectionRefs.current[5] = el; }}
          >
            <div className="marquee-text">
              {/* First set of items */}
              <span className="mx-8 text-2xl text-amber-800 font-light">LUXURY</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">BOUTIQUE</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">EXPERIENCE</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">CURATED</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              
              {/* Duplicate set of items for seamless looping */}
              <span className="mx-8 text-2xl text-amber-800 font-light">LUXURY</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">BOUTIQUE</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">EXPERIENCE</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">CURATED</span>
              <span className="mx-8 text-2xl text-amber-800 font-light">•</span>
            </div>
          </div>
        </div>
        
        {/* Pillars of Boutique Living */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl text-amber-800 font-light italic mb-12">Pillars of Boutique Living</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                  <img src="/images/icons/globe.png" alt="Curated Stays" className="max-w-full max-h-full" />
                </div>
                <h3 className="text-black font-medium text-gray-900 mb-2">Curated Stays</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Each property in our collection has been handpicked for its exceptional quality, unique character, and outstanding service.
                </p>
                <button className="text-amber-800 text-xs hover:text-amber-900 font-medium">
                  LEARN MORE →
                </button>
              </div>
              
              {/* Pillar 2 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                  <img src="/images/icons/flower.png" alt="Perfectly Tailored" className="max-w-full max-h-full" />
                </div>
                <h3 className="text-black font-medium text-gray-900 mb-2">Perfectly Tailored</h3>
                <p className="text-gray-600 text-sm mb-6">
                  We customize every experience to match your preferences, creating bespoke journeys that reflect your unique travel style.
                </p>
                <button className="text-amber-800 text-xs hover:text-amber-900 font-medium">
                  LEARN MORE →
                </button>
              </div>
              
              {/* Pillar 3 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                  <img src="/images/icons/balloon.png" alt="Exclusive Connections" className="max-w-full max-h-full" />
                </div>
                <h3 className="text-black font-medium text-gray-900 mb-2">Exclusive Connections</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Our global network provides access to private experiences and special arrangements that transform ordinary trips into extraordinary memories.
                </p>
                <button className="text-amber-800 text-xs hover:text-amber-900 font-medium">
                  LEARN MORE →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step Into Our World Section */}
        <div className="bg-[#faf6f2] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="uppercase text-center font-medium text-gray-800 mb-12">Step into our characterful world</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Experience 1 */}
              <div className="bg-white p-4 pb-8 flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src="/images/experiences/beach-cliffs.jpg" 
                    alt="Give the Gift of Travel" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-black font-medium text-lg mb-1">Give the Gift of Travel</h3>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  A Storybook Collectives gift card is more than just a present—it's the promise of extraordinary experiences and memories that will last a lifetime.
                </p>
                <button className="text-amber-800 text-sm hover:text-amber-900 font-medium">
                  LEARN MORE →
                </button>
              </div>
              
              {/* Experience 2 */}
              <div className="bg-white p-4 pb-8 flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src="/images/experiences/exclusive-retreats.jpg" 
                    alt="Exclusive Retreats" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-black font-medium text-lg mb-1">Exclusive Retreats</h3>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  Discover our private sanctuaries where luxury, privacy, and personalized service come together to create unforgettable moments of tranquility.
                </p>
                <button className="text-amber-800 text-sm hover:text-amber-900 font-medium">
                  EXPLORE NOW →
                </button>
              </div>
              
              {/* Experience 3 */}
              <div className="bg-white p-4 pb-8 flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src="/images/experiences/characterful-hotels.jpg" 
                    alt="Characterful Hotels" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-black font-medium text-lg mb-1">Characterful Hotels</h3>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  Each of our properties tells its own unique story through thoughtful design, cultural connections, and authentic experiences that capture the essence of its location.
                </p>
                <button className="text-amber-800 text-sm hover:text-amber-900 font-medium">
                  VIEW OUR HOTELS →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Independently Minded Hotels */}
        <div className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="uppercase text-center font-medium text-gray-800 mb-12">Over 520 independently minded hotels worldwide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Pool Hotels - Larger Grid Item */}
              <div className="md:col-span-6 lg:col-span-6 relative overflow-hidden group cursor-pointer">
                <img 
                  src="/images/hotels/pool-hotels.jpg" 
                  alt="Pool Hotels" 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-medium">Pool Hotels</h3>
                  <div className="w-10 h-0.5 bg-white my-2"></div>
                  <p className="text-white text-sm">Explore properties</p>
                </div>
              </div>
              
              {/* Small Grid Items - Top Row */}
              <div className="md:col-span-3 lg:col-span-3 relative overflow-hidden group cursor-pointer">
                <img 
                  src="/images/hotels/beach-hotels.jpg" 
                  alt="Beach Hotels" 
                  className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-black text-lg font-medium">Beach Hotels</h3>
                  <div className="w-8 h-0.5 bg-black my-1"></div>
                  <p className="text-black text-xs">Explore properties</p>
                </div>
              </div>
              
              <div className="md:col-span-3 lg:col-span-3 relative overflow-hidden group cursor-pointer">
                <img 
                  src="/images/hotels/adults-only.jpg" 
                  alt="Adults Only Hotels" 
                  className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-black text-lg font-medium">Adults Only Hotels</h3>
                  <div className="w-8 h-0.5 bg-black my-1"></div>
                  <p className="text-black text-xs">Explore properties</p>
                </div>
              </div>
              
              {/* Large Right Side Grid Item */}
              <div className="md:col-span-6 lg:col-span-6 row-span-2 relative overflow-hidden group cursor-pointer">
                <img 
                  src="/images/hotels/all-inclusive.jpg" 
                  alt="All Inclusive Resorts" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-medium">All Inclusive Resorts</h3>
                  <div className="w-10 h-0.5 bg-white my-2"></div>
                  <p className="text-white text-sm">Explore properties</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full transition-colors">
                View All Hotel Types
              </button>
            </div>
          </div>
        </div>
        
        {/* Unlock Exclusive Offers */}
        <div className="bg-[#faf6f2] py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="uppercase text-center font-medium text-gray-800 mb-12">Unlock exclusive offers across all SBH hotels</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Spa Treatment */}
              <div className="relative overflow-hidden group cursor-pointer col-span-2 row-span-2">
                <img 
                  src="/images/offers/spa-excellence.jpg" 
                  alt="Spa Treatment of Excellence" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay with transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-medium">Spa Treatment of Excellence</h3>
                  
                  {/* Animated underline */}
                  <div className="relative h-0.5 bg-transparent mt-2 mb-2 overflow-hidden">
                    <div className="w-0 h-0.5 bg-white absolute left-0 top-0 group-hover:w-10 transition-all duration-500 ease-out"></div>
                  </div>
                  
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore more →
                  </span>
                </div>
              </div>
              
              {/* Suite Upgrade */}
              <div className="relative overflow-hidden group cursor-pointer col-span-2">
                <img 
                  src="/images/offers/suite-upgrades.jpg" 
                  alt="Suite Upgrades" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay with transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-medium">Suite Upgrades</h3>
                  
                  {/* Animated underline */}
                  <div className="relative h-0.5 bg-transparent mt-2 mb-2 overflow-hidden">
                    <div className="w-0 h-0.5 bg-white absolute left-0 top-0 group-hover:w-10 transition-all duration-500 ease-out"></div>
                  </div>
                  
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore more →
                  </span>
                </div>
              </div>
              
              {/* Breakfast */}
              <div className="relative overflow-hidden group cursor-pointer">
                <img 
                  src="/images/offers/complimentary-breakfast.jpg" 
                  alt="3 Course Dinner" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay with transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-medium">3 Course Dinner</h3>
                  
                  {/* Animated underline */}
                  <div className="relative h-0.5 bg-transparent mt-2 mb-2 overflow-hidden">
                    <div className="w-0 h-0.5 bg-white absolute left-0 top-0 group-hover:w-10 transition-all duration-500 ease-out"></div>
                  </div>
                  
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore more →
                  </span>
                </div>
              </div>
              
              {/* Golf */}
              <div className="relative overflow-hidden group cursor-pointer">
                <img 
                  src="/images/offers/complimentary-golf.jpg" 
                  alt="Complimentary Golf" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay with transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-medium">Complimentary Golf</h3>
                  
                  {/* Animated underline */}
                  <div className="relative h-0.5 bg-transparent mt-2 mb-2 overflow-hidden">
                    <div className="w-0 h-0.5 bg-white absolute left-0 top-0 group-hover:w-10 transition-all duration-500 ease-out"></div>
                  </div>
                  
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore more →
                  </span>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full transition-colors">
                Discover More Moments
              </button>
            </div>
          </div>
        </div>
        
        {/* Give the Gift of Travel - Repeat Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-black text-3xl font-light mb-6">Give the Gift of Travel</h2>
                <p className="text-gray-700 mb-6">
                  A Storybook Collectives gift card is more than just a present—it's the promise of extraordinary experiences and memories that will last a lifetime. Perfect for special occasions or just because.
                </p>
                <button className="px-6 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors rounded-full text-sm">
                  LEARN MORE →
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/images/forest-road.jpg" 
                  alt="Forest road aerial view" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add this style block for better scrolling */}
      <style>{`
        html, body, #__next {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-y: auto;
        }
        
        .scroll-mt-8 {
          scroll-margin-top: 2rem;
        }
        
        * {
          scroll-behavior: smooth;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-text {
          display: inline-block;
          white-space: nowrap;
          will-change: transform;
        }

        /* For responsive text size */
        @media (max-width: 768px) {
          .marquee-text span {
            font-size: 1.25rem; /* Smaller text on mobile */
            margin-left: 0.75rem;
            margin-right: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}