import React from 'react'

const statics = () => {
    
  return (
    <div  data-scroll data-scroll-speed=".1" data-scroll-section className='bg-[#004d43] h-[40vh] max-md:h-[350px] rounded-t-3xl flex  justify-center items-center'>
        <div className='flex  max-md:grid max-md:grid-cols-2 max-md:grid-rows-2	max-md:gap-8	 gap-10 justify-center px-10 py-5 max-md:px-5 border-[#ffffff57] items-center border-y-2 w-full'>


            <div className='w-[25%]  max-md:w-full'>
                <h2 className='text-5xl text-center text-[white] font-semibold max-md:w-full'>2+</h2>
                <p className='text-2xl text-[white] text-center max-md:text-lg  max-md:w-full'>Years of Experience</p>
            </div>
            <div className='w-[25%] max-md:w-full	'>
                <h2 className='text-5xl text-center text-[white] font-semibold'>5+</h2>
                <p className='text-2xl text-[white] text-center max-md:text-lg'>Team Collaboration</p>
            </div>
            <div className='w-[25%]  max-md:w-full'>
                <h2 className='text-5xl text-center text-[white] font-semibold'>60+</h2>
                <p className='text-2xl text-[white] text-center max-md:text-lg'>Project Complete</p>
            </div>
            <div className='w-[25%] max-md:w-full'>
                <h2 className='text-5xl text-center text-[white] font-semibold'>90%</h2>
                <p className='text-2xl text-[white] text-center max-md:text-lg'>Success  Rate</p>
            </div>
        </div>
    </div>
  )
}

export default statics