// src/components/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <header className="hero bg-primary text-white text-center py-10 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
          Track Your Stocks Like a Pro
        </h1>
        <p className="text-lg md:text-xl lg:text-xl mt-4 max-w-3xl mx-auto">
          Stay informed about your investments with real-time data and advanced
          analytics.
        </p>
        <div className="mt-6 flex justify-center">
          {/* <Link to="/subscription" className="btn btn-light btn-lg black-border" style={{ color: 'white', backgroundColor: '#343a3f' }}>
            <h6>Subscription</h6>
          </Link> */}
          <Link
            to="/login"
            className="btn btn-light btn-lg black-border inline-block py-2 px-6 text-white bg-gray-800 hover:bg-gray-700"
            style={{ marginLeft: "30px" }}
          >
            <h6>Try now &gt;</h6>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
