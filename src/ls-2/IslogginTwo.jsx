import React, { useState } from 'react'

function IslogginTwo() {
    const [isLogin, setIsloggin] = useState(false);
  return (
    <div className='p-5'>
        {/* if */}
      {isLogin ?(
        <>
        <h1>Wellcome User</h1>
        <button onClick={()=>setIsloggin(false)}>
            Logout
        </button>
        </>
        // else
      ):(
        <>
        <h1>Please Login</h1>
        <button onClick={()=>setIsloggin(true)}>
            Login
        </button>
        </>
      )}
    </div>
  )
}

export default IslogginTwo
