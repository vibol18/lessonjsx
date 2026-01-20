import React from 'react'
import Button from './ls-1/Button'
import Props from './ls-1/Props'
import Product from './ls-1/Product'
import PropswithArray from './ls-1/PropswithArray'

function App() {
  return (
     
    <div>
      <PropswithArray/>
      <PropswithArray/>
      <Button/>
      <Props name="tshirt" price ="12"/>
      <Props name ="hodie" price= "22" qty="5"/>
      <Product name={"coca"} price={12} qty={5}/>
    </div>
  )
}

export default App
