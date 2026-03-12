import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
import User from './components/User/User';
import Login from './components/login/Login';
import { Githubloader } from './components/Github/Github';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[ 
      // children is used to give further objects in the xame component
      {
        path:"",
        element:<Home/>
      } ,
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/User/:userId",
        element:<User/> 
      },
      {
        loader:(Githubloader),
        path:"/github",
        element:<Github/>
      },
      {
        path:"/login",
        element:<Login/>
      } 
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
