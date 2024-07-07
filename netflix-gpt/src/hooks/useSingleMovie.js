import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addSingleMovie } from '../utils/movieSlice';
const useFetchSingleMovie = () => {
  const dispatch = useDispatch();

  const getSingleMovie = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        API_OPTIONS
      );
      const data = await response.json();
     
      dispatch(addSingleMovie(data));
    } catch (error) {
      console.error('Error fetching single movie:', error);
    }
  };


  return {
    getSingleMovie,
  };
};

export default useFetchSingleMovie;
