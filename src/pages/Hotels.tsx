import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { dummyHotel } from '../data/hotelData';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaUser } from 'react-icons/fa';

const HotelPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = dummyHotel; // In a real app, you would fetch the hotel by ID
  
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  
  const mapRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const reviewsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const roomsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with main image */}
      <section className="relative h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 z-10 bg-black/30"></div>
        <div className="absolute z-20 bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          <h1 className="text-3xl md:text-5xl font-light mb-2">{hotel.name}</h1>
          <div className="flex items-center text-sm">
            <FaMapMarkerAlt className="mr-1" />
            <span>{hotel.location.city}, {hotel.location.country}</span>
          </div>
        </div>
        <img
          src={hotel.mainImage}
          alt={hotel.name}
          className="object-cover h-full w-full"
        />
      </section>
      
      {/* Booking widget */}
      <div className="sticky top-20 z-30 bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-lg font-medium">Make a Reservation</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="border rounded-md p-2">
              <label htmlFor="checkInDate" className="block text-xs text-gray-500">Check In</label>
              <div className="flex items-center">
                <FaCalendarAlt className="text-amber-800 mr-2" />
                <input 
                  type="date" 
                  id="checkInDate" 
                  value={checkInDate} 
                  onChange={(e) => setCheckInDate(e.target.value)} 
                  className="outline-none text-sm" 
                />
              </div>
            </div>
            
            <div className="border rounded-md p-2">
              <label htmlFor="checkOutDate" className="block text-xs text-gray-500">Check Out</label>
              <div className="flex items-center">
                <FaCalendarAlt className="text-amber-800 mr-2" />
                <input 
                  type="date" 
                  id="checkOutDate" 
                  value={checkOutDate} 
                  onChange={(e) => setCheckOutDate(e.target.value)} 
                  className="outline-none text-sm" 
                />
              </div>
            </div>
            
            <div className="border rounded-md p-2">
              <label htmlFor="adults" className="block text-xs text-gray-500">Adults</label>
              <div className="flex items-center">
                <FaUser className="text-amber-800 mr-2" />
                <select 
                  id="adults" 
                  value={adults} 
                  onChange={(e) => setAdults(parseInt(e.target.value))} 
                  className="outline-none text-sm"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="border rounded-md p-2">
              <label htmlFor="children" className="block text-xs text-gray-500">Children</label>
              <div className="flex items-center">
                <FaUser className="text-amber-800 mr-2" />
                <select 
                  id="children" 
                  value={children} 
                  onChange={(e) => setChildren(parseInt(e.target.value))} 
                  className="outline-none text-sm"
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900 transition-colors">
              Check Availability
            </button>
          </div>
        </div>
      </div>
      
      {/* Hotel Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Left Column - Overview */}
            <div className="w-full md:w-7/12 pr-0 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-light text-amber-800 mb-6">{hotel.tagline}</h2>
              <p className="text-gray-700 mb-8">{hotel.overview}</p>
              
              <div className="mb-8">
                <button className="text-amber-800 font-medium hover:underline">READ MORE</button>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex gap-4 border-t border-gray-200 pt-6">
                <button 
                  onClick={() => scrollToSection(roomsRef)} 
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-md text-sm"
                >
                  View Rooms
                </button>
                <button 
                  onClick={() => scrollToSection(mapRef)} 
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-md text-sm"
                >
                  Location
                </button>
                <button 
                  onClick={() => scrollToSection(reviewsRef)} 
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-md text-sm"
                >
                  Reviews
                </button>
              </div>
            </div>
            
            {/* Right Column - Ratings */}
            <div className="w-full md:w-5/12">
              <h3 className="text-center text-lg mb-6">Ratings</h3>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {hotel.ratings.map((rating, index) => (
                  <div key={index} className="bg-white p-4 shadow-md rounded-md flex flex-col items-center w-32">
                    {rating.logo && (
                      <img src={rating.logo} alt={rating.source} className="h-10 mb-2" />
                    )}
                    {!rating.logo && (
                      <div className="text-sm font-medium mb-2">{rating.source}</div>
                    )}
                    <div className="flex items-end">
                      <span className="text-xl font-bold">{rating.score}</span>
                      <span className="text-xs text-gray-500">/{rating.maxScore}</span>
                    </div>
                    <div className="flex text-amber-400 my-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.round(rating.score) ? "text-amber-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">{rating.reviewCount} reviews</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button className="text-amber-800 text-sm hover:underline">
                  See all reviews →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-10">Guest Reviews</h2>
          
          <div className="max-w-3xl mx-auto">
            {hotel.reviews.map((review) => (
              <div key={review.id} className="mb-8 border-b border-gray-200 pb-8">
                <div className="flex items-center text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "text-amber-400" : "text-gray-300"} />
                  ))}
                  <span className="ml-2 text-gray-700">{review.rating}</span>
                </div>
                
                <p className="text-gray-800 mb-4 font-medium">{review.comment}</p>
                
                <div className="text-gray-600 text-sm italic mb-2">
                  "The service is simply outstanding and the location is just divine. There is a beautiful pool too."
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-medium mr-2">By {review.user}</span>
                    <span className="text-gray-500">· {review.date}</span>
                  </div>
                  <span className="text-gray-500 text-sm">True Review</span>
                </div>
              </div>
            ))}
            
            <div className="text-center">
              <button className="text-amber-800 hover:underline text-sm">
                Show all →
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-10">Key Features</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {hotel.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={feature.icon} alt={feature.name} className="w-12 h-12 mb-3" />
                <span className="text-sm">{feature.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-amber-800 hover:underline text-sm">
              All Hotel Features and Services →
            </button>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section ref={mapRef} className="py-12 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-10">Location of your stay</h2>
          
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="bg-gray-200 h-64 rounded-md overflow-hidden">
                <img 
                  src="/images/map-placeholder.jpg" 
                  alt="Hotel location map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="font-medium mb-2">Hotel Address</h3>
              <address className="not-italic text-gray-700 mb-6">
                {hotel.location.address}<br />
                {hotel.location.city}<br />
                {hotel.location.state}<br />
                {hotel.location.country}<br />
                {hotel.location.postalCode}
                
                <div className="mt-4">
                  <strong>Phone:</strong> +1 555-123-4567
                </div>
                <div className="mb-4">
                  <strong>Email:</strong> info@canferrereta.com
                </div>
                
                <button className="text-amber-800 hover:underline text-sm">
                  View larger map and get directions
                </button>
              </address>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section ref={roomsRef} id="our-rooms" className="py-12 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-10">Our Rooms</h2>
          
          {hotel.rooms.map((room, index) => (
            <div key={room.id} className="mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row border border-gray-200">
                <div className="w-full md:w-1/2">
                  <img 
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{room.name}</h3>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="mr-4 flex items-center">
                        <FaUser className="mr-1" />
                        <span>{room.capacity} Guests</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8v4m0 4h.01M20.05 8a3 3 0 00-2-2.82 3 3 0 00-3.51.5 3 3 0 00-.04 4.24l.5.51-.5.51A3 3 0 0015 14a3 3 0 003.5.5 3 3 0 002-2.82V8z" />
                        </svg>
                        <span>{room.size} m²</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{room.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Room amenities:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {room.amenities.slice(0, 6).map((amenity, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-light">€{room.price}</span>
                      <span className="text-sm text-gray-500"> / night</span>
                    </div>
                    
                    <button className="px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Hotel Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-10">Our Hotel</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-3">
              <img 
                src={hotel.images[2]} 
                alt="Hotel exterior" 
                className="w-full h-64 object-cover" 
              />
            </div>
            
            {hotel.images.slice(1, 6).map((image, index) => (
              <div key={index} className={index === 0 ? "md:col-span-3" : "md:col-span-1"}>
                <img 
                  src={image} 
                  alt={`Hotel image ${index + 1}`} 
                  className="w-full h-32 object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-4">Experience the Magic of Can Ferrereta</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book your stay now and discover why our boutique hotel is the perfect retreat for discerning travelers.
          </p>
          <button className="px-8 py-3 bg-white text-amber-800 rounded-md hover:bg-gray-100 transition-colors">
            Book Your Stay
          </button>
        </div>
      </section>
    </div>
  );
};

export default HotelPage;