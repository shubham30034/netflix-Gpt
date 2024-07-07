import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addTopratedMovies } from '../utils/movieSlice'
import { useSelector } from 'react-redux'

const useTopratedMovies = () => {

    const dispatch = useDispatch()
    const nowTopratedMovies = useSelector(store=> store.movies.nowTopratedMovies)

    const getTopratedMovies = async () =>{
      const response = 
     await fetch(
        'https://api.themoviedb.org/3/movie/top_rated', 
      API_OPTIONS
      )
      const data =await response.json()
      dispatch(addTopratedMovies(data.results))
    
    }
    
    useEffect(()=>{
    !nowTopratedMovies &&  getTopratedMovies()
    },[])
    

}

export default  useTopratedMovies