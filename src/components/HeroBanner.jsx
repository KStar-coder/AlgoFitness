import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <div className='py-4 px-2 md:py-2 md:px-4 text-center md:text-left'>
    <h1 className='text-4xl font-bold text-red-500 font-sans'>Fitness Club</h1>
    <p className='text-4xl font-bold text-black font-sans'>
      Sweat, Smile <br />
      And Repeat
    </p>
    <p className='text-xl text-pretty mb-3'>
      Check out the most effective exercises personalized to you
    </p>
    <p>
      <a href="#exercises" className='m-4 mb-4 text-center text-2xl font-semibold bg-red-500 rounded-md p-2 text-white' >Explore Exercises</a>
    </p>

    <img src={HeroBannerImage} alt="hero-banner" className='mt-4 w-80 md:w-auto' />
  </div>
);

export default HeroBanner;