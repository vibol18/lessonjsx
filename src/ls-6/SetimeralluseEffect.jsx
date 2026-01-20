import React, { useEffect } from 'react'

function SetimeralluseEffect() {
    useEffect(()=>{
        const timevall = setInterval(()=>{
            console.log("hello by 5s");
        },5000)
        return ()=>{
            clearInterval(timevall)
            console.log("Timevall is the end");

        }
    })
  return (
    <div>
      <p>hwllo</p>
    </div>
  )
}

export default SetimeralluseEffect
