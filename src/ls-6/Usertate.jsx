import React, { useEffect, useState } from 'react'

function Usertate() {
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUser(data))
        .catch(err=> console.error(err))


    })
  return (
    <div>
        <p>List User</p>
        <ul>
            {user.map((u)=>(
                <>
                <p>{u.name}</p>
                <p>{u.email}</p>
                </>
            ))}
        </ul>
    </div>
  )
}

export default Usertate
