import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#282828] text-white h-auto lg:h-36">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-36">
          <a href="/" className="text-3xl font-extrabold hover:text-gray-400 transition-colors">
            PORTFOLIO
          </a>
          
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button 
              className="text-3xl focus:outline-none hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '×' : '☰'}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="/" className="hover:text-gray-400 text-2xl font-semibold transition-colors">
              HOME
            </a>
            <a href="/About" className="hover:text-gray-400 text-2xl font-semibold transition-colors">
              ABOUT
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pb-4`}
        >
          <nav className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="hover:text-gray-400 text-2xl font-semibold text-center py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <Link 
              to="/About" 
              className="hover:text-gray-400 text-2xl font-semibold text-center py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;