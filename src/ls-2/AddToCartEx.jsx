import React from 'react'

function AddToCartEx({name}) {
    function addTocard(){
        alert(name+"addeed")
    }
  return (
    <div>
      <button onClick={addTocard}>Add to Card</button>
    </div>
  )
}

export default AddToCartEx
