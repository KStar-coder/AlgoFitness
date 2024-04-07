import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (

  <>

    <div className='md:flex md:justify-evenly '>

      <div className='py-4 px-2 md:py-2 md:px-4 md:py-7- text-center md:mt-8'>

        <h1 className='text-4xl font-bold text-red-500 text-center py-4 px-2 font-sans mt-6 md:text-6xl md:mt-10'>
          Fitness Club
        </h1>

        <p className='text-4xl font-bold text-black font-sans md:mt-5 md:mb-5'>
          Sweat, Smile <br />
          And Repeat
        </p>

        <p className='text-xl text-pretty mb-6 mt-3 font-medium md:mt-5'>
          Check out the most effective exercises <br /><span className='text-xl text-pretty mb-6 mt-3 font-medium text-red-500'>personalized</span> for you
        </p>

        <p>
          <a href="#exercises" className='text-center text-2xl font-semibold bg-red-500 rounded-md p-2 text-white hover:bg-red-400' >Explore Exercises</a>
        </p>

      </div>

      <div className='flex justify-center'>
        <img src={HeroBannerImage} alt="hero-banner" className='mt-4 w-[350px] shadow-lg rounded-md' />
      </div>

    </div>

  </>
);

export default HeroBanner;