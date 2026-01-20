import React from 'react'

function ChildA({message}) {
  return (
    <div>
      <button onClick={()=>message("hello from Child A")}>
        send To Child B
      </button>
    </div>
  )
}

export default ChildA
