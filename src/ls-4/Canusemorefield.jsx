import React, { useState } from 'react'

function Canusemorefield() {
const [Form,SetForm] = useState({username : "", Password :""})
function HandleSubmit(e)
{
    e.preventDefault();
    if(Form.username =="" || Form.Password ==""){
        alert("pls field to continue")
    }else{
         alert(`${Form.username} , ${Form.Password} is Loggin to the Webpage`)
    }
}
function handleChang(e){
    SetForm({...Form ,[e.target.name]: e.target.value})
}
    return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <input type="text" onChange={handleChang} value={Form.username} name='username' className='border'/><br />
         {Form.username === "" && <p className="text-red-500">Username is required</p> }
         {Form.username =="vibol" && <p>This is admin in this page</p>}
        <input type="text" onChange={handleChang} value={Form.Password}  name='Password' className='border'/><br />
        {Form.Password == "" && <p className='text-red-500'>Password is required</p>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Canusemorefield
