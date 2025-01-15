import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdOutlinePhone } from "react-icons/md";

const Footer2 = () => {
  return (
    <div className="relative bg-[#282828] text-white"> {/* Updated the background color */}
      {/* Slanted Shape */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[150px] bg-[#282828]" />

        {/* Left Polygon */}
        <div
          className="absolute top-[-60px] w-full h-[120px]"
          style={{
            background: "linear-gradient(to top, transparent 50%, #282828 50%)", // Updated to match footer background color
            clipPath: "polygon(0 0, 50% 50%, 0 100%)",
          }}
        ></div>

        {/* Right Polygon */}
        <div
          className="absolute top-[-60px] w-full h-[120px]"
          style={{
            background: "linear-gradient(to top, transparent 50%, #282828 50%)", // Updated to match footer background color
            clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
          }}
        ></div>

        {/* Logo */}
        <div className="absolute top-[-19px] left-1/2 transform -translate-x-1/2">
          <img src="/assets/SGlogo2.png" alt="Logo" className="w-[90px]" />
        </div>
      </div>
      <br />
      <div className="my-8"></div> {/* Margin to replace <br /> */}

      {/* Main Footer Content */}
      <div className="relative px-[7%] pt-10 pb-5 my-8">
        <div className="flex flex-wrap gap-[8%]">
          {/* Footer Description */}
          <div className="w-full md:w-auto">
            <p className="text-[13px]">
              Explore a variety of online courses <br />
              designed to help you develop <br />
              new skills and advance your career. <br />
              Start learning today, anytime, anywhere.
            </p>
          </div>

          {/* Course Categories */}
          <div className="w-full md:w-auto mt-5 md:mt-0">
            <h1 className="text-[20px] font-bold mb-4">COURSE CATEGORIES</h1>
            <div className="flex flex-col gap-2 text-[15px]">
              <a href="/wifi-security" className="text-white hover:underline">
                Wifi Security
              </a>
              <a href="/password-security" className="text-white hover:underline">
                Password Security
              </a>
              <a href="/data-protection" className="text-white hover:underline">
                Data Protection
              </a>
              <a href="/cyberbullying" className="text-white hover:underline">
                Cyberbullying
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="w-full md:w-auto mt-5 md:mt-0">
            <h1 className="text-[20px] font-bold mb-4">TAG</h1>
            <div className="flex flex-col gap-2 text-[15px]">
              <a href="/wifi-security" className="text-white hover:underline">
                CYBERBULLYING
              </a>
              <a href="/password-security" className="text-white hover:underline">
                PASSWORD SECURITY
              </a>
              <a href="/data-protection" className="text-white hover:underline">
                DATA PROTECTION
              </a>
              <a href="/cyberbullying" className="text-white hover:underline">
                WIFI
              </a>
            </div>
          </div>

          {/* Who's Online */}
          <div className="w-full md:w-auto mt-5 md:mt-0">
            <h1 className="text-[20px] font-bold mb-4">WHO'S ONLINE</h1>
            <div className="flex flex-col gap-2 text-[15px]">
              <CgProfile className="text-2xl" style={{ color: "#FE663C" }} />
            </div>
          </div>

          {/* Connect with Us */}
          <div className="w-full md:w-auto mt-5 md:mt-0">
            <h1 className="text-[20px] font-bold mb-4">CONNECT WITH US!</h1>
            <div className="flex flex-col gap-2 text-[15px]">
              <div className="flex items-center">
                <IoLocationSharp className="text-2xl" style={{ color: "#FE663C" }} />
                <span className="ml-2">Los Angeles</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-2xl" style={{ color: "#FE663C" }} />
                <span className="ml-2">Los Angeles</span>
              </div>
              <div className="flex items-center">
                <MdOutlinePhone className="text-2xl" style={{ color: "#FE663C" }} />
                <span className="ml-2">Los Angeles</span>
              </div>
            </div>

            {/* Socials */}
            <div className="text-left mt-5">
              <h1 className="text-[17px] font-bold mb-4">SOCIALS</h1>
              <div className="flex gap-4 text-[20px]">
                <div className="rounded-full p-2 bg-white">
                  <FaFacebookF className="text-black" />
                </div>
                <div className="rounded-full p-2 bg-white">
                  <FaInstagram className="text-black" />
                </div>
                <div className="rounded-full p-2 bg-white">
                  <FaLinkedinIn className="text-black" />
                </div>
                <div className="rounded-full p-2 bg-white">
                  <FaYoutube className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing using margins */}
      <div className="my-6"></div>

      {/* White Line */}
      <hr className="h-[15px] border-t border-white my-4" />

      {/* Additional Section with Buttons */}
      <div className="relative flex items-center justify-between mt-3 px-[5%]">
        {/* Left Image */}
        <div className="flex items-center">
          <img src="/assets/sglogo.png" alt="Logo" className="w-[220px]" />
        </div>

        {/* Center Text */}
        <div className="text-center flex-grow">
          <p className="text-sm">SGCybersecurity • All rights reserved</p>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-6">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>CONTACT US</button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer2;
