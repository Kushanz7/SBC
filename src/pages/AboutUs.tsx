import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 h-96 md:h-[500px]">
              <img 
                src="/images/about-us/aerial-beach.jpg" 
                alt="Beach view from above" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
              <h2 className="text-xl text-amber-800 mb-2">Our ethos</h2>
              <p className="text-gray-700 mb-4">
                Storybook Hotels was founded with the belief that luxury travel should do more than just provide an escape. 
                We're committed to creating curated experiences that connect our guests with the authentic heart of each destination.
              </p>
              <p className="text-gray-700 mb-4">
                Our properties celebrate local culture, architecture, and craftsmanship. We partner with local artisans, farmers, 
                and guides to create immersive experiences that reveal the soul of each location.
              </p>
              <p className="text-gray-700">
                Every aspect of our hotels—from design to dining—tells a story, inviting guests to become part of a narrative 
                that extends beyond their stay and connects them to something meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-2xl font-light text-amber-800 mb-6">Our values</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Conscious independence</h3>
                <p className="text-gray-700 mb-4">
                  We embrace authentic freedom, operating independently to preserve the unique character of each hotel. 
                  This independence enables us to create truly distinctive experiences.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Roots in renewal</h3>
                <p className="text-gray-700 mb-4">
                  Our hotels celebrate history while embracing the future. We restore historic properties with respect for their heritage, 
                  while bringing modern comfort and sustainable practices to each location.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Be exceptional</h3>
                <p className="text-gray-700 mb-4">
                  We are relentless in pursuing excellence across every touchpoint of the guest experience. 
                  From personalized service to thoughtful amenities, we aim to exceed expectations at every turn.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-96 md:h-[500px]">
              <img 
                src="/images/about-us/table-setting.jpg" 
                alt="Elegant table setting" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Three Pillars Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Enduring Escapes</h3>
              <p className="text-gray-700 mb-4">
                We believe in creating timeless retreats that offer a sanctuary from the pace of modern life. 
                Our hotels are designed to be places where time slows down, allowing for deeper connections.
              </p>
              <Link to="/philosophy" className="text-amber-800 hover:underline">Learn more →</Link>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Quality over Quantity</h3>
              <p className="text-gray-700 mb-4">
                Rather than rapid expansion, we focus on creating exceptional experiences at each of our carefully 
                selected properties. Our commitment is to quality in every detail.
              </p>
              <Link to="/philosophy" className="text-amber-800 hover:underline">Learn more →</Link>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-medium mb-3 text-amber-800">Elevating Boutique Service</h3>
              <p className="text-gray-700 mb-4">
                At the heart of Storybook is impeccable, personalized service that anticipates needs before they arise. 
                We believe in the power of genuine human connection to create memorable stays.
              </p>
              <Link to="/philosophy" className="text-amber-800 hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our People Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-light text-center mb-2">Our people</h2>
          <div className="text-center mb-12">
            <p className="text-3xl font-light italic text-amber-800 mb-8">Meet the family...</p>
            <p className="max-w-3xl mx-auto text-gray-700">
              At Storybook, we believe our team members are the true authors of our guests' experiences. Each person brings their unique talents, 
              perspectives, and passion to create the warm, intuitive service that defines our brand. From the gardeners who nurture our grounds 
              to the chefs who craft unforgettable meals, every team member plays an essential role in our story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg h-72">
              <img 
                src="/images/about-us/management-team.jpg" 
                alt="Management Team" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl mb-1">Management Team</h3>
                  <Link to="/team" className="text-white hover:text-amber-200 text-sm">Learn more →</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg h-72">
              <img 
                src="/images/about-us/staff.jpg" 
                alt="Hotel Staff" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl mb-1">The Wider Storybook Family</h3>
                  <Link to="/team" className="text-white hover:text-amber-200 text-sm">Learn more →</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg h-72">
              <img 
                src="/images/about-us/local-partners.jpg" 
                alt="Local Partners" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl mb-1">Join the Team</h3>
                  <Link to="/careers" className="text-white hover:text-amber-200 text-sm">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-light mb-4">Give the Gift of Travel</h2>
              <p className="text-gray-700 mb-4">
                Share the magic of Storybook Hotels with those you care about. Our gift cards can be used toward stays at any of our properties, 
                dining experiences, or spa treatments, making them the perfect present for the traveler in your life.
              </p>
              <button className="px-6 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition-colors">
                SHOP NOW →
              </button>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <img 
                src="/images/about-us/aerial-forest.jpg" 
                alt="Aerial view of forest" 
                className="w-full rounded-lg h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Width Banner */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src="/images/about-us/pool-view.jpg" 
          alt="Pool with ocean view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">OUR STORY</h2>
          <p className="max-w-2xl px-6">From humble beginnings to becoming a collection of the world's most distinctive boutique hotels</p>
        </div>
      </section>
      
      {/* Our Story Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <p className="text-gray-700 mb-6">
            From humble beginnings in 2005 with a single boutique hotel in the heart of Barcelona, Storybook Collectives has grown into a carefully 
            curated collection of properties that span the globe. Our founder, Elena Martinez, sought to create spaces that reflected the culture 
            and character of their locations while providing the highest levels of comfort and service.
          </p>
          <p className="text-gray-700 mb-6">
            Each property added to our portfolio is selected for its distinctive character, historical significance, or extraordinary setting. 
            We've restored historic buildings, revitalized forgotten gems, and partnered with local communities to create hotels that serve as 
            gateways to authentic local experiences.
          </p>
          <p className="text-gray-700 mb-8">
            Today, Storybook Collectives represents not just a group of hotels, but a philosophy of travel that values meaning over mere luxury, 
            and connection over consumption. Our journey continues as we seek out new stories to tell and new ways to create memorable 
            experiences for our guests.
          </p>
          
          <div className="text-center">
            <button className="px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition-colors">
              READ MORE ABOUT US →
            </button>
          </div>
        </div>
      </section>
      
      {/* Our Collections */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-light italic text-center text-amber-800 mb-16">Our Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden rounded-lg shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/about-us/countryside.jpg" 
                  alt="Countryside retreat" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl mb-4">Countryside Getaways</h3>
                <Link to="/collections/countryside" className="inline-block px-6 py-2 border border-amber-800 text-amber-800 rounded-full hover:bg-amber-800 hover:text-white transition-colors">
                  READ MORE →
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden rounded-lg shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/about-us/coastal.jpg" 
                  alt="Coastal retreat" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl mb-4">Coastal Getaways</h3>
                <Link to="/collections/coastal" className="inline-block px-6 py-2 border border-amber-800 text-amber-800 rounded-full hover:bg-amber-800 hover:text-white transition-colors">
                  READ MORE →
                </Link>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden rounded-lg shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/about-us/urban.jpg" 
                  alt="Urban retreat" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl mb-4">Urban Getaways</h3>
                <Link to="/collections/urban" className="inline-block px-6 py-2 border border-amber-800 text-amber-800 rounded-full hover:bg-amber-800 hover:text-white transition-colors">
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-light italic text-amber-800 mb-8">Why book with us?</h2>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-700 mb-8">
            When you book directly with Storybook Collectives, you not only secure the best available rates but also gain access to exclusive 
            perks, flexible cancellation policies, and personalized service from our dedicated reservation team.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition-colors">
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;