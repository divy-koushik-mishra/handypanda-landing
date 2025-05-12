import React, { useState, useEffect, useRef } from 'react';

const ProductCategories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Category data
  const categories = [
    {
      id: 1,
      title: "Electrical Services",
      image: "/images/electrical.jpg", // Replace with actual image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 16.236c1.913-1.29 3-3.418 3-5.736 0-3.87-3.582-7-8-7s-8 3.13-8 7c0 2.318 1.087 4.446 3 5.736"></path>
          <path d="M13 17l-2 7-2-7"></path>
          <path d="M12 11v6"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Plumbing Services",
      image: "/images/plumbing.jpg", // Replace with actual image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-7-7-13-7-13S5 8 5 15a7 7 0 0 0 7 7Z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Hardware Repairs",
      image: "/images/hardware.jpg", // Replace with actual image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Painting Services",
      image: "/images/painting.jpg", // Replace with actual image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m19 9-7 7-7-7"></path>
          <path d="M19 15H5"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Furniture Assembly",
      image: "/images/furniture.jpg", // Replace with actual image path
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
          <path d="M22 12H2"></path>
          <path d="M7 12v-2a5 5 0 0 1 10 0v2"></path>
        </svg>
      )
    }
  ];

  // Next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  // Previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  });

  // Calculate visible slides based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };

  const visibleCount = getVisibleCount();
  
  // Handle manual scroll when slider is dragged
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    
    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
    };
    
    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };
    
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-neutral-background to-custom-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-content">
            Our <span className="text-secondary">Services</span>
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
            <div className="h-1 w-24 bg-secondary mx-2 rounded-full"></div>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="mt-6 text-neutral-content/80 max-w-2xl mx-auto">
            We offer a comprehensive range of professional handyman services to meet all your home maintenance and repair needs.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-custom-white text-neutral-content hover:text-primary rounded-full p-2 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous category"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-custom-white text-neutral-content hover:text-primary rounded-full p-2 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next category"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Categories Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden cursor-grab"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
            >
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 transition-all duration-300 ${
                    Math.abs(activeIndex - index) > Math.floor(visibleCount / 2) ? 'opacity-40' : 'opacity-100'
                  }`}
                >
                  <div className="rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      {/* Placeholder for image - replace with actual image */}
                      <div 
                        className="w-full h-full bg-neutral-content/20"
                        style={{
                          backgroundImage: `url(${category.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-content/70 group-hover:from-transparent group-hover:to-primary/70 transition-all duration-300"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-custom-white">
                        <div className="flex items-center">
                          <div className="mr-3 bg-primary p-2 rounded-full transform group-hover:rotate-12 transition-all duration-300">
                            {category.icon}
                          </div>
                          <h3 className="text-xl font-semibold">{category.title}</h3>
                        </div>
                      </div>
                      
                      {/* Animated overlay on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-4 py-2 bg-custom-white text-primary rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 font-medium">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  activeIndex === index ? 'bg-primary w-6' : 'bg-neutral-content/30 hover:bg-neutral-content/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Buttons and App Banner */}
        <div className="mt-12 flex flex-col items-center">
          {/* Explore Services Button */}
          <a 
            href="/services" 
            className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-custom-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 mb-8"
          >
            <span>Explore All Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* App Launching Soon Banner */}
          <div className="w-full max-w-2xl mx-auto relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/80 to-secondary/80 shadow-lg">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-custom-white/10 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-custom-white/10 rounded-full"></div>
            
            <div className="relative py-6 px-8 flex flex-col sm:flex-row items-center justify-between z-10">
              <div className="mb-4 sm:mb-0 flex items-center">
                <div className="mr-4 bg-custom-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-custom-white">App Launching Soon!</h3>
                  <p className="text-custom-white/90">Get easy access to our services on your mobile</p>
                </div>
              </div>
              
              <div className="space-x-2 hidden md:flex">
                <div className="bg-custom-white/20 backdrop-blur-sm p-2 rounded-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                <div className="bg-custom-white/20 backdrop-blur-sm p-2 rounded-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div> 
          
          {/* Notify Me Text */}
          <div className="mt-4 text-center text-neutral-content/70 text-sm">
            <p>Stay tuned for our app launch! Connect with us to get notified.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;