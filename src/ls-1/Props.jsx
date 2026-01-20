import React from 'react'

function Props(props) {
  return (
    <div className='border p-4 rounded-lg shadow'>
      <h2 className='font-bold '>{props.name}</h2>
      <p className='text-green-600'>{props.price}</p>
      <p>{props.qty}</p>
      <button className='py-4 px-3 mt-2 bg-blue-500 text-white rounded'>Add to card</button>
    </div>
  )
}
export default Props
