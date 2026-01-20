import React from 'react'

function EventplusProps({text,click,alert}) {
  return (
    <div>
      <button onClick={click} className='px-3 py-3 bg-blue-500 rounded-lg text-white shadow-sm'>pl click</button>
      <p>{text}</p>
      <p>{alert}</p>
    </div>
  )
}

export default EventplusProps
