import React from 'react';
import HeroBannerImage1 from '../assets/images/banner1.jpg'; // Replace with the correct path

const HeroBanner1 = () => {
  return (
    <div className='px-2'>
      <img src={HeroBannerImage1} alt="hero-banner1" className='w-full h-100 rounded-md shadow-md md:mb-12' />
    </div>
  );
};

export default HeroBanner1;
