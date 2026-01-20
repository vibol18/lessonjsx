import React, { useState } from 'react'

function Showandhidebox() {
    const [show,SetShow] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button onClick={()=>SetShow(!show)} className="px-4 py-2 bg-blue-500 text-white rounded">
        {show ? "hide": "show"}
      </button>
      {show && (
        <div>
        <div className="bg-red-500">helo react</div>
        <p>I love you so muc</p>
        </div>
      )}

    </div>
  )
}

export default Showandhidebox
