import React from 'react'
import  logo from '../assets/logowhitesaifi.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' z-50 bg-[#000] p-10 max-md:px-5'>
  <div className='flex max-md:flex-col max-md:items-start max-md:gap-3 justify-between items-center'>
    <h1 className='text-5xl text-white max-md:text-4xl'>
        Ready TO Start The Project?
    </h1>
  

   <div className='flex gap-5 mt-5'>
 <a href="#contact">  <button className='py-3  px-10 text-black bg-[#FFD957] hover:bg-transparent hover:text-black border-[1px] border-zinc-900 hover:text-white hover:border-white btn'>
      Let's Talk
    </button></a>
    <a href="mailto:saifullahsheikh025@gmail.com">
    <button className='py-3 py-3  px-10  hover:bg-[#FFD957] hover:text-black text-white border-[1px] border-zinc-100 btn'>
   Email me
    </button>
    </a>
   </div>

  </div>

  <div className='flex justify-between items-center mt-10'>
  <img src={logo} alt="" />
 
  <div className='flex gap-5  items-center justify-center'>
  <a href="https://www.linkedin.com/in/saifullah-shaikh3219/" target='_blank'> <FaLinkedin  className='text-white text-3xl cursor-pointer ' /></a>

  <FaInstagram className='text-white text-3xl cursor-pointer'/>
  <FaGithub className='text-white text-3xl cursor-pointer' />


  </div>
  </div>

  <div className='text-[#ffffff7d] mt-5 pt-5 text-center border-t-2 border-[#ffffff7d]'>
   Copy right 2024  Saifullah sheikh | ALL Rights Reserved.
  </div>
 
    </div>

    
  )
}

export default Footer