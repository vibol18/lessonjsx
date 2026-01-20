import React from 'react'

function Cart({CartItem,removeFromCart }) {
    const Total  = CartItem.reduce((sum,item) => sum + item.qty*item.price,0)
  return (
    <div className="mt-6 p-4 border rounded shadow bg-gray-50">
     <div> Cart</div>
     {CartItem.length  === 0 ? (
        <>
        <p className='text-red-500'>Cart Is empty</p>
        </>
     ):(
        <>
        <ul>
            {CartItem.map((item,index)=>(
               <li key={index}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.qty}</p>
                <button onClick={()=>removeFromCart(index)}>Remove</button>
               </li>
            ))}
        </ul>
        <p>Total is: {Total}</p>
        </>
     )}
    </div>
  )
}

export default Cart
