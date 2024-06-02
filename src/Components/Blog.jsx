import React from 'react'

function Blog({index,image , title , description , link}) {
  return (
    <div key={index} className="max-w-sm bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <a href={link} className="text-custom-red hover:text-red-700 transition-colors duration-300 flex items-center">
        Read More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
  )
}

export default Blog