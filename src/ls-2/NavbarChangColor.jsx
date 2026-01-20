import React, { useState } from 'react'

function NavbarChangColor() {
    const [Dark,setDark] =useState(false)
  return (
    <div>
      <nav className={`px-6 py-4 flex justify-between item-center'
        ${Dark ? "bg-gray-500":"bg-black text-white"}`}>
        <h1>My app</h1>
        <ul className='flex gap-3'>
            <li><a href="">Home </a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact Admin</a></li>
        </ul>

        <button onClick={()=>setDark(!Dark)}
        className='px-3  rounded'
        >
            {Dark ? "light": "dark"}
        </button>
      </nav>
    </div>
  )
}

export default NavbarChangColor
