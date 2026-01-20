import React, { useEffect, useState } from 'react'
function SettimeBycount() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        if(count >= 10 ) return;
        const timeverall = setInterval(()=>{
            setCount((prev)=> prev+1)
        },2000)

        return ()=>{
            clearInterval(timeverall)
        }
    },[count])
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default SettimeBycount
