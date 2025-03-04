import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';

const About = () => {
  const educationData = [
    {
      period: "2021 - 2025",
      institution: "Bulacan Polytechnic College",
      course: "Bachelor of Science in Information Systems (BSIS)",
    },
    {
      period: "2019 - 2021",
      institution: "Systems Plus College Foundation",
      course: "Computer Programming SHS (ICT)",
    },
    {
      period: "2016 - 2017",
      institution: "AMA University and Colleges (Booth Camp)",
      course: "Basic Animation & Photoshop",
    },
  ];

  const experienceData = [
    {
      period: "2024, Dec 2 / 2025, March",
      role: "Insightz Technology Junior Web Developer"
    },
    {
      period: "2024, Aug 27 - Nov 27",
      role: "Insightz Technology Web Designer and UI UX Intern"
    },
    {
      period: "2022, 8 July",
      role: "Capstone Colloquium – Technical Support"
    }
  ];

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
<div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-24 lg:pt-36">
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
</div>




      {/* Education and Experience Section */}
      <div className="container mx-auto px-4 mt-20 lg:mt-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:px-20">
          {/* Education Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">Education</h2>
            <div className="relative">
              <div className="absolute left-0 w-0.5 h-full bg-gray-700"></div>
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="relative">
                      <div className="absolute -left-1.5 mt-1.5 w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="ml-8">
                      <div className="text-base text-gray-400">{item.period}</div>
                      <div className="text-lg font-semibold text-yellow-500">{item.institution}</div>
                      <div className="text-base text-gray-300">{item.course}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
<div className="w-full lg:w-1/2">
  <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">Experience</h2>
  <div className="relative">
    <div className="bg-[#CDA050] p-4 sm:p-6 lg:p-8 rounded-lg w-full">
      {experienceData.map((item, index) => (
        <div key={index} className="flex items-start mb-6 sm:mb-8 last:mb-0">
          <div className="relative flex-shrink-0">
            {/* Combined line and circle element */}
            <div className="relative w-4 h-4">
              {/* Circle */}
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full z-10"></div>
              {/* Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-1/2 top-4 w-0.5 h-16 sm:h-20 bg-white -translate-x-1/2"></div>
              )}
            </div>
          </div>
          <div className="ml-6 sm:ml-8">
            <div className="text-base sm:text-lg font-semibold text-black">{item.period}</div>
            <div className="text-sm sm:text-base text-black">{item.role}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
          
        </div>
      </div>

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