
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Professional Pump Solutions</h3>
          <div className="mt-4 w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <i className={`fas ${service.icon} text-blue-600 text-2xl group-hover:text-white transition-colors`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:underline">
                Learn More <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
