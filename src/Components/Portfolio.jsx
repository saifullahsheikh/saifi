import React, { useState } from 'react'
import Trainer from '../assets/trainer.png'
import Anadolu from '../assets/anadolu.png'
import Millersauto from '../assets/millersauto.png'
import Toomercpa from '../assets/toomercpa.png'
import Fluxzos from '../assets/fluzosC.png'
import Webfxcloe from '../assets/webfxcloe,png.png'

import { IoIosArrowRoundForward } from "react-icons/io";

const Portfolio = () => {
   
     
   
  return (
   <>
    <div className=' z-30  relative'  id='portfolio'>

      <div className='px-10 pt-5 pb-5 border-b-2 max-md:px-5'>
      <h2 className='text-4xl font-bold'>
  Portfolio
  </h2>   </div>  
  
     
              <div  className='px-10 max-md:px-5 max-md:gap-0 grid  grid-cols-2 max-md:grid-cols-1	gap-5'>
             
          
    
     <div  className='h-[80vh] rounded-2xl p-5  max-md:h-[60vh] max-md:pb-10 max-md:px-0'>
       <div className='flex mb-3  items-center gap-5'> <div className='w-[10px] h-[10px] bg-zinc-900 rounded-full'></div> <h2 className=' '>Digital Service </h2></div>
        <div className='border-2 h-[80%] flex justify-center items-center rounded-2xl overflow-hidden'>
        <img src={Fluxzos}  alt="" className='object-top	
        rounded-2xl cursor-pointer	scale  h-[100%] object-cover     w-full' />

        </div>
        <a href="https://fluxzos.com/" target='_blank'>
        <button className='rounded-full border-[1px] border-zinc-900 px-5 py-1 mt-3 flex btn--default btn'>See Website 
        </button></a>
     </div>
       
     <div className='h-[80vh] rounded-2xl p-5  max-md:h-[60vh] max-md:pb-10 max-md:px-0'>
     <div className='flex mb-3  items-center gap-5'> <div className='w-[10px] h-[10px] bg-zinc-900 rounded-full'></div> <h2 className=' '>Education Based</h2></div>
     <div className='border-2 h-[80%] rounded-2xl overflow-hidden'>
        <img src={Anadolu} alt="" className='object-top	 rounded-2xl 	scale  h-[100%] object-cover w-full' />
        </div>
        <a href="https://anadoluconsultants.com/" target='_blank'>
        <button className='rounded-full border-[1px] border-zinc-900 px-5 py-1 mt-3 flex btn--default btn'>See Website 
        </button></a>
     </div>
     
     <div className='h-[80vh] rounded-2xl p-5  max-md:h-[60vh] max-md:pb-10 max-md:px-0'>
     <div className='flex mb-3  items-center gap-5'> <div className='w-[10px] h-[10px] bg-zinc-900 rounded-full'></div> <h2 className=' '>Financial Education Based     </h2></div>
     <div className='border-2 h-[80%] rounded-2xl overflow-hidden'>
        <img src={Toomercpa} alt="" className='object-top rounded-2xl 	scale  h-[100%] object-cover w-full' />
        </div>
        <a href="https://toomercpa.com/" target='_blank'>
        <button className='rounded-full border-[1px] border-zinc-900 px-5 py-1 mt-3 flex btn--default btn'>See Website 
        </button></a>
     </div>
     <div className='h-[80vh] rounded-2xl p-5  max-md:h-[60vh] max-md:pb-10 max-md:px-0'>
     <div className='flex mb-3  items-center gap-5'> <div className='w-[10px] h-[10px] bg-zinc-900 rounded-full'></div> <h2 className=' '>Webfx Clone</h2></div>
     <div className='border-2 h-[80%] rounded-2xl overflow-hidden'>
        <img src={Webfxcloe} alt="" className='rounded-2xl 	scale  h-[100%] object-cover w-full' />
        </div>
        <a href="https://saifullahsheikh.github.io/webfx-clone/" target='_blank'>
        <button className='rounded-full border-[1px] border-zinc-900 px-5 py-1 mt-3 flex btn--default btn'>See Website 
        </button></a>     </div>
     <div className='h-[80vh] rounded-2xl p-5  max-md:h-[60vh] max-md:pb-10 max-md:px-0'>
     <div className='flex mb-3  items-center gap-5'> <div className='w-[10px] h-[10px] bg-zinc-900 rounded-full'></div> <h2 className=' '>Vehicle Recycling Based</h2></div>
     <div className='border-2 h-[80%] rounded-2xl overflow-hidden'>
        <img src={Millersauto} alt="" className='object-top rounded-2xl 	scale  h-[100%] object-cover w-full' />
        </div>
        <a href="https://www.millersauto.com/" target='_blank'>
        <button className='rounded-full border-[1px] border-zinc-900 px-5 py-1 mt-3 flex btn--default btn'>See Website 
        </button></a>
     </div>
     <div className='h-[80vh] rounded-2xl p-5  max-md:h-[60vh] max-md:pb-10 max-md:px-0'>
     <div className='flex mb-3  items-center gap-5'> <div className='w-[10px] h-[10px] bg-zinc-900 rounded-full'></div> <h2 className=' '>Personal Trainer</h2></div>
     <div className='border-2 h-[80%] rounded-2xl overflow-hidden'>
        <img src={Trainer} alt="" className='rounded-2xl 	scale  h-[100%] object-cover w-full' />
        </div>
        <button className='rounded-full border-[1px] border-zinc-900 px-5 py-1 mt-3 btn'>See Website</button>
     </div>
              </div>
   
    </div>
    </>
  )
}

export default Portfolio