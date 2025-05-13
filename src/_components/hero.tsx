import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroWithContactForm: React.FC = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [formError, setFormError] = useState('');
  
  // Reference for Typed.js
  const typedRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Transparent materials prices',
          'Reliable 60-min delivery',
          'Exceptional customer service',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true
      });

      // Clean up on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  // Handle WhatsApp contact with form data
  const handleWhatsAppContact = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name.trim() || !purpose.trim()) {
      setFormError('Please fill in all fields');
      return;
    }
    
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = `Hi HandyPanda! My name is ${name}. I need help with: ${purpose}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setName('');
    setPurpose('');
    setFormError('');
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Background with lighter overlay */}
      <div className="absolute inset-0 z-0 bg-neutral-background">
        {/* Hero background image would go here */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-content/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-neutral-content">
              <span ref={typedRef}></span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-neutral-content">
            Here’s the one-stop shop for all your home renovation requirements
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-neutral-content">
            Home renovation is a huge pain. Endless market runs, shady quality, and "stock’s run out” excuses — we get it.
            HandyPanda delivers top-notch construction and renovation materials to your doorstep in under 60 minutes. 
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="bg-custom-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-display font-semibold mb-6 text-neutral-content">Get in Touch</h3>
            
            <form onSubmit={handleWhatsAppContact} className="space-y-6">
              {formError && (
                <div className="bg-red-100 text-red-700 p-3 rounded-md text-sm">
                  {formError}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-neutral-content font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-md border border-neutral-content/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="purpose" className="block text-neutral-content font-medium mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="I need help with..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-neutral-content/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-custom-white px-6 py-4 rounded-md font-medium text-lg flex items-center justify-center transition-all duration-300"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.693 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact via WhatsApp
              </button>
              
              <p className="text-center text-neutral-content/70 text-sm">
                We'll connect you directly with our service team on WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithContactForm;