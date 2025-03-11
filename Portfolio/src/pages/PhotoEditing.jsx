import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';

const PhotoEditing = () => {
  // Images organized in groups for better layout management
  const singleImages = [
    { src: "/assets/alvin.png", alt: "Alvin Project" },
    { src: "/assets/PhotoshopEdit.png", alt: "Photoshop Edit" },
    { src: "/assets/Insightz.png", alt: "Insightz" },
    { src: "/assets/SgCybersecurityBG.png", alt: "SG Cybersecurity Background" },
    { src: "/assets/jakebanner.png", alt: "Jake Banner", isBanner: true }
  ];

  const pairedImages = [
    [
      { src: "/assets/spartan gym.png", alt: "Spartan Gym" },
      { src: "/assets/lovelystore.png", alt: "Lovely Store" }
    ],
    [
      { src: "/assets/elianproj.png", alt: "Elian Project" },
      { src: "/assets/cyberbullying.png", alt: "Cyberbullying" }
    ]
  ];

  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative mb-16 md:mb-24 p-8 lg:p-20 rounded-lg overflow-hidden" 
           style={{ backgroundColor: '#030303' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#030303] to-transparent opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            Photo Editing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my digital design work created using Adobe Photoshop
          </p>
        </div>
      </div>
      
      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Paired Images */}
        {pairedImages.map((pair, idx) => (
          <div key={`pair-${idx}`} className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {pair.map((img, imgIdx) => (
                <div key={`img-${idx}-${imgIdx}`} className="w-full md:w-1/2 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-auto object-cover rounded-lg" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Single Images */}
        {singleImages.map((img, idx) => (
          <div key={`single-${idx}`} className={`mb-16 md:mb-24 ${img.isBanner ? 'lg:px-6' : 'lg:px-20'}`}>
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={`w-full h-auto object-cover rounded-lg ${img.isBanner ? 'max-w-6xl mx-auto' : 'max-w-4xl mx-auto'}`} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
     
      <Footer2 />
    </div>
  );
};

export default PhotoEditing;