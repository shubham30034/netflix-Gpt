import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SingleMovieTitle from './SingleMovieTitle'
import SingleMovieMedia from './SingleMovieMedia'

const SingleMovie = () => {
   
  const singleMovie = useSelector(store=> store.movies.nowSingleMovie)
 



  return (
    <div className=''>
      
     {singleMovie && <div  className=''>
         <SingleMovieMedia id={singleMovie?.id} path={singleMovie?.poster_path}/>
         </div>
         }
        
         
    </div>
  )
}

export default SingleMovie