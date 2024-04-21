import React from 'react';
import { styles } from '../styles';
import Cards from './Cards';
import { ComputersCanvas } from './canvas';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='lg:flex lg:justify-center  md:flex  md:pt-15 pt-16' >
      <div className="flex flex-col-reverse lg:flex-row  items-center space-y-4 lg:space-y-0 md:space-y-0 pr-6 pb-0">
        <div className='lg:w-1/2'>
          <Cards />
        </div>
        <div className="lg:w-1/2 order-first lg:order-none lg:h-[450px] sm:h-full flex justify-center lg:pt-0 md:pt-5 pb-10" >
            <ComputersCanvas />
        </div>

        <div className='absolute bottom-[-20px] lg:bottom-8 w-full flex lg:hidden justify-center items-center lg:pb-0 pb-20   ' >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      </div>

      <div className='absolute bottom-[-20px] lg:bottom-8 w-full lg:flex  md:hidden sm:hidden hidden justify-center items-center lg:pb-0 pb-20 ' >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
