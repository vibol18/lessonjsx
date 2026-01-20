import React, { useEffect, useState } from 'react'


function Countuseeffect() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
  return (
    <div>
        <p>{count}</p>
        <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded animate-spin  hover:animate-none transition-all duration-300"
            >
                + Add
            </button>
            <button
                onClick={() => setCount(count -1)}
                className="bg-blue-500 text-white px-4 py-2 rounded animate-spin  hover:animate-none transition-all duration-300"
            >
                - dec
            </button>
             <button
                onClick={() => setCount(0)}
                className="bg-blue-500 text-white px-4 py-2 rounded animate-spin  hover:animate-none transition-all duration-300"
            >
                - dec
            </button>
            
    </div>
  )
}

export default Countuseeffect
