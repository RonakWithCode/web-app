import React from 'react';

function ActionSection() {
  return (
    <div className="bg-black text-white py-12">
      {/* Container for the layout */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Image Section */}
        <div className=" bg-black flex-1 flex justify-end lg:justify-end mb-8 lg:mb-0">
          <img 
            src="src\assets\iamges\action.webp" 
            alt="Person Smiling" 
            className="w-full max-w-xs lg:max-w-md rounded-lg  shadow-gray-800  shadow-lg"
          />
        </div>
        
        {/* Text and Button Section */}
        <div className="flex-1 px-4 lg:px-8">
          <h1 className="text-3xl text-center sm:text-start sm:text-3xl md:text-5xl font-bold mb-4">
            We Design,<br /> Build Brands & <br /> Develop  <span className="text-red-500">Digital Project</span>
          </h1>
          <p className="mb-6 text-center sm:text-start sm:text-1xl">
          Welcome to RonoSsoft, your trusted partner in digital transformation. We specialize in website development, app development, custom designs, and custom software development. Our mission is to empower businesses of all sizes by delivering high-quality, custom-built digital solutions that drive success and growth.

          </p>
          <button className="bg-transparent  border-2 border-white hover:bg-red-700 transition-colors duration-300 text-white font-bold py-2 px-6 rounded-full flex items-center">
            Get A Quote
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionSection;
