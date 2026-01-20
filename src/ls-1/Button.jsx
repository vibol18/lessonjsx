import React, { useState } from 'react'

function Button() {
    const[count,setCount] =useState(0)
  return (
    <div>
      <button>Click</button>
      <div className="min-h-screen flex justify-center bg-gray-100">
        <div className="bg-whiote p-6 rounded-lg shadow-lg">
            <h1 className='text-2xl font-bold text-blue-500'>
                React+tailwind
            </h1>
            <p>{count}</p>
            <button onClick={()=>setCount (count+1)} className='mt-4 px-4 py-3 shadow-lg bg-blue-500 rounded-lg'>Click Me</button>
            <button onClick={()=>setCount(count-1)}  className='px-4 py-3 shadow-lg bg-red-500 rounded-lg'>Decrease</button>
        </div>
      </div>
    </div>
  )
}

export default Button
