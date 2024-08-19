import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import  'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Mencard from './Components/Home/Mencard/Menu.jsx'
import Contact from './Components/Home/Contact/Contact.jsx'
import About from './Components/Home/About/About.jsx'
import Registration from './Components/Auth/Registration.jsx'
import Login from './Components/Auth/Login.jsx'



const routes = createBrowserRouter([
  {
   path: '/',
   element: <App/>,
   children:[
    {
      path: '/',
      element: <Home></Home>,
     
   },
   {
    path: 'menu',
    element: <Mencard></Mencard>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  },
  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'registration',
    element: <Registration></Registration>
  },
  {
    path: 'login',
    element: <Login></Login>
  }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    
  </React.StrictMode>,
)
