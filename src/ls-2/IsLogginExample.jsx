import React, { useState } from 'react'

function IsLogginExample() {
    const [show,setShow] =useState(false);
    function handlealert() {
      alert("hello Click")
    }
  return (
    <div className='p-5'>
      <button
      onClick={()=>setShow(!show)}
      className='px-4 py-2 bg-blue-500 rounded'
      >
        toggle
      </button>
      {show &&(
        <div className="mt-4 p-4 bg-gray-200 rounded">
            hello React 
            <button className='bg-blue-500 rounded-lg shadow-lg py-3 px-3' onClick={handlealert}>click here</button>
        </div>
      )}
    </div>
  )
}

export default IsLogginExample
