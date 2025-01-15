import React from 'react';
import Header from '../components/Header';

const Homepage = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:mr-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-extrabold">Hi I’m Kurt!!</h1>
          <p className="text-lg lg:text-2xl mt-6 max-w-2xl">
            A Junior Web Developer with expertise in UI/UX design, skilled in ReactJS, JavaScript, Git, TailwindCSS, and Figma. I also have experience in Photoshop for design and editing. Currently pursuing a degree in Information Systems, I’m passionate about creating responsive, user-friendly websites.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="/src/assets/ProfilePic.png" // Replace with the actual path to your image
            alt="Profile Picture"
            className="w-100 h-100 lg:w-100 lg:h-100 object-cover"
          />
        </div>
      </div>
      <div className="bg-[#F94E41] p-6 mt-8 text-center">
        hi
      </div>
    </div>
  );
};

export default Homepage;
