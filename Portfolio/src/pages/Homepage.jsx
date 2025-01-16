import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';


const Homepage = () => {
  const mainPortfolioItems = [
    {
      title: "Photo Editing",
      image: "/assets/PhotoEditing.png",
      link: "#"
    },
    {
      title: "Figma",
      image: "/assets/Figma1.png",
      link: "#"
    },
    {
      title: "Basic Troubleshooting",
      image: "/assets/Troubleshooting.png",
      link: "#"
    }
  ];

  const additionalProjects = [
    {
      title: "Work-Based Projects",
      image: "/assets/WorkBased.png",
      link: "#"
    },
    {
      title: "Website Development",
      image: "/assets/WebsiteDev.png",
      link: "#"
    }
  ];

  const ProjectCard = ({ item }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-80">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#000000]">{item.title}</h3>
        <a 
          href={item.link}
          className="inline-block text-[#CDA050] hover:text-[#ff6b5f] transition-colors duration-300"
        >
          Explore page →
        </a>
      </div>
    </div>
  );



  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:mr-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-extrabold">Hi I'm Kurt!!</h1>
          <p className="text-lg lg:text-2xl mt-6 max-w-2xl">
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

      <div className="bg-[#F94E41] p-6 mt-8 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src="/assets/ReactIcon.png"
            alt="React Icon"
            className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
          />
          <img
            src="/assets/Tailwindcss.png"
            alt="TailwindCSS"
            className="w-45 h-24 lg:w-45 lg:h-32 object-cover"
          />
          <img
            src="/assets/Github.png"
            alt="GitHub"
            className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
          />
          <img
            src="/assets/Javascript.png"
            alt="JavaScript"
            className="w-24 h-27 lg:w-32 lg:h-27 object-cover"
          />
          <img
            src="/assets/Figma.png"
            alt="Figma"
            className="w-45 h-24 lg:w-45 lg:h-32 object-cover"
          />
          <img
            src="/assets/Photoshop.png"
            alt="Photoshop"
            className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
          />
        </div>
      </div>

      <div className="text-center text-4xl lg:text-7xl font-extrabold mt-10">
        My Projects
      </div>
      <p className="text-lg lg:text-2xl mt-4 max-w-3xl mx-auto text-center">
        In this section, I present my academic and freelance projects, showcasing the range of skills I've developed through both educational and professional experiences.
      </p>

      {/* First Grid - Main Portfolio Items */}
      <div className="container mx-auto px-4">
        <div className="mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainPortfolioItems.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Second Grid - Additional Projects */}
      <div className="container mx-auto px-4">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {additionalProjects.map((item, index) => (
            <ProjectCard key={index} item={item} />
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
  <h1 className="text-4xl font-bold mt-8">Contact Me!</h1>
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








<div className="mt-36 flex px-4 items-center flex-col lg:flex-row gap-10 container mx-auto"> {/* Added gap-8 */}
  <div className="flex-shrink-0 mb-8 lg:mb-0 lg:pl-20">
    <img
      src="/assets/ContactProfile.png"
      alt="Contact Profile"
      className="w-100 h-100 object-cover lg:w-100 lg:h-100"
    />
  </div>

  <div className="w-full lg:w-1/2 px-4 lg:px-16 bg-[#F94E41] rounded-lg h-[645px]"> {/* Set custom height */}
  {/* Contact Me Title */}
  <h2 className="text-3xl font-semibold text-white mt-20">Contact Me!</h2>

  {/* Phone number and Email description */}
  <div className="mt-4 mb-6">
    <div className="flex justify-between">
      <div className="w-full lg:w-1/2">
        <h3 className="text-lg font-semibold text-white">Phone Number</h3>
        <p className="text-sm text-white">+1 (123) 456-7890</p> {/* Example phone number */}
      </div>

      <div className="w-full lg:w-1/2">
        <h3 className="text-lg font-semibold text-white">Email</h3>
        <p className="text-sm text-white">example@example.com</p> {/* Example email */}
      </div>
    </div>
  </div>

  {/* Form */}
  <form className="mt-4 space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-white">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-white">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      ></textarea>
    </div>

    <div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
      >
        Send Message
      </button>
    </div>
  </form>
</div>

</div>







<div className='mt-40'>
  <Footer2/>
</div>





    </div>
  );
};

export default Homepage;