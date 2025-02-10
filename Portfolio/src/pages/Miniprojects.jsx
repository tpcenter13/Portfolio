import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';

const Miniprojects = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />

      {/* Main Content Section */}
      <div
        className="mb-20 text-center px-6 py-8 md:py-16 lg:px-32 lg:py-32 rounded-lg shadow-md"
        style={{ backgroundColor: '#030303' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white">
          Mini Projects
        </h1>
      </div>

      {/* Image Row 1 */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 mb-9">
        <img
          src="/assets/miniproj3.png"
          alt="Image 1"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
        <img
          src="/assets/miniproj1.png"
          alt="Image 2"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
      </div>

      {/* Image Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 px-6 mb-32">
        <img
          src="/assets/miniproj2.png"
          alt="Website Development Preview"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-md"
        />
      </div>

      {/* Description Section 2 */}
      <div className="mb-20 px-6 sm:px-12 md:px-20 lg:px-36 xl:px-48 text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
          For this project, I used Next.js to develop the front end of a shopping website's landing page.
          I am responsible for both the design and implementation, translating the UI/UX concepts into a
          functional and visually appealing interface. My goal is to ensure a smooth, interactive user
          experience on the landing page while focusing on front-end development.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-6 mb-28 text-center">
        <a
          href="https://shopping-website-six-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white text-sm sm:text-base lg:text-lg font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-red-600 transition duration-300"
        >
          Live View Project
        </a>
      </div>

      {/* Second Section */}

      {/* Image Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 px-6 mb-10">
        <img
          src="/assets/miniproj4.png"
          alt="Website Development Preview"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-md"
        />
      </div>

      {/* Image Row 1 */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 mb-9">
        <img
          src="/assets/miniproj5.png"
          alt="Image 1"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
      </div>

      {/* Description Section 2 */}
      <div className="mb-20 px-6 sm:px-12 md:px-20 lg:px-36 xl:px-48 text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
          For this project, I made the UI/UX design and implemented it using React.js to develop a Spotify clone.
          I incorporated music features to ensure it truly resembles Spotify, providing a functional and visually
          appealing interface. My goal is to create a smooth, interactive user experience while focusing on front-end development.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-6 mb-28 text-center">
        <a
          href="https://spotify-clone-sand-tau.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white text-sm sm:text-base lg:text-lg font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-red-600 transition duration-300"
        >
          Live View Project
        </a>
      </div>

      <Footer2 />
    </div>
  );
};

export default Miniprojects;
