import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../../src/constants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index , title , icon}) =>
{
  return (
    <Tilt className="xs:w-[250px] w-[320px] ">
      <motion.div variants={fadeIn("right" , "spring" , 0.5 * index , 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options ={{
          max: 45 , scale: 1 ,speed:450
        }}
        className='bg-black rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col
        '
        >
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>
          <img src={icon} alt= {title}
          className='w-16 h-16 object-contain'/>

        </div>
     

      </motion.div>
      
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1 , 1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        I'm Software Developer with experience in Java, 
        Python and Javascript and worked in frameworks like
        React and Node.js.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) =>(
          <ServiceCard key = {service.title}
          index = {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About,"about")