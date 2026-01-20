import React, { useState } from 'react'

function Logintwo() {
    const [Login ,isLogin] = useState(false)
  return (
    <div>
     {Login ? (
        <button onClick={()=>isLogin(false)} className='bg-blue-500 px-4 py-3 border rounded-sm'>
            logout
        </button>
     ):(
        <div>
            <div>Pls Login</div>
            <button onClick={()=>isLogin(true)}>
             login
            </button>
        </div>
     )}
    </div>
  )
}

export default Logintwo
