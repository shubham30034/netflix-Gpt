import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import SingleMovie from './SingleMovie';


const Body = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);


  return (
  
     <div>
      <RouterProvider router={router} />
    </div>
  
  );
};

export default Body;
