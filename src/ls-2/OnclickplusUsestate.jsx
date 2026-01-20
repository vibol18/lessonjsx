import React, { useState } from 'react'

function OnclickplusUsestate() {
    const [count, setCount]= useState(0)
  

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} className='shadow py-3 px-3 bg-blue-500 rounded-lg'>+</button>
      <button onClick={()=>setCount(count-1)} className='shadow py-3 px-3 rounded-lg bg-green-500'>-</button>
      <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={()=>setCount (0)}>Reset</button>
    </div>
  )
}

export default OnclickplusUsestate
