/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './assets/Components/Contact/Contact.jsx';
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import First from './assets/Components/First/First.jsx';
import Friends from './assets/Components/Friends/Friends.jsx';
import FriendDetail from './assets/Components/FriendDetail/FriendDetail.jsx';
import Post from './assets/Components/Post/Post.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/about",
//     element: <div>This is the about page</div>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      
      {
        path : '/',
        element : <First></First>,
      },
      {
        path : '/friends',
        element : <Friends></Friends> ,
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path: 'post',
        element: <Post></Post>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
