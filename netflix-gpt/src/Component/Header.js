import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { UseSelector, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SupportedLanguages } from '../utils/languageConstent';
import { changeLanguage } from '../utils/configSlice';
import { toggleSingleMovie } from '../utils/movieSlice';



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user)

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch )
  const singleMovie = useSelector((store) => store.movies.singleMovie);
  
  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error('Sign-out error:', error);
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return ()=> unsubscribe()
  }, []);

  const handelGptSearch = ()=>{
      dispatch(toggleGptSearchView())
  }

  const handelSingleMovie = ()=>{
    dispatch(toggleSingleMovie())
  }

  const handelLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div 
    className='flex flex-col items-center md:flex-row md:justify-between md:items-center absolute z-50 w-full px-4 py-2 bg-gradient-to-b from-black to-transparent'
      >
    <img
        className='md:w-36 w-24 mx-auto md:mx-0 '
        src= {LOGO}
        alt='Netflix Logo'
      />
     {user && (<div className='flex items-center space-x-4'>
     {showGptSearch && <select className='p-2 bg-gray-900 text-white m-2' onChange={handelLanguageChange}>
        {SupportedLanguages.map((lang)=> (
           <option key={lang.identifier} value={lang.identifier} name={lang.name}>{lang.name}</option>
           ))}
       
        
      </select>}
    
    
    
   
    {
    singleMovie ? ( <button 
     onClick={handelSingleMovie}
    className='bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white rounded-md transition duration-300'>
       {singleMovie || showGptSearch ? "Back" : "Homepage"}
       </button>) 
    : ( <button
      className='bg-purple-600 hover:bg-purple-700 px-4 py-2 text-white rounded-md transition duration-300'
     onClick={handelGptSearch}>
      {showGptSearch ? "Homepage" : "Gpt"}
           
     </button>)
     }



        {/* <img
          className='h-10 w-10 rounded-full'
          src={user?.photoUrl}
          alt='User Avatar'
        /> */}
       
        <button
          onClick={handleSignOut}
          className='bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-md transition duration-300'
        >
          Logout
        </button>
      </div>)}
    </div>
  );
};

export default Header;
