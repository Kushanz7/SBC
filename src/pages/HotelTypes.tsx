import React, { useEffect, useRef, useState } from 'react';
import { hotelCategories, featuredCategories, collectionCategories } from '../data/hoteltypes'; // Adjust the import path as necessary
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HotelTypes: React.FC = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Register GSAP plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // GSAP scroll animation for Hotel Categories Section
  useEffect(() => {
    if (!categoriesRef.current) return;

    const categoryRows = categoriesRef.current.querySelectorAll('.hotel-category-row');
    categoryRows.forEach((row, i) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const videos = ['/b5.mp4'];
  const [currentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-full">
      {/* Main Content - explicitly enable scrolling */}
      <main className="pb-10 h-full overflow-y-auto">
        {/* Hero Section */}
        <div className="relative w-full h-[80vh] overflow-hidden" id="hero">
          {/* Video background with crossfade transition */}
          <video
            key={videos[currentVideoIndex]}
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
            onLoadedData={(e) => e.currentTarget.play()}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Content */}
          <div className="container mx-auto px-6 text-center relative z-10 text-white flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Find Your <span className="font-normal">Perfect Stay</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 animate-fade-in-delay">
              Discover our collection of extraordinary accommodations carefully curated for the discerning traveler
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors rounded-full font-medium">
              Explore All Properties
            </button>
          </div>
        </div>
        
        {/* Intro Section with Image */}
        <div className="py-20 bg-amber-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
                <h2 className="text-3xl font-light mb-6">Explore our new arrivals</h2>
                <p className="text-gray-700 mb-6">
                  Each property in our collection is handpicked for its exceptional quality, unique character, and outstanding service. From boutique gems to luxurious retreats, we connect you to the world's most memorable stays.
                </p>
                <button className="px-6 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors rounded-full text-sm">
                  VIEW MORE →
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/images/boutique-entrance.jpg" 
                  alt="Luxury hotel entrance with greenery" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Pillars of Boutique Luxury */}
        <div 
          className="py-16"
          data-animate
          id="featured-section"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-light italic text-white-800 mb-16">
              Pillars of Boutique Luxury
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredCategories.map((category, index) => (
                <div 
                  key={category.id} 
                  className={`text-center transition-all duration-800 ${
                    visibleSections.has('featured-section') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms` 
                  }}
                >
                  <div className="mx-auto w-24 h-24 mb-6">
                    <img src={category.icon} alt={category.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <button className="text-amber-800 text-sm font-medium hover:text-amber-900 transition-colors">
                    LEARN MORE →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Hotel Categories Section */}
        <div
          className="categories-section"
          ref={categoriesRef}
          data-animate
          id="categories-section"
        >
          {hotelCategories.map((category, index) => (
            <div
              key={category.id}
              className={`hotel-category-row flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${category.background} transition-all duration-1000 ease-out`}
              style={{
                opacity: 0, // Initial state for GSAP
                transform: 'translateY(60px)', // Initial state for GSAP
              }}
            >
              <div className="w-full md:w-1/2 p-12 md:p-16 lg:p-20 flex items-center">
                <div>
                  <h2 className="text-black text-3xl font-light mb-6">
                    {category.title}
                  </h2>
                  <p className="text-gray-700 mb-8">
                    {category.description}
                  </p>
                  <button className="px-6 py-3 bg-amber-800 text-white hover:bg-amber-900 transition-colors rounded-full text-sm overflow-hidden group relative">
                    <span className="relative z-10">VIEW MORE →</span>
                    <span className="absolute bottom-0 left-0 w-0 h-full bg-amber-900 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-1500"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Give the Gift Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
                <h2 className="text-3xl font-light mb-6">Give the Gift of Travel</h2>
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
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Collection Grid */}
        <div 
          className="py-16 bg-gray-50"
          data-animate
          id="collection-section"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-black text-3xl font-light text-center mb-16">
              Explore Our Collections
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {collectionCategories.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`relative overflow-hidden rounded-lg group transition-all duration-600 ${
                    visibleSections.has('collection-section') 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms` 
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark overlay with transition */}
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    
                    {/* Animated underline */}
                    <div className="relative h-0.5 bg-transparent mt-2 mb-2 overflow-hidden">
                      <div className="w-0 h-0.5 bg-white absolute left-0 top-0 group-hover:w-10 transition-all duration-500 ease-out"></div>
                    </div>
                    
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      View Properties →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="py-20 bg-amber-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-light mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact our dedicated travel advisors to help craft your perfect stay, tailored to your preferences and desires.
            </p>
            <button className="px-8 py-4 bg-amber-800 text-white hover:bg-amber-900 transition-colors rounded-full font-medium">
              Contact an Advisor
            </button>
          </div>
        </div>
      </main>

      {/* Using the same style block as in Moments.tsx */}
      <style>{`
        html, body, #__next {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-y: auto;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default HotelTypes;