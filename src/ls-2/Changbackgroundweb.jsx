import React, { useState } from 'react'
import NavbarChangColor from './NavbarChangColor'

function Changbackgroundweb() {
  const [darkMode, setDarkMode] = useState(false)
  const[newColor,setNwColoer] = useState(false)

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-blue-500" : "bg-red-500"
      }`}
    >
      <NavbarChangColor />
      <div className="p-10 flex justify-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-white text-black rounded shadow"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <h1 className="text-center text-white text-2xl font-bold">
        Hello React Background Change
      </h1>


     

        <button onClick={()=>setNwColoer(!newColor) }>
            {newColor ? "black":"green"}
        </button>
         <div className={` w-[120px] h-[140px] tarnsition-colors duration-500
        ${newColor ? "bg-black" : "bg-green-500"}
        `}></div>
    </div>
  )
}

export default Changbackgroundweb
