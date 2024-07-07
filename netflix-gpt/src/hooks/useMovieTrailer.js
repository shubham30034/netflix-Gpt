import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addTrailer, } from '../utils/movieSlice'


const useMovieTrailer = (id) => {
  const useMovieTrailer = useSelector((store)=> store.movies.trailerVideo)

    const dispatch = useDispatch()
    const getMovieVideo = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
         const data = await response.json()
    
         const filterData = data.results.filter((data)=>{
          return data.type === "Trailer"
         })
         const trailer = filterData.length ? filterData[0] : data.results[0];
         
         dispatch(addTrailer(trailer))
       
       }
       useEffect(()=>{
        getMovieVideo()
       },[id])

}

export default useMovieTrailer