import React from 'react';

const partners = [
  { name: 'Google', logo: '/path-to-logo-google.png' },
  { name: 'Microsoft Azure', logo: '/path-to-logo-microsoft.png' },
  { name: 'Startup Odisha', logo: '/path-to-logo-startup-odisha.png' },
  { name: 'Startup India', logo: '/path-to-logo-startup-india.png' },
  { name: 'Razorpay', logo: '/path-to-logo-razorpay.png' },
  { name: 'PhonePe', logo: '/path-to-logo-phonepe.png' },
];

const OurPartners = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
          Our <span className="text-red-500">Partners</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 sm:h-16 md:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
