import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="relative bg-[#282828] text-white w-full">
      {/* Slanted Shape */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[150px] bg-[#282828]" />
        
        {/* Left Polygon - Hidden on mobile */}
        <div
          className="absolute top-[-60px] w-full h-[120px] hidden md:block"
          style={{
            background: "linear-gradient(to top, transparent 50%, #282828 50%)",
            clipPath: "polygon(0 0, 50% 50%, 0 100%)",
          }}
        />

        {/* Right Polygon - Hidden on mobile */}
        <div
          className="absolute top-[-60px] w-full h-[120px] hidden md:block"
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
<div className="space-y-4 ml-0 sm:ml-4 md:ml-8 lg:ml-11">
  <h1 className="text-[20px] font-bold">COURSE CATEGORIES</h1>
  <div className="flex flex-col gap-2 text-[15px]">
    {[
      ["Home", "/"],
      ["About", "/about"],
      ["Photo Editing", "/photoEditing"],
      ["Figma", "/figma"],
      ["Basic Troubleshooting", "/basicTroubleshooting"],
      ["Work-Based Projects", "/workBasedProjects"],
      ["Website Development", "/websiteDevelopment"],
      ["Mini Projects", "/miniprojects"]
    ].map(([label, to]) => (
      <Link 
        key={to} 
        to={to} 
        className="text-white hover:underline transition-colors duration-200"
      >
        {label}
      </Link>
    ))}
  </div>
</div>

{/* Tools */}
<div className="space-y-4 ml-0 sm:ml-6 md:ml-10 lg:ml-14">
  <h1 className="text-[20px] font-bold">Tools</h1>
  <div className="flex flex-col gap-2 text-[15px]">
    {["React JS", "TailwindCss", "Github", "JavaScript", "Photoshop", "Figma"].map((tool) => (
      <span 
        key={tool} 
        className="text-white font-semibold"
      >
        {tool}
      </span>
    ))}
  </div>
</div>

          {/* Connect with Us */}
          <div className="space-y-4">
            <h1 className="text-[20px] font-bold">CONNECT WITH ME!</h1>
            <div className="flex flex-col gap-4 text-[15px]">
              <div className="flex items-center gap-4">
                <MdEmail className="text-3xl text-white" />
                <span className="break-all">Tpcenter09@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlinePhone className="text-3xl text-white" />
                <span>09495781900</span>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-4 mt-6">
              <h1 className="text-[17px] font-bold">SOCIALS</h1>
              <div className="flex items-center gap-4 text-[20px] flex-wrap">
                <div className="rounded-full p-2 bg-white">
                  <FaLinkedinIn className="text-black" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/kurt-steven-arciga-83a2302b3/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:underline break-all"
                >
                  Kurt Steven Arciga | LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6" />

      {/* White Line */}
      <hr className="border-t border-white my-4" />

      {/* Bottom Section */}
      <div className="px-4 md:px-[5%] py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Text */}
          <div className="text-sm">
            KURT ARCIGA
          </div>

          {/* Center Text */}
          <div className="text-sm text-center">
            KURT ARCIGA • All rights reserved
          </div>

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
