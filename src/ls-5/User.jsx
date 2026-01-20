import React, { useState } from 'react'
import HandleSubmit from './../ls-4/HandleSubmit';

function User() {
    const [form,setForm] = useState({
        id:1,
        u_name:"",
        u_email:"",
        u_pass:"",
        })
    const [user,SetUser] = useState([]);
function hadleChange(e){
    setForm({...form ,[e.target.name]:e.target.value})
}
function HandleSubmit(e){
    e.preventDefault();
    if(!form.u_name || !form.u_email|| !form.u_pass){
        alert("please Field all fail")
        return
    }else{
        SetUser([...user,form])
        setForm({id: form.id+1, u_name:"", u_email:"", u_pass:""})
    }
}
function handleDelete(index){
    const deleteId = user.filter((u,id)=> id !== index)
    SetUser(deleteId)
}
  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <input type="text" value={form.u_name} onChange={hadleChange} name='u_name' placeholder='name'/>
        <input type="text" value={form.u_email} name='u_email' onChange={hadleChange} placeholder='email'/>
        <input type="password" value={form.u_pass} name='u_pass' placeholder='password' onChange={hadleChange}/>
        <button type='submit'>Submit</button>
      </form>
      <ul>
       {user.map((u,i)=>(
        <li key={i}>
           <p>{i}{u.u_name}</p>
           <p>{u.u_email}</p>
           <button onClick={()=>handleDelete(i)}>delete</button>
        </li>
       ))}
      </ul>
    </div>
  )
}

export default User
