import React from 'react'
import Product from './Product'

const produt = [
  { id: 1, name: "Tshirt", price: 15 },
  { id: 2, name: "Hoodie", price: 23 }
]

function PropswithArray() {
    const handdleadd = (name) =>{
        alert(name+"Add to cart")
    }
  return (
    <div>
      {produt.map((value) => {
        return (
          <Product
            key={value.id}
            name={value.name}
            price={value.price}
            onAdd={()=>alert(value.name+"Addded")}
          />
          
        )
        
      })}
      
     
    </div>
  )
}

export default PropswithArray
