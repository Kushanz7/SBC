import { useState, useEffect, useRef } from 'react';
import { MapPin, Star, ChevronLeft, ChevronRight, Filter, Search, X } from 'lucide-react';
import { gsap } from 'gsap';
import {hotels} from '../data/hotels'; // Import the hotels data

// Expanded hotel type filters matching the design
const hotelTypeFilters = [
  { id: 'adults-only', name: 'Adults Only' },
  { id: 'adventure', name: 'Adventure and Activity' },
  { id: 'all-inclusive', name: 'All Inclusive' },
  { id: 'beach-resort', name: 'Beach Resort' },
  { id: 'city-centre', name: 'City Centre' },
  { id: 'considerate', name: 'Considerate Collection' },
  { id: 'family', name: 'Family Friendly' },
  { id: 'fine-dining', name: 'Fine Dining' },
  { id: 'finest', name: 'Finest Collection' },
  { id: 'golf', name: 'Golf Course' },
  { id: 'historic', name: 'Historic Hotel' },
  { id: 'honeymoon', name: 'Honeymoon' },
  { id: 'unesco', name: 'UNESCO World Heritage Site' },
  { id: 'pool', name: 'Pool' },
  { id: 'wine', name: 'Wine Cellar' },
  { id: 'waterfront', name: 'Lake or Waterfront' },
  { id: 'country-house', name: 'Country House Hotel' },
  { id: 'mice', name: 'MICE Hotel' },
  { id: 'michelin', name: 'Michelin Star' },
  { id: 'modern', name: 'Modern Design' },
  { id: 'new', name: 'New Hotels' },
  { id: 'outdoor', name: 'Outdoor Resort' },
  { id: 'pet', name: 'Pet Friendly' },
  { id: 'private-island', name: 'Private Island' },
  { id: 'rooftop', name: 'Rooftop' },
  { id: 'ski', name: 'Ski Resort' },
  { id: 'spa', name: 'Spa' }
];

const ExploreHotels = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("RELEVANCE");
  const [currentSlides, setCurrentSlides] = useState<Record<number, number>>({});
  const [showFilterModal, setShowFilterModal] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // For search filters
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1 Room, 2 Guests",
    agentId: ""
  });
  
  // Initialize current slide for each hotel
  useEffect(() => {
    const initialSlides: Record<number, number> = {};
    hotels.forEach(hotel => {
      initialSlides[hotel.id] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  // GSAP animation for page elements
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Hero section animation
    if (heroRef.current) {
      tl.fromTo(
        heroRef.current.querySelector('.hero-content'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
    
    tl.fromTo(".search-container", 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    ).fromTo(".filter-container", 
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.3"
    ).fromTo(".hotel-card", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    ).fromTo(".map-container", 
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  // Handle image navigation for hotel galleries
  const navigateSlide = (hotelId: number, direction: 'next' | 'prev') => {
    const currentIndex = currentSlides[hotelId];
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return;
    
    const totalSlides = hotel.images.length;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalSlides;
    } else {
      newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    
    setCurrentSlides({
      ...currentSlides,
      [hotelId]: newIndex
    });
  };

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Update search parameters
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/beachfront.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="hero-content text-white max-w-3xl">
            <h1 className="text-5xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Find Your Perfect Stay
            </h1>
            <p className="text-xl mb-8 max-w-xl">
              Explore our curated collection of extraordinary hotels and resorts across the globe.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded text-white font-medium transition-colors">
                Browse Luxury Hotels
              </button>
              <button className="px-6 py-3 border border-white hover:bg-white/20 rounded text-white font-medium transition-colors">
                View Special Offers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar container */}
      <div className="search-container bg-white shadow-md p-4 sticky top-20 z-30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Location */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-1">LOCATION</p>
              <input
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleSearchChange}
                placeholder="Where would you like to go?"
                className="w-full p-2 border border-gray-200 rounded text-sm"
              />
            </div>
            
            {/* Check-in date */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-1">CHECK IN</p>
              <input
                type="date"
                name="checkIn"
                value={searchParams.checkIn}
                onChange={handleSearchChange}
                className="w-full p-2 border border-gray-200 rounded text-sm"
              />
            </div>
            
            {/* Check-out date */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-1">CHECK OUT</p>
              <input
                type="date"
                name="checkOut"
                value={searchParams.checkOut}
                onChange={handleSearchChange}
                className="w-full p-2 border border-gray-200 rounded text-sm"
              />
            </div>
            
            {/* Guests */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-1">GUESTS</p>
              <select 
                name="guests" 
                value={searchParams.guests}
                onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
                className="w-full p-2 border border-gray-200 rounded text-sm"
              >
                <option value="1 Room, 1 Guest">1 Room, 1 Guest</option>
                <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
                <option value="2 Rooms, 3 Guests">2 Rooms, 3 Guests</option>
                <option value="2 Rooms, 4 Guests">2 Rooms, 4 Guests</option>
              </select>
            </div>
            
            {/* Agent ID */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500 mb-1">AGENT ID/IATA</p>
              <input
                type="text"
                name="agentId"
                value={searchParams.agentId}
                onChange={handleSearchChange}
                placeholder="AGENT ID/IATA"
                className="w-full p-2 border border-gray-200 rounded text-sm"
              />
            </div>
            
            {/* Search button */}
            <div className="flex-none">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded font-medium mt-4 md:mt-0">
                SHOW PRICES →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="filter-container flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-sm sticky top-42 z-20">
        <div className="flex items-center mb-3 md:mb-0">
          <div className="relative">
            <button 
              onClick={() => setShowFilterModal(!showFilterModal)}
              className="flex items-center text-amber-800 hover:text-amber-900 font-medium bg-white border border-gray-200 rounded px-4 py-2"
            >
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm">FILTER BY HOTEL TYPE</span>
              <svg className={`ml-2 h-5 w-5 transition-transform ${showFilterModal ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Filter Panel - KEEP ONLY THIS */}
            {showFilterModal && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl z-30 w-[1000px] p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold flex items-center">
                    <Filter className="w-5 h-5 mr-2" /> FILTER BY HOTEL TYPE
                  </h2>
                  <button 
                    onClick={() => setShowFilterModal(false)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 max-h-80 overflow-y-auto">
                  {hotelTypeFilters.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`dropdown-${filter.id}`}
                        checked={activeFilters.includes(filter.name)}
                        onChange={() => toggleFilter(filter.name)}
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label htmlFor={`dropdown-${filter.id}`} className="ml-2 text-sm text-gray-700 cursor-pointer">
                        {filter.name}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end space-x-3 border-t pt-4">
                  <button 
                    onClick={() => setActiveFilters([])}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setShowFilterModal(false)}
                    className="px-4 py-2 bg-amber-600 rounded text-white hover:bg-amber-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="flex items-center ml-4 flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                >
                  {filter}
                  <button 
                    type="button"
                    className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-amber-800 hover:bg-amber-200 focus:outline-none"
                    onClick={() => toggleFilter(filter)}
                  >
                    <span className="sr-only">Remove filter for {filter}</span>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              <button 
                onClick={() => setActiveFilters([])}
                className="text-xs text-amber-800 hover:text-amber-900 font-medium underline"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by:</span>
          <select 
            className="p-2 border border-gray-200 rounded text-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="RELEVANCE">RELEVANCE</option>
            <option value="PRICE_LOW">PRICE (LOW TO HIGH)</option>
            <option value="PRICE_HIGH">PRICE (HIGH TO LOW)</option>
            <option value="RATING">RATING</option>
          </select>
        </div>
      </div>
      
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column - Hotels */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="text-sm text-gray-600 font-medium">
              {hotels.length} hotels
            </div>
            
            {/* Hotel listings */}
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {/* Hotel image gallery */}
                  <div className="relative md:w-1/3">
                    <div className="relative h-60 md:h-full">
                      <img
                        src={hotel.images[currentSlides[hotel.id]]}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Image navigation arrows */}
                      <button 
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center hover:bg-white"
                        onClick={() => navigateSlide(hotel.id, 'prev')}
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <button 
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center hover:bg-white"
                        onClick={() => navigateSlide(hotel.id, 'next')}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </button>
                      {/* Image dots indicator */}
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {hotel.images.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${
                              currentSlides[hotel.id] === i ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hotel details */}
                  <div className="p-5 md:w-2/3 flex flex-col">
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h2>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center bg-amber-500 text-white px-2 py-1 rounded-sm">
                          <span className="font-bold">{hotel.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600 ml-2">{hotel.reviews} reviews</div>
                      </div>
                    </div>
                    
                    <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end">
                      <div className="mb-3 md:mb-0">
                        <p className="text-sm text-gray-600">Enter dates and search</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded hover:bg-amber-600 transition-colors">
                          SHOW PRICES →
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                          QUICK VIEW →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right column - Map */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="map-container sticky top-24 bg-gray-200 rounded-lg h-[calc(100vh-120px)] overflow-hidden shadow-md">
              <div className="relative w-full h-full" ref={mapRef}>
                {/* Placeholder for actual map integration */}
                <div className="absolute inset-0 bg-gray-200">
                  {/* This would be replaced with your actual map implementation */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="mb-4">
                        <MapPin className="w-12 h-12 mx-auto" />
                      </div>
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-sm">Map will load here with hotel locations</p>
                    </div>
                  </div>
                  
                  {/* Hotel price markers - these would be positioned correctly with a real map */}
                  {hotels.map((hotel) => (
                    <div 
                      key={hotel.id}
                      className="absolute bg-amber-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-sm font-bold"
                      style={{
                        top: `${Math.random() * 80 + 10}%`, 
                        left: `${Math.random() * 80 + 10}%`
                      }}
                    >
                      ${hotel.price}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreHotels;