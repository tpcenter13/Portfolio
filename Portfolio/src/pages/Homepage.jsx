import React from "react"; 
import { motion } from "framer-motion"; 
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import ContactSection from "../components/ContactSection";
import TechStackCarousel from "../components/TechStackCarusel";
import ProjectList from "../components/ProjectList";

const Homepage = () => {


  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between"
      >
        <div className="lg:mr-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-extrabold">Hi I'm Kurt!!</h1>
          <p className="text-lg lg:text-2xl mt-6 max-w-2xl font-light">
            Web Developer specializing in UI/UX design, skilled in Next.js, ReactJS, Express, JavaScript, Git, TailwindCSS, and Figma. Experienced in Photoshop, I create responsive, user-friendly websites
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img src="/assets/ProfilePic.png" alt="Profile Picture" className="w-100 h-100 lg:w-100 lg:h-100 object-cover mx-auto" />
        </motion.div>
      </motion.div>

      <TechStackCarousel />

      {/* Projects Section */}
      <div className="text-center text-4xl lg:text-7xl font-extrabold mt-14">My Projects</div>
      <p className="text-lg lg:text-2xl font-light mt-4 max-w-3xl mx-auto text-center">
        In this section, I present my academic and freelance projects, showcasing the range of skills I've developed through both educational and professional experiences.
      </p>
<ProjectList/>

      <div className="relative bg-[#282828] text-white mt-36">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-[150px] bg-[#282828]" />

          <div
            className="absolute top-[-60px] left-0 w-full h-[120px]"
            style={{ background: "linear-gradient(to top, transparent 50%, #282828 50%)", clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}
          ></div>

          <div
            className="absolute top-[-60px] right-0 w-full h-[120px]"
            style={{ background: "linear-gradient(to top, transparent 50%, #282828 50%)", clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
          ></div>
        </div>

        <div className="content-section bg-[#282828] text-white p-8 text-center z-10 relative">
          <h1 className="text-5xl font-bold mt-8">Contact Me!</h1>
          <p className="mt-4 text-lg">
            Thank you for visiting my portfolio! If you'd like to get in touch or inquire about my work, please use the form below.<br />
            Simply fill out your details and message, and I’ll make sure to respond to your email as soon as possible. I look forward to hearing from you!
          </p>
        </div>
      </div>

      {/* Rotated Downward Triangle (Separate Div) */}
<div
  className="w-250 h-[0] mx-auto "
  style={{
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    backgroundColor: "#282828", // Valid hex color
    transform: "rotate(180deg)", // Rotates the triangle upside down
    borderLeft: "150px solid transparent", // Adjusted width
    borderRight: "150px solid transparent", // Adjusted width
    borderTop: "100px solid #282828", // Adjusted height
  }}
></div>


      <ContactSection />

      <div className="mt-40">
        <Footer2 />
      </div>
    </div>
  );
};

export default Homepage;