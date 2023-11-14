import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
          <div className='max-w-screen-xl m-auto'>
             <AuthProvider>
               <RouterProvider router={router}></RouterProvider>
             </AuthProvider>
         </div>
   </HelmetProvider>
  </React.StrictMode>
)
