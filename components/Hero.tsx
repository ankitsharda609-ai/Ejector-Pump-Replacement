
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Expert Ejector Pump <br/><span className="text-blue-400">Replacement in Towson</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Protect your basement and plumbing system. Professional solutions for Basement Bathrooms, Grinder Pumps, and Sewage Systems. Same-day emergency service available.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded-md transition shadow-2xl uppercase tracking-wide"
            >
              Emergency Service: {PHONE_NUMBER}
            </a>
            <a 
              href="#diagnostic"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-md transition border border-white/30 backdrop-blur-sm"
            >
              AI Diagnostic Tool
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 clip-path-wave" />
    </section>
  );
};

export default Hero;
