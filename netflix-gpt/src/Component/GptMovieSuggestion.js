import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

 const {movieResults,movieNames} = useSelector(store => store.gpt)

 if(!movieNames) return null

  return (
    <div className=' bg-black bg-opacity-30 text-white text-center'>
     {
       movieNames.map((movie,key)=>(
        <MovieList title={movieNames[key]} movies={movieResults[key]} />
       ))

     }
      
    </div>
  )
}

export default GptMovieSuggestion