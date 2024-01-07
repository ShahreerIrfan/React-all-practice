import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Rerister/Register.jsx';
import RegisterRBS from './Components/RegisterRBS/RegisterRBS.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rbs',
        element: <RegisterRBS></RegisterRBS>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
