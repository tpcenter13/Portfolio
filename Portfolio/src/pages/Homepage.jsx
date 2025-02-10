import React from 'react';
import { Link } from 'react-router-dom';  // Change this import
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import ContactSection from '../components/ContactSection';
import TechStackCarousel from '../components/TechStackCarusel';

const Homepage = () => {
  const mainPortfolioItems = [
    {
      title: "Photo Editing",
      image: "/assets/PhotoEditing.png",
      link: "photoEditing"
    },
    {
      title: "Figma",
      image: "/assets/Figma1.png",
      link: "figma"
    },
    {
      title: "Basic Troubleshooting",
      image: "/assets/Troubleshooting.png",
      link: "basicTroubleshooting"
    }
  ];

  const additionalProjects = [
    {
      title: "Work-Based Projects (UI UX)",
      image: "/assets/WorkBased.png",
      link: "workBasedProjects"
    },
    {
      title: "Website Development",
      image: "/assets/WebsiteDev.png",
      link: "websiteDevelopment"
    },
  ];

  const sideProjects = [
    {
      title: "Mini Projects",
      image: "/assets/miniproj2.png",
      link: "miniprojects"
    }
  ]

  const ProjectCard = ({ item }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/${item.link}`}>  {/* Change href to to */}
        <div className="relative h-80">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#000000]">{item.title}</h3>
          <span className="inline-block text-[#CDA050] hover:text-[#ff6b5f] transition-colors duration-300">
            Explore page →
          </span>
        </div>
      </Link>
    </div>
  );


  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:mr-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-extrabold">Hi I'm Kurt!!</h1>
          <p className="text-lg lg:text-2xl mt-6 max-w-2xl font-light">
            A Junior Web Developer with expertise in UI/UX design, skilled in ReactJS, JavaScript, Git, TailwindCSS, and Figma. I also have experience in Photoshop for design and editing. Currently pursuing a degree in Information Systems, I'm passionate about creating responsive, user-friendly websites.
          </p>

        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="/assets/ProfilePic.png"
            alt="Profile Picture"
            className="w-100 h-100 lg:w-100 lg:h-100 object-cover mx-auto"
          />
        </div>
      </div>

<TechStackCarousel/>

      <div className="text-center text-4xl lg:text-7xl font-extrabold mt-14">
        My Projects
      </div>
      <p className="text-lg lg:text-2xl font-light  mt-4 max-w-3xl mx-auto text-center">
        In this section, I present my academic and freelance projects, showcasing the range of skills I've developed through both educational and professional experiences.
      </p>


      {/* Unified Portfolio Grid */}
<div className="container mx-auto px-4">
  <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[...mainPortfolioItems, ...additionalProjects, ...sideProjects].map((item, index) => (
      <div 
        key={index} 
        className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <ProjectCard item={item} />
      </div>
    ))}
  </div>
</div>








      <div className="relative bg-[#282828] text-white mt-36">
  {/* Slanted Shape */}
  <div className="relative">
    <div className="absolute top-0 left-0 w-full h-[150px] bg-[#282828]" />

    {/* Left Polygon */}
    <div
      className="absolute top-[-60px] left-0 w-full h-[120px]"
      style={{
        background: "linear-gradient(to top, transparent 50%, #282828 50%)",
        clipPath: "polygon(0 0, 50% 50%, 0 100%)",
      }}
    ></div>

    {/* Right Polygon */}
    <div
      className="absolute top-[-60px] right-0 w-full h-[120px]"
      style={{
        background: "linear-gradient(to top, transparent 50%, #282828 50%)",
        clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
      }}
    ></div>
  </div>

  {/* Content Section */}
  <div className="content-section bg-[#282828] text-white p-8 text-center z-10 relative">
  <h1 className="text-5xl font-bold mt-8">Contact Me!</h1>
  <p className="mt-4 text-lg">Thank you for visiting my portfolio! If you'd like to get in touch or inquire about my work, please use the form below.<br/> Simply fill out your details and message, and I’ll make sure to respond to your email as soon as possible. I look forward to hearing from you!</p>
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



<ContactSection/>



<div className='mt-40'>
  <Footer2/>
</div>





    </div>
  );
};

export default Homepage;