import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function PropsA() {
    const [message ,setMessage] = useState("")
    function setMessagee(msg){
        setMessage(msg)
        alert(`message received : ${msg}`)
    }
  return (
    <div>
      <div>parent</div>
      <ChildA message={setMessagee}/>
        <p>message: {message}</p>
        <ChildB message={setMessagee}/>
    </div>
  )
}

export default PropsA
