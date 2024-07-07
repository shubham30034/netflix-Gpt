import React, { useRef } from 'react';
import lang from '../utils/languageConstent';
import { useSelector } from 'react-redux';
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch()



 const language = useSelector(store => store.config.lang)
 
 const search = useRef()

//  serach movie in tmdb

const searchMovieTMDB = async(movie)=>{
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
  const json = await response.json()

  return json.results

}


 const handelGptSearchClick = async (movie) => {



  const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query " + search.current.value +"only give me name of 5 movies , comma seprated like the example result given ahead Example Result : Gadar, Sholay, Don, Golmal , Koi Mil Gya"
 
  const gptResult = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  


  // Andaz Apna Apna, Amar Akbar Anthony, Dilwale Dulhania Le Jayenge, Maine Pyar Kiya, Hum Aapke Hain Koun
  const gptMovies = gptResult.choices[0].message.content.trim().split(",")

  // ['Mother India', ' Amar Akbar Anthony', ' Deewaar', ' Mughal-e-Azam', ' Anand']

  // search each array result in tmdb api

  const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie)) 
  // [promise,promise,promise,promise,promise]

  const tmdbResults = await Promise.all(promiseArray)
 
  dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}))

 }

 return (
  <div className='pt-[8%] flex justify-center px-2 md:px-0'>
   <form action=""
    className='md:w-1/2 w-full bg-black grid grid-cols-12'
    onClick={(e) => e.preventDefault()}
   >
    <input
     ref={search}
     className='col-span-8 m-4 p-4 rounded'
     type="text" name=""
     placeholder={lang[language].gptSearchPlaceholder} />
    <button
     className='col-span-4 bg-red-500 rounded md:p-2 md:m-4 p-1 m-4'
     onClick={handelGptSearchClick}
    >
     {lang[language].search}
    </button>
   </form>
  </div>
 );
}

export default GptSearchBar;
