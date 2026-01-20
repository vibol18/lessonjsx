import React from 'react'


function ProductCard({proDuct,addToCart,Delete}){
  return (
    <div>
        <div className="bg-gray-500 item-center m-auto">
            <p>{proDuct.id}</p>
            <p>{proDuct.name}</p>
            <p>{proDuct.price}</p>
            <p>{proDuct.qty || 1}</p>
        </div>
        <button onClick={() => addToCart(proDuct)}>Add To Cart</button>
      
    </div>
  )
}
export default ProductCard
