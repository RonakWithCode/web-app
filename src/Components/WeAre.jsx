import React from 'react';
import image from '../assets/images/Resize.png';

export function WeAre() {
    return (
        <section style={{ backgroundColor: '#080808', color: 'white'}} className="p-8 md:p-12 rounded-3xl ml-64 mr-64 mt-64" >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
                <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What We <span className='text-red-700'>Are</span></h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        We are a diverse team of builders, designers, and investors, crafting tailored digital solutions across multiple sectors. From startups to established enterprises, we leverage innovative technologies to create disruptive products that drive success and empower businesses. Whether in Web3, e-commerce, or beyond, our mission is to help each client achieve their unique vision.
                    </p>
                    <button className="mt-4 px-5 py-2 text-sm md:text-base bg-gray-700 hover:bg-gray-600 text-white font-semibold border-none cursor-pointer">
                        Know More →
                    </button>
                </div>
                <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <img src={image} alt="Process Triangle" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}
