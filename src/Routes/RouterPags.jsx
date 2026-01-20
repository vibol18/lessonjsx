import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Home from '../pages/Home'

function RouterPags() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        {/* Navigation links would go here */}
        <Link to="/">Home</Link>|{' '}
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>

      </nav>
      <Routes>
        {/* Route definitions would go here */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterPags
