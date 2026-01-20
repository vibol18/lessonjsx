import React, { useState } from 'react'

function ShowBox() {
    const[showBox,setShowBox] =useState(false)
  return (
    <div className='min-h-screen flex flex-col item-center justify-center bg-gray-500'>
        <button onClick={()=>setShowBox(!showBox)}
        className='bg-blue-500'
        >
            {showBox? "hide box": "show Box"}
        </button>
        {showBox &&(
            <div className="mt-4 bg-white rounded shadow">
                <h2 className='text-xl font-bold'>Hello React</h2>
                <p>This is box</p>
            </div>
        )}
    </div>
  )
}

export default ShowBox
