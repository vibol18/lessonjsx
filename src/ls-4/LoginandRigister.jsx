import React, { useState } from 'react'

function LoginandRigister() {
    const [email,setEmaail] = useState("")
    function  showEmail(){
    alert(email + "this email has Login to this webpage")
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setEmaail(e.target.value)} value={email} placeholder='pls input the gmail'/>
      <p>{email}</p>
    </div>
  )
}

export default LoginandRigister
