import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addPopularMovies } from '../utils/movieSlice'
import { useSelector } from 'react-redux'

const usePopularMovies = () => {

    const dispatch = useDispatch()
    const nowPopularMovies = useSelector(store=> store.movies.nowPopularMovies)

    const getPopularMovies = async () =>{
      const response = 
     await fetch(
        'https://api.themoviedb.org/3/movie/popular', 
      API_OPTIONS
      )
      const data =await response.json()
      dispatch(addPopularMovies(data.results))
    
    }
    
    useEffect(()=>{
    !nowPopularMovies &&  getPopularMovies()
    },[])
    

}

export default usePopularMovies