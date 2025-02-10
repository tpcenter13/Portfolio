import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';

const WebsiteDevelopment = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />

      {/* Main Content Section */}
      <div
        className="mb-20 text-center px-6 py-8 md:py-16 lg:px-32 lg:py-32 rounded-lg shadow-md"
        style={{ backgroundColor: '#030303' }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white">
          Website Development
        </h1>
      </div>

      {/* Description Section 1 */}
      <div className="mb-15 px-6 sm:px-12 md:px-20 lg:px-36 xl:px-48 text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-normal text-white leading-relaxed">
          In this section, you can explore my journey in web development, where
          I specialize in frontend design and development. This project
          showcases not only my technical skills but also my creative side, as
          I was deeply involved in designing its UI/UX. From conceptualizing
          user-friendly layouts to implementing them with tools like NextJS,
          TypeScript, Git, and TailwindCSS, I played a key role in shaping the
          overall design and functionality. This experience reflects my passion
          for creating seamless and visually appealing digital experiences.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 px-6 mb-32">
        <img
          src="/assets/WebsiteDevelopment.png"
          alt="Website Development Preview"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-md"
        />
      </div>

      {/* Description Section 2 */}
      <div className="mb-20 px-6 sm:px-12 md:px-20 lg:px-36 xl:px-48 text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-normal text-white leading-relaxed">
          For this project, we are using Next JS for the front end. I am one 
          of the key team members in charge of the design, and I also implement
          those designs into code to bring the visual concepts to life. This
          involves translating the UI/UX into a functional interface, ensuring
          a smooth and interactive experience for users.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-6 mb-28 text-center">
        <a
          href="https://sg-cybersecurity-2025.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white text-sm md:text-base lg:text-lg font-medium py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-red-600 transition duration-300"
        >
          Live View Project
        </a>
      </div>

        

      <Footer2 />
    </div>
  );
};

export default WebsiteDevelopment;
