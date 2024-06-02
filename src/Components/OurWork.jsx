import React from 'react';

const portfolioItems = [
  {
    title: 'Ayas Designs',
    description: 'View Site',
    image: 'vite.svg',
    link: '/portfolio/ayas-designs',
  },
  {
    title: 'Senapati Industries',
    description: 'View Site',
    image: 'vite.svg',
    link: '/portfolio/senapati-industries',
  },
  {
    title: 'Niladrisaya Media',
    description: 'View Site',
    image: 'vite.svg',
    link: '/portfolio/niladrisaya-media',
  },
];

const OurWork = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
          Our <span className="text-red-500">Work</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="max-w-sm bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <a href={item.link} className="text-red-500 hover:text-red-700 transition-colors duration-300 flex items-center">
                  {item.description}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-8">
          Interested to See More? <a href="/portfolio" className="text-red-500 hover:text-red-700 transition-colors duration-300">Click Here.</a>
        </p>
      </div>
    </div>
  );
};

export default OurWork;
