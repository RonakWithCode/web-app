import React from 'react';
import WebInage from '../assets/images/web-design-image.webp'
import developmentInage from '../assets/images/app-development-image.webp'
import graphicimage from '../assets/images/graphic-design-image.webp'
import Blog from './Blog';

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
const testimonials = [
  {
    quote: "The team at RonoSoft was extremely knowledgeable and helpful in guiding me through the entire process. I am very pleased with the end result and have received many compliments on my new website. I highly recommend RonoSoft for their excellent web design services.",
    name: 'Dr. Sakti Prasad Mohanty',
    title: 'Founder of Audiumclinic',
    image: '/path-to-image-sakti.jpg',
  },
  {
    quote: "Thanks to RonoSoft, our website now stands out in a crowded marketplace! Their team's expertise and dedication resulted in a website that perfectly represents our brand. The entire process was smooth and hassle-free. We're thrilled with the outcome!",
    name: 'Bunu Behera',
    title: 'CEO of Focus Odisha',
    image: '/path-to-image-bunu.jpg',
  },
  {
    quote: "Impressed with the results. The team was extremely professional and responsive throughout the entire process, taking the time to understand my brand and vision for the website. I've received numerous compliments from both customers and colleagues on the new site.",
    name: 'Kabya Sampad',
    title: 'Founder of SDJ India',
    image: '/path-to-image-kabya.jpg',
  },
];


const blogPosts = [
  {
    title: 'How to make a website using WordPress?',
    description: 'Here is a step-by-step guide on how to create a website using WordPress. Step 1:...',
    image: 'vite.svg',
    link: '/blog/wordpress-website',
  },
  {
    title: 'What is Web Development?',
    description: 'Front-end Development: This is the process of creating the visual and interactive components of a...',
    image: 'vite.svg',
    link: '/blog/web-development',
  },
  {
    title: 'How You Find Best Hosting Service?',
    description: 'There are several factors to consider when choosing the best hosting service for your website....',
    image: 'vite.svg',
    link: 'vite.svg',
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

      <div className="container mt-16 mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
          Our <span className="text-custom-red">Testimonials</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-md bg-gray-800 rounded-lg shadow-md p-6 text-left transform hover:scale-105 transition-transform duration-300">
              <p className="text-gray-200 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-red-500">{testimonial.title}</p>
                </div>
              </div>
            </div>

            
          ))}
        </div>
      </div>

      <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
          Our <span className="text-custom-red">Blog Content</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {blogPosts.map((post, index) => (
            <Blog index={index} image={post.image} title={post.title} description={post.description} link={post.link} />
          ))}
        </div>
        <p className="text-gray-400 mt-8">
          Interested to See More? <a href="/blog" className="text-red-500 hover:text-red-700 transition-colors duration-300">View More.</a>
        </p>
      </div>
    </div>



    </div>
  );
};

export default WeDo;
