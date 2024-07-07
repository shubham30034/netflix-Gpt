import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_POSTER } from '../utils/constant'

const GptSearch = () => {
  
  return (
    <div>
      <img
          src= {BACKGROUND_POSTER}
         
          className="w-full h-full md:h-full fixed -z-20"
        />
        <div className='py-[25%] md:py-0'>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    </div>
  )
}

export default GptSearch