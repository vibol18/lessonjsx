import React from 'react'

function Childmessage({messageHandler}) {
  return (
    <div>
      <button onClick={() => messageHandler("Hello from child!")}>Send Message</button>
    </div>
  )
}

export default Childmessage
