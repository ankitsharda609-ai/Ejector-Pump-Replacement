
import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-2 border-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <i className="fas fa-faucet-drip text-blue-600 text-3xl"></i>
          <span className="text-xl font-bold text-gray-900 tracking-tight">{COMPANY_NAME}</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#diagnostic" className="hover:text-blue-600 transition">AI Diagnostic</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
        </nav>

        <div className="flex items-center">
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition shadow-lg flex items-center space-x-2"
          >
            <i className="fas fa-phone"></i>
            <span className="hidden sm:inline">{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
