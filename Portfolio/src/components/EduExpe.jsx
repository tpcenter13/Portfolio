import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    { period: "2021 - 2025", institution: "Bulacan Polytechnic College", course: "Bachelor of Science in Information Systems (BSIS)" },
    { period: "2019 - 2021", institution: "Systems Plus College Foundation", course: "Computer Programming SHS (ICT)" },
    { period: "2016 - 2017", institution: "AMA University and Colleges (Bootcamp)", course: "Basic Animation & Photoshop" },
];

const experienceData = [
    { period: "2024, Dec 2 - 2025, March", role: "Insightz Technology Junior Web Developer" },
    { period: "2024, Aug 27 - Nov 27", role: "Insightz Technology Web Designer and UI/UX Intern" },
    { period: "2022, 8 July", role: "Capstone Colloquium – Technical Support" },
];

const EduExpe = () => {
  return (
    <div className="container mx-auto px-4 mt-20 lg:mt-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:px-20">

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
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
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">Experience</h2>
          <div className="relative">
            <div className="bg-[#CDA050] p-4 sm:p-6 lg:p-8 rounded-lg w-full">
              {experienceData.map((item, index) => (
                <div key={index} className="flex items-start mb-6 sm:mb-8 last:mb-0">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-4 h-4">
                      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full z-10"></div>
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
        </motion.div>

      </div>
    </div>
  );
};

export default EduExpe;
