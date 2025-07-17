import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Star, Users, Calendar, ArrowRight, Filter, Search, X } from 'lucide-react';
import NavBar from '../components/Navbar';

const CollectivesPage = () => {
  const [activeCollection, setActiveCollection] = useState<number | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const collections = [
    {
      id: 1,
      name: "Historic Escapes",
      description: "Timeless elegance in heritage properties",
      category: "theme",
      hotels: 12,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      locations: ["Paris", "Rome", "Prague"],
      price: "From $180/night",
      rating: 4.8
    },
    {
      id: 2,
      name: "Modern Minimalist",
      description: "Clean lines, contemporary comfort",
      category: "theme",
      hotels: 8,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      locations: ["Tokyo", "Copenhagen", "Berlin"],
      price: "From $220/night",
      rating: 4.9
    },
    {
      id: 3,
      name: "Wellness Retreats",
      description: "Rejuvenate mind, body, and soul",
      category: "experience",
      hotels: 15,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
      locations: ["Bali", "Tulum", "Santorini"],
      price: "From $320/night",
      rating: 4.7
    },
    {
      id: 4,
      name: "Urban Discoveries",
      description: "Pulse of the city at your doorstep",
      category: "location",
      hotels: 20,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      locations: ["NYC", "London", "Hong Kong"],
      price: "From $280/night",
      rating: 4.6
    },
    {
      id: 5,
      name: "Cultural Immersion",
      description: "Authentic local experiences",
      category: "experience",
      hotels: 18,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      locations: ["Morocco", "India", "Peru"],
      price: "From $150/night",
      rating: 4.8
    },
    {
      id: 6,
      name: "Coastal Serenity",
      description: "Ocean views and seaside tranquility",
      category: "location",
      hotels: 10,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      locations: ["Maldives", "Amalfi", "Big Sur"],
      price: "From $450/night",
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'theme', name: 'By Theme', count: collections.filter(c => c.category === 'theme').length },
    { id: 'experience', name: 'By Experience', count: collections.filter(c => c.category === 'experience').length },
    { id: 'location', name: 'By Location', count: collections.filter(c => c.category === 'location').length }
  ];

  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || collection.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative h-full">
      {/* Navigation */}
      <NavBar />

      {/* Main Content - explicitly enable scrolling like in Moments.tsx */}
      <main className="pt-20 pb-10 h-full overflow-y-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-stone-100">
          <div className={`container mx-auto px-6 pt-10 pb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
                The <span className="font-medium text-amber-600">Collectives</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Thoughtfully curated hotel collections that tell extraordinary stories
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-slate-700">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">50+ Premium Hotels</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">25+ Destinations</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Star className="w-5 h-5 fill-current text-amber-500" />
                  <span className="text-sm">4.8 Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="container mx-auto px-6 mb-12">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search collections..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-200"
                  />
                </div>
                
                {/* Filter Toggle */}
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filter</span>
                </button>
              </div>
              
              {/* Filter Options */}
              <div className={`mt-4 transition-all duration-300 overflow-hidden ${filterOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection, index) => (
              <div
                key={collection.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onClick={() => setActiveCollection(activeCollection === collection.id ? null : collection.id)}
              >
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ArrowRight className="w-6 h-6 text-slate-900" />
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-amber-500" />
                      <span className="text-sm font-medium text-slate-900">{collection.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
                        {collection.name}
                      </h3>
                      <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                        {collection.hotels} hotels
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {collection.locations.map((location, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded-full"
                        >
                          <MapPin className="w-3 h-3" />
                          {location}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <span className="text-lg font-semibold text-slate-900">
                        {collection.price}
                      </span>
                      <div className="flex items-center gap-2 text-amber-600 group-hover:gap-3 transition-all duration-200">
                        <span className="text-sm font-medium">Explore</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeCollection === collection.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <div className="pt-4 space-y-4">
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">What makes this collection special:</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Each property in this collection has been carefully selected for its unique character, 
                            exceptional service, and ability to create memorable experiences that align with our 
                            story-driven approach to hospitality.
                          </p>
                        </div>
                        
                        <div className="flex gap-3">
                          <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                            View Collection
                          </button>
                          <button className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCollections.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No collections found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-light mb-4">Ready to join our collective?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with us to showcase your unique property and connect with travelers 
              seeking extraordinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Become a Partner
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
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

export default CollectivesPage;