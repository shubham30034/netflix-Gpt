import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addUpcomingMovies } from '../utils/movieSlice'
import { useSelector } from 'react-redux'

const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const nowUpcomingMovies = useSelector(store=> store.movies.nowUpcomingMovies)

    const getUpcomingMovies = async () =>{
      const response = 
     await fetch(
        'https://api.themoviedb.org/3/movie/upcoming', 
      API_OPTIONS
      )
      const data =await response.json()
      dispatch(addUpcomingMovies(data.results))
    
    }
    
    useEffect(()=>{
    !nowUpcomingMovies &&  getUpcomingMovies()
    },[])
    

}

export default  useUpcomingMovies