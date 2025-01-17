import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';

const PhotoEditing = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />
      
      {/* Main Content Area */}
      <div className="mb-28 text-center p-8 lg:p-32 rounded-lg shadow-md" style={{ backgroundColor: '#030303' }}>
        <h1 className="text-3xl lg:text-7xl font-extrabold text-white">Photo Editing</h1>
      </div>
      
      {/* Image Row 1 */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 mb-9">
        <img src="/assets/spartan gym.png" alt="Image 1" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md" />
        <img src="/assets/lovelystore.png" alt="Image 2" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md" />
      </div>

      {/* Image Row 2 */}
      <div className="mt-16 flex justify-center mb-9">
        <img src="/assets/alvin.png" alt="Image 1" className="w-full sm:w-2/4 lg:w-2/4 rounded-lg shadow-md" />
      </div>

      {/* Image Row 3 */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 mb-9">
        <img src="/assets/elianproj.png" alt="Image 1" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md" />
        <img src="/assets/cyberbullying.png" alt="Image 2" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md" />
      </div>

      {/* Image Row 4 */}
      <div className="mt-16 flex justify-center mb-9">
        <img src="/assets/PhotoshopEdit.png" alt="Image 1" className="w-full sm:w-2/4 lg:w-2/4 rounded-lg shadow-md" />
      </div>

      {/* Image Row 5 */}
      <div className="mt-16 flex justify-center mb-9">
        <img src="/assets/Insightz.png" alt="Image 1" className="w-full sm:w-2/4 lg:w-2/4 rounded-lg shadow-md" />
      </div>

      {/* Image Row 6 */}
      <div className="mt-16 flex justify-center mb-9">
        <img src="/assets/SgCybersecurityBG.png" alt="Image 1" className="w-full sm:w-2/4 lg:w-2/4 rounded-lg shadow-md" />
      </div>

      {/* Link to Homepage */}
      <div className="mt-16 flex justify-center mb-40 md:ml-[950px] ml-4">
              <Link to="/" className="text-white underline text-lg sm:text-xl font-semibold hover:text-gray-400">
                Click here to go back Home
              </Link>
            </div>

      <Footer2 />
    </div>
  );
};

export default PhotoEditing;
