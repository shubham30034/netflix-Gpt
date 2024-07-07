import React from 'react';
import MovieCard from './MovieCard';
import useFetchSingleMovie from '../hooks/useSingleMovie';
import { useDispatch } from 'react-redux';
import { toggleSingleMovie } from '../utils/movieSlice';
import { useSelector } from 'react-redux';
import { clearTrailer } from '../utils/movieSlice';


const MovieList = ({ title, movies }) => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const { getSingleMovie } = useFetchSingleMovie();
  const dispatch = useDispatch()



  const removeMovie = useSelector((store)=> store.movies.trailerVideo)

  const singleMovie = (id) => {
    console.log(id);
   
    getSingleMovie(id);
     
    dispatch(toggleSingleMovie())
    dispatch(clearTrailer())
   
   
  };

  return (
    <div className='p-2'>
      <h1 className='p-3 font-bold md:text-3xl text-xl'>{title}</h1>
      <div className='flex overflow-x-scroll custom-scrollbar '>
        <div className='flex'>
          {movies &&
            movies.map((movie) => (
              <div key={movie.id} className=' hover:scale-110' onClick={() => singleMovie(movie.id)}>
                <MovieCard key={movie.id} path={movie.poster_path} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
