import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';

const Figma = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen flex flex-col">
      <Header />

      {/* Main Content Area */}
      <div className="mb-25 text-center p-8 lg:p-32 rounded-lg shadow-md" style={{ backgroundColor: '#030303' }}>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Figma</h1>
      </div>

      {/* Image Row 1 */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 px-4">
        <img
          src="/assets/OGSI1.png"
          alt="Image 1"
          className="w-full sm:w-3/4 md:w-2/4 lg:w-1/2 rounded-lg shadow-md"
        />
      </div>

      {/* Image Row 2 */}
      <div className="mt-12 flex justify-center px-4">
        <img
          src="/assets/OGSI2.jpeg"
          alt="Image 2"
          className="w-full sm:w-3/4 lg:w-2/4 rounded-lg shadow-md"
        />
      </div>

      {/* Image Row 3 */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
        <img
          src="/assets/OGSI3.jpeg"
          alt="Image 3"
          className="w-full sm:w-2/5 lg:w-1/4 rounded-lg shadow-md"
        />
        <img
          src="/assets/OGSI4.jpeg"
          alt="Image 4"
          className="w-full sm:w-2/5 lg:w-1/4 rounded-lg shadow-md"
        />
      </div>

      {/* Project Description */}
      <div className="mt-16 px-6 lg:px-40 text-center">
        <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed">
          <strong className="font-semibold">The OGSI Project</strong> is a Learning Management System (LMS) designed to streamline educational content delivery and user management. It supports educators and learners with tools for course creation, progress tracking, and resource management. My role involved designing an intuitive and user-focused UI/UX to enhance accessibility and engagement across the platform.
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="https://www.figma.com/proto/0FCSEZSjK404P16cAG5WOc/OGSI?node-id=572-21867&p=f&t=oSRWvYrLfGbkarEh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=572%3A21867"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white text-base md:text-lg font-medium py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
          >
            Live View Project
          </a>
        </div>
      </div>

      {/* Pagsasaka Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 px-4">
        <img
          src="/assets/PagsasakaLogistics.png"
          alt="Pagsasaka Logistics"
          className="w-full sm:w-1/3 lg:w-1/6 rounded-lg shadow-md"
        />
        <img
          src="/assets/PagsasakaLogistics2.png"
          alt="Pagsasaka Logistics 2"
          className="w-full sm:w-1/3 lg:w-1/6 rounded-lg shadow-md"
        />
      </div>

      <div className="mt-12 flex justify-center px-4">
        <img
          src="/assets/Pagsasaka.png"
          alt="Pagsasaka"
          className="w-full sm:w-3/4 lg:w-2/4 rounded-lg shadow-md"
        />
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
        <img
          src="/assets/Pagsasaka3.png"
          alt="Pagsasaka 3"
          className="w-full sm:w-2/5 lg:w-1/4 rounded-lg shadow-md"
        />
        <img
          src="/assets/Pagsasaka4.png"
          alt="Pagsasaka 4"
          className="w-full sm:w-2/5 lg:w-1/4 rounded-lg shadow-md"
        />
      </div>

      <div className="mt-16 px-6 lg:px-40 text-center">
        <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed">
          <strong className="font-semibold">The Pagsasaka Website & Logistics project</strong>, developed as part of our capstone, includes both a website and a mobile application. I designed the UI and UX for both systems, ensuring a cohesive and user-friendly experience. The mobile app streamlines logistics by connecting farmers, buyers, and riders, featuring secure sign-in, real-time tracking, and intuitive navigation. This project highlights my expertise in creating functional and visually appealing designs tailored to users’ needs across multiple platforms.
        </p>

        {/* Button */}
        <div className="mt-6 mb-28">
          <a
            href="https://www.figma.com/proto/lcBl97ZOx9l80oo7sWKHGI/Thesis?node-id=107-211&p=f&t=wAOCzHRFttnwKUYI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=107%3A211"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white text-base md:text-lg font-medium py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
          >
            Live View Project
          </a>
        </div>
      </div>



      <Footer2 />
    </div>
  );
};

export default Figma;
