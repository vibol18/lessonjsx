import React, { useState } from 'react'

function HandleSubmit() {
    const [emial, SetEmail] = useState("")
    function submitHandle(e){
         e.preventDefault();
        alert(emial+"added");
    }
  return (
    <div>
        //on submit
    <form action="" onSubmit={submitHandle}>
        <input type="text" onChange={(e)=>SetEmail(e.target.value)} value={emial} className='border'/>
    </form>
    </div>
  )
}

export default HandleSubmit