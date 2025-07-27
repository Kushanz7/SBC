import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Service data for dynamic rendering
const services = [
  {
    id: 1,
    title: "Luxury Accommodations",
    description: "Immerse yourself in our exquisitely designed suites and villas, where comfort meets elegance. Each room features premium amenities, stunning views, and personalized services to ensure a restful and rejuvenating stay.",
    icon: "🏨",
    image: "/images/services/luxury-accommodation.jpg"
  },
  {
    id: 2,
    title: "Fine Dining Experience",
    description: "Indulge in culinary excellence at our award-winning restaurants. Our master chefs craft exceptional dishes using locally-sourced ingredients, offering both traditional Sri Lankan flavors and international cuisine.",
    icon: "🍽️",
    image: "/images/about-us/table-setting.jpg"
  },
  {
    id: 3,
    title: "Wellness & Spa",
    description: "Rejuvenate your body and soul at our tranquil spa sanctuary. Experience traditional treatments and modern therapies designed to relax, heal and revitalize, all performed by our skilled wellness practitioners.",
    icon: "💆",
    image: "/images/offers/spa-excellence.jpg"
  },
  {
    id: 4,
    title: "Private Beach Access",
    description: "Step directly onto pristine sandy beaches from our property. Enjoy exclusive beach areas with luxury loungers, attentive beach service, and breathtaking ocean views in complete privacy.",
    icon: "🏝️",
    image: "/images/collection/beach-resort.jpg"
  },
  {
    id: 5,
    title: "Adventure Excursions",
    description: "Discover the natural wonders of Sri Lanka through our curated excursions. From wildlife safaris to hiking trails and water sports, our experienced guides will create unforgettable adventures.",
    icon: "🧗",
    image: "/images/services/excursion.jpg"
  },
  {
    id: 6,
    title: "Cultural Experiences",
    description: "Immerse yourself in Sri Lanka's rich heritage with our cultural programs. Enjoy traditional performances, cooking classes, craft workshops, and guided tours to historical sites.",
    icon: "🏛️",
    image: "/images/services/cultural.jpg"
  }
];

const OurServices: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceItemsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    if (videoRef.current && titleRef.current) {
      heroTl.fromTo(
        videoRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
      ).fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      );
    }
    
    // Services section animations with ScrollTrigger
    if (servicesRef.current) {
      // Animate the services section title
      const sectionTitle = servicesRef.current.querySelector('.section-title');
      if (sectionTitle) {
        gsap.fromTo(
          sectionTitle,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionTitle,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      
      // Animate each service card
      serviceItemsRef.current.forEach((item) => {
        const card = item.querySelector('.service-card');
        const image = item.querySelector('.service-image');
        const content = item.querySelector('.service-content');
        
        if (card && image && content) {
          const cardTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
          
          cardTl
            .fromTo(
              card,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
            )
            .fromTo(
              image,
              { scale: 1.2, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
              '-=0.4'
            )
            .fromTo(
              content.children,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
              '-=0.6'
            );
        }
      });
    }
    
    // Clean up animations
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Video Section */}
      <div 
        ref={heroRef}
        className="relative h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div ref={titleRef}>
            <h1 className="text-white text-4xl md:text-6xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Exclusive Services
            </h1>
            <p className="text-amber-100 text-lg md:text-xl max-w-3xl mx-auto">
              Experience unparalleled luxury with our handcrafted services designed to create unforgettable memories
            </p>
            <div className="mt-8">
              <a 
                href="#services" 
                className="px-8 py-3 bg-amber-800 text-white rounded hover:bg-amber-900 transition-colors duration-300 inline-block"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
          <div className="animate-bounce bg-white/20 p-2 w-10 h-10 ring-1 ring-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div 
        id="services" 
        ref={servicesRef}
        className="py-20 px-4 max-w-7xl mx-auto"
      >
        <h2 className="section-title text-3xl md:text-4xl font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          Exceptional Experiences Await
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => {
                if (el && serviceItemsRef.current) {
                  serviceItemsRef.current[index] = el;
                }
              }}
              className="service-item"
            >
              <div className="service-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div className="service-image absolute inset-0 w-full h-full bg-amber-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                </div>
                
                <div className="service-content p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-amber-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <a 
                    href="#" 
                    className="inline-block mt-auto text-amber-800 hover:text-amber-900 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-amber-900/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Guest Experiences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"The spa services were absolutely divine. The therapists were highly skilled, and the ambiance was perfect for relaxation. Truly a rejuvenating experience."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/images/testimonials/person1.jpg" 
                    alt="Sarah J." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Sarah J.</p>
                  <p className="text-sm text-gray-500">United Kingdom</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"The private beach access made our honeymoon unforgettable. Watching the sunset from our exclusive area with champagne service was magical."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/images/testimonials/person2.jpg" 
                    alt="Michael & Lisa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Michael & Lisa</p>
                  <p className="text-sm text-gray-500">Australia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"The cultural experiences arranged by the hotel were exceptional. We learned so much about Sri Lankan traditions while having an incredibly enjoyable time."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/images/testimonials/person3.jpg" 
                    alt="Raj P." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Raj P.</p>
                  <p className="text-sm text-gray-500">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Allow us to craft the perfect stay for you with our bespoke services and attention to every detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-amber-900 rounded hover:bg-amber-100 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a 
              href="/booking" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded hover:bg-white/10 transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;