import React, { useState, useEffect, useRef } from 'react';

const FeatureSection: React.FC = () => {
  const [activePoint, setActivePoint] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  // Feature points data
  const featurePoints = [
    {
      id: 1,
      title: "Professional Services",
      description: "Expert handymen with years of experience in plumbing, electrical, and general repairs.",
      imageSrc: "/images/professional-services.jpg" // Replace with actual image path
    },
    {
      id: 2,
      title: "Quality Materials",
      description: "We only use premium materials and parts, ensuring long-lasting repairs and installations.",
      imageSrc: "/images/quality-materials.jpg" // Replace with actual image path
    },
    {
      id: 3,
      title: "Fast Response Time",
      description: "Get quick service with same-day appointments for urgent repair needs.",
      imageSrc: "/images/fast-response.jpg" // Replace with actual image path
    },
    {
      id: 4,
      title: "Satisfaction Guarantee",
      description: "Our work is backed by a 100% satisfaction guarantee for your peace of mind.",
      imageSrc: "/images/satisfaction-guarantee.jpg" // Replace with actual image path
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    // Start the interval
    intervalRef.current = setInterval(() => {
      setActivePoint(prev => (prev + 1) % featurePoints.length);
    }, 4000); // Change point every 4 seconds
    
    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [featurePoints.length]);
  
  // Reset interval when manually selecting a point
  const handlePointClick = (index: number) => {
    setActivePoint(index);
    
    // Reset the interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActivePoint(prev => (prev + 1) % featurePoints.length);
    }, 4000);
  };

  return (
    <section className="py-16 px-4 bg-custom-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-content text-center mb-12">
          Top {featurePoints.length} Reasons to Choose HandyPanda
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Feature Points */}
          <div className="order-2 lg:order-1">
            {featurePoints.map((point, index) => (
              <div 
                key={point.id}
                className={`mb-6 p-4 rounded-lg cursor-pointer transition-all duration-300 transform ${
                  activePoint === index 
                    ? 'bg-primary/10 border-l-4 border-primary translate-x-2' 
                    : 'hover:bg-neutral-content/5'
                }`}
                onClick={() => handlePointClick(index)}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${
                    activePoint === index 
                      ? 'bg-primary text-custom-white' 
                      : 'bg-neutral-content/10 text-neutral-content'
                  }`}>
                    <span className="font-semibold">{point.id}</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      activePoint === index ? 'text-primary' : 'text-neutral-content'
                    }`}>
                      {point.title}
                    </h3>
                    <p className="text-neutral-content/80">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
              {featurePoints.map((point, index) => (
                <div
                  key={point.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activePoint === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Placeholder - replace with actual images */}
                  <div 
                    className="w-full h-full bg-secondary/20 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${point.imageSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-neutral-content/5"></div>
                    <div className="relative z-10 p-4 bg-neutral-content/80 text-custom-white rounded hidden">
                      {point.title}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Progress indicator */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {featurePoints.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePointClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activePoint === index ? 'bg-primary w-6' : 'bg-neutral-content/50'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;