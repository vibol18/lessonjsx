import React from 'react'
import Childmessage from './Childmessage';

function ReviceMEssage() {
    function handleMessage(msg) {
        alert(`Message received: ${msg}`);
    }
  return (
    <div>
      <Childmessage messageHandler={handleMessage}/>
    </div>
  )
}

export default ReviceMEssage
