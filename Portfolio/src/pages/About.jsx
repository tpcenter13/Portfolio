import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import { motion } from "framer-motion"
import EduExpe from '../components/EduExpe';

const About = () => {

  const skills = {
    programming: [
      "PHP/SQL",
      "HTML/CSS/JavaScript/TypeScript",
      "React.JS & Tailwind CSS",
      "Next.JS",
      "Node JS & Express",
      "MySql"
    ],
    design: [
      "Photoshop",
      "Figma",
      "Wireframing",
      "UI/UX & Web Design"
    ],
    systems: [
      "MS Excel",
      "GitHub",
      "Computer System Servicing (CSS)"
    ]
  };

  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />

{/* Profile Section */}
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="container mx-auto px-4 sm:px-8 lg:px-32 pt-24 lg:pt-36"
>
  <div className="flex flex-col lg:flex-row items-center gap-10 lg:px-20">
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
      <img
        src="/assets/ContactProfile.png"
        alt="Contact Profile"
        className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[40rem] lg:h-[40rem] object-cover rounded-3xl"
      />
    </div>

    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">Kurt Steven</h1>
      <h1 className="text-4xl sm:text-5xl lg:text-9xl font-extrabold mt-2">ARCIGA</h1>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4">
        UI/UX Designer | Web Developer |<br className="hidden lg:block" />
        Bridging Design and Functionality
      </h2>
    </div>
  </div>
</motion.div>

<EduExpe/>

      {/* Technical Skills Section */}
      <div className="container mx-auto px-4 mt-20 lg:mt-28 mb-36">
        <div className="lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Programming & Development</h3>
              <ul className="list-disc pl-5 space-y-2">
                {skills.programming.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Design & Prototyping</h3>
              <ul className="list-disc pl-5 space-y-2">
                {skills.design.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Systems & Tools</h3>
              <ul className="list-disc pl-5 space-y-2">
                {skills.systems.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default About;