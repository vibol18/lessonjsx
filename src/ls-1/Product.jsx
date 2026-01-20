import React from 'react'

function Product({name,price,qty,onAdd}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{qty}</p>
      <button onClick={()=>onAdd(name)}>Add</button>
    </div>
  )
}

export default Product
