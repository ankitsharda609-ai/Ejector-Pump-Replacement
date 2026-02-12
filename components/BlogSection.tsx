
import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80" 
              alt="Plumbing infrastructure" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Reliable Ejector Pump Replacement in <span className="text-blue-600">Towson, MD</span>
            </h2>
            
            <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
              <p className="text-lg">
                If your basement bathroom is backed up or your pump is making strange noises, you may need an <strong>Ejector Pump Replacement</strong>. Unlike a standard sump pump which handles ground water, an ejector pump is responsible for lifting sewage and wastewater from below-grade fixtures up to the main sewer line.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Signs You Need a Replacement</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Frequent Cycling:</strong> The pump turns on and off too often.</li>
                  <li><strong>Odd Noises:</strong> Grinding or thumping sounds often indicate motor failure.</li>
                  <li><strong>Foul Odors:</strong> A broken seal or failing motor can allow sewer gases to escape.</li>
                  <li><strong>Age:</strong> Most pumps last 7–10 years. If yours is older, it’s a ticking time bomb.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 mt-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Basement Bathroom Pumps vs. Grinder Pumps</h3>
                <p>
                  While both move waste, a <strong>Grinder Pump</strong> uses blades to pulverize solids into a slurry. This is typically required if your waste needs to travel a long distance or high elevation to reach the street. For standard basement bathrooms, a heavy-duty <strong>Sewage Ejector Pump</strong> is usually the most efficient choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
