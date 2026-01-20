import React, { useState } from 'react'

import ProductCard from './component/ProductCard';
import Cart from './component/Cart';

function App3() {
    const [cart,setCart] = useState([])
    const products = [
    { id: 1, name: "coca", price: 13, qty: 5 },
    { id: 2, name: "pepsi", price: 15, qty: 59 },
    { id: 3, name: "fanta", price: 10, qty: 5 },
    ]
     function AddtoCart(item) {
    const exist = cart.find(cartItem => cartItem.id === item.id);
    if (exist) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ?
        {...cartItem,qty : (cartItem.qty || 1) + 1}
        :cartItem
      ))
    } else {
        setCart([...cart, { ...item, qty: 1 }]);
    }
}
    function removeFromCart(id){
      const newCart = cart.filter(c=> c.id !== id)
      setCart(newCart)
    }
return (
    <div>
        {products.map((value)=>(
          <ProductCard
          key={value.id}
          proDuct={value}
          addToCart={AddtoCart}
          />
        ))}
        <Cart CartItem={cart} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default App3
