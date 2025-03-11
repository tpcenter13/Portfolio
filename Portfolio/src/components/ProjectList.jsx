import React from "react";

const projects = [
  {
    title: "PHOTOSHOP",
    description: "Proficient in Adobe Photoshop with experience in creating visually engaging designs for web and digital platforms.",
    image: "/assets/PhotoEditing.png",
    link: "/photoEditing", // Corrected to relative route
    tools: ["Photoshop"]
  },
  {
    title: "The OGSI Project",
    description: "I designed an intuitive, user-focused UI/UX for the OGSI Project.",
    image: "/assets/OGSI1.png",
    link: "https://www.figma.com/proto/0FCSEZSjK404P16cAG5WOc/OGSI?node-id=572-21867&p=f&t=oSRWvYrLfGbkarEh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=572%3A21867",
    tools: ["Photoshop", "Figma"]
  },
  {
    title: "Pagsasaka E-Commerce",
    description: "I designed the UI/UX for the Pagsasaka Website and mobile app.",
    image: "/assets/Pagsasaka.png",
    link: "https://www.figma.com/proto/lcBl97ZOx9l80oo7sWKHGI/Thesis?node-id=107-211&p=f&t=wAOCzHRFttnwKUYI-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=107%3A211",
    tools: ["Photoshop", "Figma"]
  },
  {
    title: "Insightz Technology",
    description: "I designed the website's layout, navigation, animation and user flow for Insightz Technology, a cybersecurity platform. I also created banners using Photoshop and handled the UI/UX design of their portal",
    image: "/assets/website2.png",
    link: "https://www.figma.com/proto/aizc9imebHc1nKGnzCQLGp/Website?node-id=1-3&p=f&t=FKaGXCVuTTozmx1u-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
    tools: ["Photoshop", "Figma"]
  },
  {
    title: "SgCybersecurity",
    description: "I contributed to this cybersecurity project as a Web Developer, handling frontend and backend development. I built features like online courses, a forum, and job search, ensuring seamless functionality from wireframes to deployment on Vercel.",
    image: "/assets/sg1.png",
    link: "https://sg-cybersecurity-2025.vercel.app/",
    tools: ["NextJS", "NodeJS", "MySql", "TypeScript", "Javascript", "Git", "TailWindCss", "Figma", "Photoshop"]
  },
  {
    title: "FORTIMSS Shopping",
    description: "I designed the UI/UX and crafted a seamless user flow for this e-commerce platform, ensuring an intuitive and engaging experience. Additionally, I created visually compelling banners and graphics using Photoshop to enhance the platform's appeal.",
    image: "/assets/forti1.png",
    link: "https://www.figma.com/proto/AZlJEHf9K0jNpRJFf6qP5E/Fortinet-Shopping?node-id=2452-8318&p=f&t=VVFeNFaLMMmPA26y-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2452%3A8318",
    tools: ["Photoshop", "Figma"]
  },
  {
    title: "Kabataang Barangay Portal",
    description: "For this project, I enhanced the website's design for improved visual appeal and user experience. I also redesigned banners using Photoshop and added dedicated article pages to better showcase the organization's content.",
    image: "/assets/jake4.png",
    link: "https://www.figma.com/proto/UZvOGCP3C68QpgfrBsH0jB/New-Project(Jake)?node-id=4-6499&p=f&t=gzw8wQ8KYJFBr8P0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A6499",
    tools: ["Photoshop", "Figma"]
  },
];

const ProjectCard = ({ project }) => {
  // Check if the link is external (starts with http or https)
  const isExternalLink = project.link.startsWith('http');
  
  return (
    <a
      href={project.link}
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : ""}
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 h-full flex flex-col"
    >
      <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-4 text-[#000000]">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, index) => (
              <span key={index} className="bg-gray-700 text-white px-3 py-1 text-xs rounded-full">{tool}</span>
            ))}
          </div>
          <span className="text-[#CDA050] hover:text-[#ff6b5f] transition-colors duration-300">
            {isExternalLink ? "Visit Project →" : "View Showcase →"}
          </span>
        </div>
      </div>
    </a>
  );
};

const ProjectList = () => (
  <div className="container mx-auto px-4">
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectList;
