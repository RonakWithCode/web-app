import React from 'react';

function HeroSection() {
  return (
    <div className="flex justify-center items-center w-full"
      style={{
        backgroundColor: 'black'
      }}>
      <div className=" text-white p-12 text-center relative overflow-hidden max-w-2xl flex flex-col justify-center items-center rounded-full">
        <div style={{
          backgroundImage: 'radial-gradient(at center center, #A34133AD 0%, #FFFFFF00 80%)'
        }}>
          <h1 className="text-2xl sm:text-xl md:text-5xl font-bold mb-4 relative z-10">
            Elevating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-500">Digital Presence</span> with Innovative Web Solutions
          </h1>
          <p className="mb-8 text-xl sm:text-1xl relative z-10">
            We are a team of passionate developers, designers, and strategists dedicated to transforming your vision into powerful websites that deliver results.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded relative z-10">
            Start Your Project Today
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;

