import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)
 

  
  
  return (
    
   <div className=' bg-black text-white'>
   <div className=' md:-mt-48 mt-0 z-50 relative'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      </div>
      <MovieList title="Toprated" movies={movies.nowTopratedMovies}/>
      <MovieList title="Popular" movies={movies.nowPopularMovies}/>
     
      <MovieList title="Upcoming" movies={movies.nowUpcomingMovies}/>
      </div>
      )
  
               
}

export default SecondaryContainer