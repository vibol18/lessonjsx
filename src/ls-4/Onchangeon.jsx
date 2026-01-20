import React, { use, useState } from 'react'

function Onchangeon() {
    const [Name,Setname] = useState("")
  return (
    <div>
     <input type="text" value={Name} onChange={(e)=>Setname(e.target.value)}/>
     <p>{Name || "guess"}</p>
    </div>
  )
}

export default Onchangeon
