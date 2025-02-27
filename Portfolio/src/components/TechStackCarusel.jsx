import React from 'react';
import Marquee from 'react-fast-marquee';

const TechStackCarousel = () => {
  const techStack = [
    { src: "/assets/ReactIcon.png", alt: "React", width: 100, height: 120 },
    { src: "/assets/Tailwindcss.png", alt: "TailwindCSS", width: 160, height: 128 },
    { src: "/assets/Github.png", alt: "GitHub", width: 100, height: 120 },
    { src: "/assets/Javascript.png", alt: "JavaScript", width: 100, height: 120 },
    { src: "/assets/Figma.png", alt: "Figma", width: 160, height: 128 },
    { src: "/assets/Photoshop.png", alt: "Photoshop", width: 100, height: 120 },
    { src: "/assets/Type.png", alt: "TypeScript", width: 120, height: 160 },
    { src: "/assets/Nodejs.png", alt: "NodeJs Express", width: 120, height: 140 },
    { src: "/assets/mysql1.png", alt: "MySql", width: 120, height: 140 },
  ];

  return (
    <div className="bg-[#F94E41] py-7 mt-4">
      <h1 className="text-center text-white font-medium text-[32px] md:text-[40px] mb-6">
        My Tech Stack
      </h1>
      
      <Marquee 
        speed={60} 
        gradient={false} 
        pauseOnHover={true}
        className="overflow-hidden"
      >
        <div className="flex items-center justify-center py-2">
          {[...techStack, ...techStack].map((tech, index) => (  // Duplicate array for seamless looping
            <div 
              key={index} 
              className="flex items-center justify-center mx-6 md:mx-12 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                width={tech.width}
                height={tech.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechStackCarousel;
