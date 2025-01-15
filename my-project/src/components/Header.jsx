import React from "react";

const Header = () => {
  return (
    <header className="bg-[#282828] text-white h-36 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="Homepage" className="text-3xl font-extrabold hover:text-gray-400">
          PORTFOLIO
        </a>
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button className="text-3xl focus:outline-none">
            <span>☰</span> {/* Replace with an icon from a library like FontAwesome or Heroicons */}
          </button>
        </div>
        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <a href="Homepage" className="hover:text-gray-400 text-2xl font-semibold">
            HOME
          </a>
          <a href="About" className="hover:text-gray-400 text-2xl font-semibold">
            ABOUT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
