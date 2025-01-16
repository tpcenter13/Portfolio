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
      period: "2024, Nov / 2025, Jan",
      role: "Insightz Technology Junior Web Developer"
    },
    {
      period: "2024, Aug - Nov",
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
      "HTML/CSS/JavaScript",
      "React.JS & Tailwind CSS",
      "React Native"
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
      <div className="container mx-auto px-32 pt-24 lg:pt-36">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:px-20">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
    <img
      src="/assets/ContactProfile.png"
      alt="Contact Profile"
      className="w-160 h-160 lg:w-160 lg:h-160 object-cover"
    />
</div>
          
          <div className="w-full lg:w-2/3 text-center lg:text-left ">
            <h1 className="text-3xl lg:text-6xl font-extrabold">Kurt Steven Good</h1>
            <h1 className="text-4xl lg:text-9xl font-extrabold mt-2">ARCIGA</h1>
            <h2 className="text-xl lg:text-3xl font-semibold mt-4">
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
              <div className="bg-[#CDA050] p-6 lg:p-8 rounded-lg w-full">
                {experienceData.map((item, index) => (
                  <div key={index} className="flex items-start mb-8 last:mb-0">
                    <div className="relative">
                      <div className="absolute -left-1.5 mt-1.5 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-8">
                      <div className="text-lg font-semibold text-black">{item.period}</div>
                      <div className="text-base text-black">{item.role}</div>
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