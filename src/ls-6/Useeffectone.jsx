import React, { useEffect } from 'react'

function Useeffectone() {
    useEffect(()=>{
        console.log("hello")
    },[])
  return (
    <div>
      hello react
    </div>
  )
}

export default Useeffectone
