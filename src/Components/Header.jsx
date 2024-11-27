import React, { useState } from 'react'
  import  logo from '../assets/logo1saifulllah portfolio.png'
  import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
    };
  

  return (
    <div data-scroll data-scroll-speed="-.1" data-scroll-section  className='p-5 w-full  max-md:p-0 bg-[#FFD957] max-md:flex-col max-md:items-start flex  items-center justify-between'>
    <div  className='max-md:w-full max-md:flex max-md:justify-between max-md:items-center justify-between max-md:p-5'>
    <img src={logo} alt="" className='max-md:w-[40%]'/>
    <RxHamburgerMenu    onClick={toggleMenu}  className={`${isMenuOpen ? "shadow" :''}  w-[15%] hidden max-md:inline border-2 border-[#212121] rounded-lg cursor-pointer	 py-[5px] text-black text-5xl`}/>

    </div>

    <div
        className={`${
          isMenuOpen ? "max-md:flex" : "max-md:hidden"
        }  flex max-md:flex-col max-md:sticky max-md:z-[99] max-md:w-full max-md:justify-start  max-md:p-5 menu justify-between w-[70%]`}
      >
    <div className='max-md:gap-5 gap-10 flex  max-md:flex-col justify-center items-center max-md:justify-start max-md:items-start'>
    <a href="/" className='link '>
      
        <div className=''>Home</div>
     
    </a>

   <a href="#portfolio" className='link '>Portfolio</a>
     
      <a href="#about" className='link ' >About</a>
      <a href="" className='link '>Service</a>
      <a href="" className='link '>Experience</a>
    </div>

      <div>
    <a href="#contact">
    <button className='btn py-3 max-md:ml-0 max-md:mt-5 ml-5 hover:bg-[#000] hover:text-white px-10 border-[1px] border-zinc-900'>
      Let's Talk
    </button>
    </a>
  </div>

    </div>

  

    </div>
  )
};

export default Header