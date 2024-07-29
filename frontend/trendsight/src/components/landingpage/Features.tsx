// src/components/Features.tsx
import React from 'react';
import Image1 from '../../assets/images/landingpageFeature1.jpg';
import Image2 from '../../assets/images/landingpageFeature2.jpg';
import Image3 from '../../assets/images/landingpageFeature3.png';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-6">Features</h2>
        <div className="flex flex-wrap justify-center lg:gap-6">
          {/* Feature Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-8 lg:mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={Image1}
                className="object-cover h-56 w-full"
                alt="Effortless Stock Analysis"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Effortless Stock Analysis</h5>
                <p className="mt-2 text-gray-600">
                  Search for stocks, choose analysis periods, and gain insights through clear
                  visualizations of trends and technical indicators - all within a user-friendly
                  interface.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-8 lg:mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={Image2}
                className="object-cover h-56 w-full"
                alt="Data-Driven Decisions"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Data-Driven Decisions</h5>
                <p className="mt-2 text-gray-600">
                  Leverage TrendSight's calculations of technical indicators like EMAs and
                  potentially RSI to understand market behavior and make informed investment
                  choices.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-8 lg:mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={Image3}
                className="object-cover h-56 w-full"
                alt="Customizable Alerts"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Customizable Alerts</h5>
                <p className="mt-2 text-gray-600">
                  Set personalized alerts based on user-defined criteria, empowering users to stay
                  informed about significant market developments and potential investment
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
