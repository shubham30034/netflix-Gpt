import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({path}) => {
  if(!path) return null
  return (
    <div className='md:w-48 w-40 rounded pr-4 '>
        <img className=' rounded' src={IMG_CDN +path} alt="movie card " />

    </div>
  )
}

export default MovieCard