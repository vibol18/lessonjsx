import React from 'react'
import Propstwo from './Propstwo'

function Parent() {
  return (
    <div>
      <Propstwo name="John" age={25}/>
        <Propstwo name="Alice" age={30}/>
        <Propstwo name="Bob" age={22}/>
        <Propstwo name="Eve" age={28}/>
        
    </div>
  )
}

export default Parent
