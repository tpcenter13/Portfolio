import React from "react";
import { FaLinkedinIn, FaFilePdf } from "react-icons/fa";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer2 = () => {
  // 📌 Copy Email to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("Tpcenter09@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="relative bg-[#282828] text-white w-full">
      
{/* Slanted Shape */}
<div className="relative">
  <div className="absolute top-0 left-0 w-full h-[150px] bg-[#282828]" />

  {/* Left Polygon - Adjusted for small screens */}
  <div
    className="absolute top-[-29px] w-full h-[60px] sm:hidden"
    style={{
      background: "linear-gradient(to top, transparent 50%, #282828 50%)",
      clipPath: "polygon(0 0, 50% 50%, 0 100%)",
    }}
  />

  {/* Right Polygon - Adjusted for small screens */}
  <div
    className="absolute top-[-29px] w-full h-[60px] sm:hidden"
    style={{
      background: "linear-gradient(to top, transparent 50%, #282828 50%)",
      clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
    }}
  />

  {/* Left Polygon - Adjusted for medium & large screens */}
  <div
    className="absolute top-[-40px] w-full h-[100px] hidden sm:block md:h-[120px] md:top-[-60px]"
    style={{
      background: "linear-gradient(to top, transparent 50%, #282828 50%)",
      clipPath: "polygon(0 0, 50% 50%, 0 100%)",
    }}
  />

  {/* Right Polygon - Adjusted for medium & large screens */}
  <div
    className="absolute top-[-40px] w-full h-[100px] hidden sm:block md:h-[120px] md:top-[-60px]"
    style={{
      background: "linear-gradient(to top, transparent 50%, #282828 50%)",
      clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
    }}
  />
</div>

    <div className="my-8" />

    {/* Main Footer Content */}
    <div className="relative px-4 md:px-[7%] pt-10 pb-5 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Footer Description */}
        <div className="space-y-4">
          <p className="text-[15px] leading-relaxed">
            Showcasing innovative designs and
            efficient web solutions. Explore my
            projects and skills in UI/UX design,
            web development, and e-commerce platforms.
            Let's create something extraordinary!
          </p>
        </div>



{/* Course Categories */}
<div className="space-y-4">
  <h1 className="text-[20px] font-bold">PAGES</h1>
  <div className="grid grid-cols-2 gap-y-1 gap-x-8 text-[15px]">
    {[
      ["Home", "/"],
      ["About", "/about"],
      ["Photo Editing", "/photoEditing"],
      ["The OGSI", "https://www.figma.com/proto/0FCSEZSjK404P16cAG5WOc/OGSI?node-id=572-21867&p=f&t=oSRWvYrLfGbkarEh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=572%3A21867"],
      ["Pagsasaka", "https://www.figma.com/proto/lcBl97ZOx9l80oo7sWKHGI/Thesis?node-id=107-211&p=f&t=wAOCzHRFttnwKUYI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=107%3A211"],
      ["Insightz Tech", "https://www.figma.com/proto/aizc9imebHc1nKGnzCQLGp/Website?node-id=1-3&p=f&t=y4tcS3pUV7ABSci9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1"],
      ["SgCybersecurity", "https://sg-cybersecurity-2025.vercel.app/"],
      ["Fortimss Shopping", "https://www.figma.com/proto/AZlJEHf9K0jNpRJFf6qP5E/Fortinet-Shopping?node-id=736-3000&p=f&t=G54a77RMFVPO3uzQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=736%3A3000"],
      ["KBPortal", "https://www.figma.com/proto/UZvOGCP3C68QpgfrBsH0jB/New-Project(Jake)?node-id=4-6499&p=f&t=gzw8wQ8KYJFBr8P0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A6499"]
    ].map(([label, href]) =>
      href.startsWith("/") ? (
        <Link
          key={href}
          to={href}
          className="text-white hover:underline transition-colors duration-200"
        >
          {label}
        </Link>
      ) : (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline transition-colors duration-200"
        >
          {label}
        </a>
      )
    )}
  </div>
</div>





              {/* Tools */}
          <div className="space-y-4 ml-0 sm:ml-6 md:ml-10 lg:ml-14">
            <h1 className="text-[20px] font-bold">Tech Stack</h1>
              <div className="grid grid-cols-2 gap-2 text-[15px]">
              {[
                  "React JS",  
                  "Next JS",  
                  "TailwindCss",  
                  "JavaScript",  
                  "TypeScript",  
                  "Node JS",  
                  "Express Js",  
                  "MySql",  
                  "Github",  
                  "Figma",  
                  "Photoshop",  
              ].map((tool) => (
                <span key={tool} className="text-white font-normal">
                  {tool}
                </span>
                ))}
            </div>
          </div>


          {/* Connect with Me */}
          <div className="space-y-4">
            <h1 className="text-[20px] font-bold">CONNECT WITH ME!</h1>
            <div className="flex flex-col gap-4 text-[15px]">
              
              {/* 📩 Email with Copy to Clipboard */}
              <div className="flex items-center gap-4 cursor-pointer group" onClick={copyToClipboard}>
                <MdEmail className="text-3xl text-white transition-all duration-300 group-hover:text-red-500 group-hover:scale-110 group-hover:rotate-6" />
                <span className="break-all text-white transition-all duration-300 group-hover:text-red-400">
                  Tpcenter09@gmail.com
                </span>
              </div>

              {/* 📞 Phone */}
              <div 
                className="flex items-center gap-4 cursor-pointer group" 
                onClick={() => {
                  navigator.clipboard.writeText("09asdasd");
                  alert("Phone number copied to clipboard!");
                  }}
                >
              {/* Phone Icon with Hover Animation */}
              <MdOutlinePhone className="text-3xl text-white transition-all duration-300 group-hover:text-red-500 group-hover:scale-110 group-hover:rotate-6" />

              {/* Phone Number with Hover Animation */}
              <span className="text-white transition-all duration-300 group-hover:text-red-400">
                0949-5781-900
               </span>
              </div>


              {/* 📄 Resume Download */}
              <div>
                <a href="/assets/Resume.pdf" download="Resume.pdf" className="flex items-center gap-4 group" title="Download my resume PDF file">
                  <FaFilePdf className="text-white text-3xl transform transition-all duration-300 group-hover:text-red-500 group-hover:scale-110 group-hover:rotate-6" />
                  <h1 className="text-[17px] text-white transition-all duration-300 group-hover:text-red-400 relative 
                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                   after:bg-red-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    Resume
                  </h1>
                </a>
              </div>
            </div>

            {/* 🌍 Socials */}
              <div className="space-y-4 mt-6">
                <h1 className="text-[17px] font-bold">SOCIALS</h1>

                {/* Group for hover effects on both icon and text */}
                <div className="flex items-center gap-3 group cursor-pointer">
    
                {/* LinkedIn Icon Animation */}
              <div 
                className="rounded-full p-2 bg-white flex items-center justify-center transition-all duration-300 
                 group-hover:bg-red-500 group-hover:scale-110"
              >
                <FaLinkedinIn className="text-black transition-all duration-300 group-hover:text-white" />
              </div>
    
                  {/* LinkedIn Text Animation */}
                  <a 
                    href="https://www.linkedin.com/in/kurt-steven-arciga-83a2302b3/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white text-[16px] flex items-center transition-all duration-300 group-hover:text-red-500 
                 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                 after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                  Kurt Steven Arciga | LinkedIn
                  </a>
                  </div>
              </div>


          </div>
        </div>
      </div>

      {/* ⚪ White Line */}
      <hr className="border-t border-white my-4" />

      {/* 📌 Bottom Section */}
      <div className="px-4 md:px-[5%] py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text */}
          <div className="text-sm">KURT ARCIGA</div>

          {/* Center Text */}
          <div className="text-sm text-center">All rights reserved</div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-white hover:underline">HOME</Link>
            <Link to="/About" className="text-white hover:underline">ABOUT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
