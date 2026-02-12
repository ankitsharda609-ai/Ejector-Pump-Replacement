
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import DiagnosticAssistant from './components/DiagnosticAssistant';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Trust Badges Bar */}
        <div className="bg-white py-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl flex items-center"><i className="fas fa-award mr-2 text-blue-600"></i> Top Rated</span>
            <span className="font-bold text-xl flex items-center"><i className="fas fa-check-circle mr-2 text-blue-600"></i> Licensed & Insured</span>
            <span className="font-bold text-xl flex items-center"><i className="fas fa-calendar-check mr-2 text-blue-600"></i> Same Day Service</span>
            <span className="font-bold text-xl flex items-center"><i className="fas fa-users mr-2 text-blue-600"></i> Family Owned</span>
          </div>
        </div>

        <Services />
        <DiagnosticAssistant />
        <BlogSection />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="tel:8443406413" 
          className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <i className="fas fa-phone text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
