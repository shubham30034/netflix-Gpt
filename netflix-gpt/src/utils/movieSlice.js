import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    nowPopularMovies: null,
    nowTopratedMovies: null,
    nowUpcomingMovies: null,
    nowSingleMovie: null,
    singleMovie: false,
    singleMovieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      console.log("actiontrailer", action.payload);
      state.trailerVideo = action.payload;
    },
    clearTrailer : (state,action)=>{
       state.trailerVideo = null
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.nowTopratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.nowUpcomingMovies = action.payload;
    },
    addSingleMovie: (state, action) => {
      state.nowSingleMovie = action.payload;
    },
    toggleSingleMovie: (state, action) => {
      state.singleMovie = !state.singleMovie;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  clearTrailer,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingMovies,
  addSingleMovie,
  toggleSingleMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
