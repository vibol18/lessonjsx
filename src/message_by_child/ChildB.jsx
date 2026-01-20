import React from 'react'

function ChildB({message}) {
  return (
    <div>
    <button onClick={()=>message("hello from Chlid B")}>
        send To Child A
    </button>
    </div>
  )
}
export default ChildB