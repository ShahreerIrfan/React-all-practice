/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './assets/Components/Shop/Shop.jsx';
import Home from './assets/Components/Layout/Home.jsx';
import Orders from './assets/Components/Orders/Orders.jsx';
import Inventory from './assets/Components/Inventory/Inventory.jsx';
import Login from './assets/Components/Login/Login.jsx';
import Review from './assets/Components/Review/Review.jsx';
import cartProductsLoader from './Loader/cartProductsLoader.js';
import Checkout from './assets/Components/Checkout/Checkout.jsx';
import Signup from './assets/Components/Singnup/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path : 'orders',
        element : <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'invertory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path: 'review',
        element: <Review></Review>
      },
      {
        path:'checkout',
        element: <Checkout></Checkout>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
