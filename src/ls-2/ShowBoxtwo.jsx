import React, { useState } from 'react'

function ShowBoxtwo() {
    const [show,setShow] = useState(false)
  return (
    <div>
      <button onClick={()=>setShow(!show)} 
      className='bg-red-500'
        >
        {show ? "hide":<h1 className='Bg-red-500'>show</h1>}
      </button>

      {show &&(
        <div className="bg-gray-500 w-[120px] h-[120px] rounded-lg shadow-lg"></div>
      )}
    </div>
  )
}

export default ShowBoxtwo
