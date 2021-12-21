import React, { lazy, Suspense } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

// const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))
// const Posts = lazy(() => import('./pages/Posts'))

import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

export default function App() {
   return (
      <BrowserRouter>
         <h1>Hello!~</h1>
         <nav
            style={{
               borderBottom: 'solid 1px',
               paddingBottom: '1rem',
            }}
         >
            <Link to="/">home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
         </nav>
         <Suspense fallback={<div>loading!</div>}>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="posts" element={<Posts />} />
               <Route path="about" element={<About />} />
            </Routes>
         </Suspense>
      </BrowserRouter>
   )
}
