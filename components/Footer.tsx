
import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER, ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <i className="fas fa-faucet-drip text-blue-500 text-3xl"></i>
              <span className="text-2xl font-bold">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Serving the Towson community with integrity and expertise. We specialize in basement plumbing solutions that keep your home safe and clean.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-blue-500"></i>
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-blue-500"></i>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-clock text-blue-500"></i>
                <span>24/7 Emergency Services Available</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Replacement Services</a></li>
              <li><a href="#diagnostic" className="hover:text-white transition">Diagnostic Tool</a></li>
              <li><a href="#faq" className="hover:text-white transition">Plumbing FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Licensed, Bonded, and Insured. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
