/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import OrderReview from './Components/OrderReview/OrderReview.jsx';
import Grandpa from './Components/Grandpa/Grandpa.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('tshirts.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
