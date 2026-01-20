import React, { useState } from 'react'

function Carttwo() {
    const [Cart,SetCart] = useState([])
  return (
    <div>
      <button onClick={()=>SetCart([...Cart, "item"])}>Add item</button>

      {Cart.length === 0 ?  (
        <p>Cart is empty</p>
      ):(
        <div>
            <p>
                cart in cart is:{Cart.length}
            </p>
        </div>
      )}
    </div>
  )
}

export default Carttwo
