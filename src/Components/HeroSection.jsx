import React from 'react'
import Saif from '../assets/WhatsApp Image 2024-10-07 at 08.34.42_cae88192.jpg'
const HeroSection = () => {
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className='h-[90vh] max-md:h-full bg-[#FFD957] w-full'>
   

   <div className='flex max-md:flex-col h-full'>
     
   <div className='w-1/2  max-md:w-full  max-md:px-5 p-10 flex flex-col justify-center'>
   <h1 className='  text-5xl max-md:text-4xl  text-[#262E33] font-semibold leading-[60px]'>Hello I'm Saifullah sheikh a Wordpress &
     <div className='py-3 border-dotted border-2 border-[#333]'><h1 className='bg-[#121212]   text-5xl max-md:text-4xl text-white font-semibold'>  Frontend Developer</h1></div>
    creating sleek, functional websites.</h1>

   <div className='flex gap-5 mt-5'>
  <a href="#contact">
  <button className='py-3  px-10  bg-[#000] btn hover:bg-transparent hover:text-black border-[1px] border-zinc-900  text-white '>
      Let's Talk
    </button>
  </a>
   <a href="#portfolio">
   <button className='py-3 py-3  px-10  hover:bg-[#000] btn hover:text-white  border-[1px] border-zinc-900'>
     Portfolio
    </button>
   </a>
   </div>
  </div>

  
  <div className='w-1/2  max-md:w-full  max-md:items-start    max-md:justify-start  max-md:px-5   max-md:mb-5 flex justify-center items-center'>
     <img src={Saif} alt="" className='rounded-2xl w-[70%] saifi  max-md:w-full  max-md:h-[25%] max-md:object-cover max-md: object-top '/>
</div>
   </div>


    </div>
  )
}

export default HeroSection