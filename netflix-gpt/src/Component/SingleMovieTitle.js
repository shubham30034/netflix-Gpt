import React from 'react';
import { useSelector } from 'react-redux';

const SingleMovieTitle = () => {
  const singleMovie = useSelector((store) => store.movies.nowSingleMovie);
  if(!singleMovie) return null

  return (
    <div className=' text-white p-8 '>
      <div className='flex items-center justify-between mb-6'>
        <h1 className=' lg:text-4xl md:text-2xl lg:font-bold   '>{singleMovie.original_title}</h1>
        <h2 className='text-lg'>{singleMovie.release_date}</h2>
      </div>
      <div className='max-w-2xl mb-4'>
        <p className='text-lg mb-4'>{singleMovie.overview}</p>
        <p className='text-xl font-bold'>{`Rating: ${singleMovie.vote_average}/10`}</p>
      </div>
      <div className='flex space-x-4'>
        {singleMovie && singleMovie.genres.map((genre) => (
          <span key={genre.id} className='bg-blue-600 px-4 py-2 rounded-full text-sm'>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleMovieTitle;
