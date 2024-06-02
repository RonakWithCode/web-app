import React from 'react';
import WebInage from '../assets/images/web-design-image.webp'
import developmentInage from '../assets/images/app-development-image.webp'
import graphicimage from '../assets/images/graphic-design-image.webp'

const services = [
  {
    title: 'Web Design',
    description: 'Developing a user-friendly interface to engage more possible customers.',
    image: WebInage,
    link: '/services/web-design',
  },
  {
    title: 'App Development',
    description: 'Developing mobile Apps for both IOS and Androids with the latest techniques.',
    image: developmentInage,
    link: '/services/app-development',
  },
  {
    title: 'Graphic Design',
    description: 'Magically designing logos, and other media to build the brand identity.',
    image: graphicimage,
    link: '/services/graphic-design',
  },
];

const WeDo = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
          What We <span className="text-red-500">Do</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-sm bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a href={service.link} className="text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-8">
          Interested to See More? <a href="/services" className="text-red-500 hover:text-red-700 transition-colors duration-300">View More.</a>
        </p>
      </div>
    </div>
  );
};

export default WeDo;
