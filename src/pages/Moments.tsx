import React, { useEffect, useState } from 'react';
import { Heart, Share2, MapPin } from 'lucide-react';
import NavBar from '../components/Navbar';

interface Moment {
  id: string;
  title: string;
  category: string;
  location: string;
  hotel: string;
  image: string;
  description: string;
}

const Moments: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [filteredMoments, setFilteredMoments] = useState<Moment[]>([]);

  // Sample data
  const moments: Moment[] = [
    {
      id: '1',
      title: 'Sunrise Yoga',
      category: 'Wellness',
      location: 'Maldives',
      hotel: 'Ocean Paradise Resort',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      description: 'Start your day with peaceful yoga as the sun rises over crystal waters'
    },
    {
      id: '2',
      title: 'Infinity Pool Bliss',
      category: 'Relaxation',
      location: 'Bali',
      hotel: 'Cliff Edge Villa',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=400&fit=crop',
      description: 'Endless views from our signature infinity pool overlooking the ocean'
    },
    {
      id: '3',
      title: 'Private Dining',
      category: 'Dining',
      location: 'Santorini',
      hotel: 'Sunset Terrace Hotel',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop',
      description: 'Intimate dining experience with panoramic sunset views'
    },
    {
      id: '4',
      title: 'Adventure Hiking',
      category: 'Adventure',
      location: 'Swiss Alps',
      hotel: 'Mountain Peak Lodge',
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=500&h=400&fit=crop',
      description: 'Explore breathtaking mountain trails with expert guides'
    },
    {
      id: '5',
      title: 'Spa Serenity',
      category: 'Wellness',
      location: 'Thailand',
      hotel: 'Zen Garden Resort',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=400&fit=crop',
      description: 'Rejuvenate your mind and body with traditional Thai spa treatments'
    },
    {
      id: '6',
      title: 'Romantic Sunset',
      category: 'Romance',
      location: 'Tuscany',
      hotel: 'Villa Romantica',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop',
      description: 'Create unforgettable memories with your loved one in the Italian countryside'
    }
  ];

  const categories = ['All', 'Wellness', 'Relaxation', 'Dining', 'Adventure', 'Romance'];

  // Initialize filteredMoments on component mount
  useEffect(() => {
    setFilteredMoments(moments);
  }, []);

  // Filter moments based on selected category
  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredMoments(moments);
    } else {
      setFilteredMoments(moments.filter(moment => moment.category === selectedFilter));
    }
  }, [selectedFilter]);

  return (
    <div className="relative h-full">

      {/* Main Content - explicitly enable scrolling */}
      <main className="pt-20 pb-10 h-full overflow-y-auto">
        {/* Hero Section */}
        <div className="relative bg-gray-50 py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-light text-gray-900 mb-6 animate-fade-in">
              Capture Your Perfect
              <span className="block font-normal text-gray-700">Moments</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Discover extraordinary experiences and create lasting memories at our curated collection of hotels worldwide
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-8 py-3 rounded-full border-2 transition-all duration-300 font-medium transform hover:scale-105 ${
                    selectedFilter === category
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Moments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMoments.map((moment, index) => (
                <div
                  key={moment.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-700 rounded-full">
                        {moment.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{moment.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{moment.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{moment.location}</span>
                      </div>
                      <button className="text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors">
                        Book Experience
                      </button>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">{moment.hotel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join thousands of travelers who have discovered their perfect moments with us
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </main>

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

export default Moments;