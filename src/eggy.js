import React from 'react'
import 'eggy.css'

import BlogList from './containers/PostList'
import About from './containers/About'
import Contact from './containers/Contact'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function eggy(){
  return (
    <div className='eggy'>
        <BrowserRouter>
        <Routes>
            <Route index element={<BlogList/>}/>
            <Route path = 'About' element={<About/>}/>
            <Route path = 'Contact'  index element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default eggy

//use App anywhere you see eggy

//2

// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);
