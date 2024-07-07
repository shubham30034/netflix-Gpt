import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopratedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import SingleMovie from './SingleMovie';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const singleMovie = useSelector((store) => store.movies.singleMovie);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {singleMovie && showGptSearch ? (
        <SingleMovie />
      ) : showGptSearch ? (
        <GptSearch />
      ) : singleMovie ? (
        <SingleMovie />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;