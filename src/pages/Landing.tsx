import React, { useEffect, useState, useRef } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function LandingPage() {
  const [arrowBounce, setArrowBounce] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background with crossfade transition */}
      <video
        key={videos[currentVideoIndex]} // Key helps React know when to create a new video element
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
        
        {/* Search form */}
        {/* <div className="bg-white/90 p-4 rounded-lg flex flex-wrap justify-center gap-2 md:gap-4 text-black max-w-4xl w-full mb-12">
          <input className="p-2 rounded w-full md:w-auto flex-1" placeholder="Where would you like to go?" />
          <input className="p-2 rounded w-full md:w-auto" type="date" />
          <input className="p-2 rounded w-full md:w-auto" type="date" />
          <input className="p-2 rounded w-full md:w-auto" placeholder="Guests" />
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
            Search
          </button>
        </div> */}

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
        
        {/* Video carousel indicator dots */}
        {/* <div className="absolute bottom-28 flex space-x-2">
          {videos.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentVideoIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`View video ${index + 1}`}
            />
          ))}
        </div> */}
        
        {/* Animated down arrow button */}
        <a 
          href="#forestis" 
          className="absolute bottom-10 animate-bounce transition-all duration-500"
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
        </a>
      </div>
    </div>
  );
}
