import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner1 from '../components/HeroBanner1';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';




const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');


  return (
    <Box>
      <p className='text-3xl text-yellow-300 shadow-lg bg-slate-500 rounded-3xl my-4 mx-2 p-4'>Welcome to Kaustav's Lair</p>
      <HeroBanner1 />
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;