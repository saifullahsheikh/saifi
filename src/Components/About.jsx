import React from 'react'
import laptop from '../assets/developerAbout.jpg'
const About = () => {
  return (
    <div id='about'  data-scroll data-scroll-speed="-.1" data-scroll-section  className='bg-white z-10 flex p-10 max-md:flex-col max-md:p-5'>

<div className=' w-1/2 flex justify-start max-md:w-full'>
   <img src={laptop} alt="" className='w-[80%] max-md:w-full' />
        </div>


        <div className=' w-1/2 flex flex-col justify-center max-md:w-full max-md:mt-10'>
     <h2 className='  text-5xl text-gray-800 font-medium mb-6'>
     About Me
     </h2>
     <p className='text-lg md:text-xl text-gray-600 md:mb-10 mb-4 leading-[90px] max-md:leading-[35px] max-md:text-2xl  font-light'>
     Hey there! I'm Saifullah Sheikh, a Frontend Developer and WordPress Specialist from Sindh, Pakistan. With over 2 years of experience, I excel in building and customizing websites using modern technologies like HTML, CSS, JavaScript, React.js, and WordPress. Alongside my work, I’m passionate about creating clean, visually appealing, and highly functional web solutions. Staying updated with the latest trends in tech fuels my drive to continuously learn and grow as a developer!
     </p>
   <div>
   <a href="#contact"><button className='py-3  px-10  bg-[#000] hover:bg-transparent hover:text-black border-[1px] border-black  text-white btn'>
      Let's Talk
    </button></a>
   </div>
   </div>

 
    </div>
  )
}

export default About