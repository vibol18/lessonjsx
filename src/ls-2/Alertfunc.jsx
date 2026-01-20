import React from 'react'

function Alertfunc() {
    function Sayhello()
    {
        alert("hello React")
    }
  return (
    <div>
      <button onClick={Sayhello}>ClickMe</button>
    </div>
  )
}

export default Alertfunc
