import React from 'react';
import card1 from '../assets/1.webp'
import card2 from '../assets/2.webp'
import card3 from '../assets/3.webp'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl ml-3 px-2 pt-4'>Customized Cake</p>
          <p className='px-2 ml-4'>for your loved ones</p>
          <button className='border-white bg-white text-black ml-5 mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={card1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 ml-3 pt-4'>Birthday Cake</p>
          <p className='px-2 ml-4'>for your kids</p>
          <button className='border-white bg-white text-black mx-2 ml-5 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={card2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 ml-3 pt-4'>Custom Pancakes</p>
          <p className='px-2 ml-4'>Any design</p>
          <button className='border-white bg-white text-black mx-2 absolute ml-5 bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={card3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
