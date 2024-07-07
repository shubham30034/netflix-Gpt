import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import VideoTitle from './VideoTitle';
import { IMG_CDN } from '../utils/constant';
import SingleMovieTitle from './SingleMovieTitle';

const SingleMovieMedia = ({ id, path }) => {
  useMovieTrailer(id);

  return (
      
    <div className='w-full md:h-[900px] h-[800px] grid grid-cols-12 text-white bg-black '>
      <div className='relative col-span-12 md:col-span-7 p-4 rounded border border-red-800 flex items-start'>
        <div className='w-full'>
          <VideoTitle id={id} />
        </div>
        <div className='md:absolute absolute sm:top-[50%] top-[40%]  sm:h-auto lg:top-[60%] md:top-[40%] md:left-0 md:w-full lg:w-full text-white'>
          <SingleMovieTitle/>
        </div>
      </div>
      <div className='hidden h-[900px] md:block col-span-5 bg-red-900 p-4 rounded border border-red-800'>
        <img className='h-full w-full rounded' src={IMG_CDN + path} alt="" />
      </div>
    </div>
  
  );
};

export default SingleMovieMedia;
