import React from 'react';
import Header from '../components/Header';
import Footer2 from '../components/Footer2';

const BasicTroubleshooting = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen">
      <Header />
      
      {/* Main Content Area */}
      <div className="mb-28 text-center p-8 lg:p-32 rounded-lg shadow-md" style={{ backgroundColor: '#030303' }}>
        <h1 className="text-3xl lg:text-7xl font-extrabold text-white">Basic Troubleshooting</h1>
      </div>
      
      {/* Image Row 1 */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 mb-32">
        <img src="/assets/pc1.png" alt="Image 1" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md" />
        <img src="/assets/pc2.png" alt="Image 2" className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md" />
      </div>


      <Footer2 />
    </div>
  );
};

export default BasicTroubleshooting;
