import React from 'react';

const VideoBackground = ({ title, overview }) => {
  return (
    <div className=' w-full  z-30 relative md:py-[15%]   px-6  bg-gradient-to-t from-black text-gray-400   right-0 aspect-video'>
      <h1 className='md:text-3xl text-sm font-bold text-white hidden md:block'>{title}</h1>
      <p className='py-6 text-lg md:w-1/4 hidden md:block'>{overview}</p>
      <div className='py-4  flex'>
        <button className='bg-red-500 hidden md:block bg-opacity-90  hover:scale-105 active:bg-red-600 text-white p-2 md:w-20 w-12 rounded mx-2 md:text-xl text-sm'>
          Play
        </button>
        <button className=' bg-slate-400 hidden md:block bg-opacity-60  hover:scale-105 active:bg-red-600 text-white p-2 w-30 rounded md:text-xl text-sm'>
          More Information
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
