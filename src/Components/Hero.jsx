import React from 'react'
import banner from '../assets/bannerhero.webp'

const Hero = () => {
  return ( 
    <div className='max-w-[2040px] mx-auto '>
        <div className='max-h-[500px] relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center bg-black/30'>
                <h1 className='ml-10 px-4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold'>If we can<span className='text-pink-400 ml-3' >bake it</span></h1>
                <h1 className='ml-10 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-pink-400'>You can</span> eat it!</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={banner} alt="/" />
        </div>
    </div>
  )
}

export default Hero