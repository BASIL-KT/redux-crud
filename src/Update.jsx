import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { updateUser } from './UserReducer'


function Update() {
  const {id}=useParams()
  const users=useSelector((state)=>state.users)
  const existingUser =users.filter((f)=>f.id==id)
  const {name,email,dept}=existingUser[0]
  const [uname,setName]=useState(name)
  const [uemail,setEmail]= useState(email)
  const [udept,setDept]= useState(dept)

  const navigate=useNavigate()

  const dispatch=useDispatch()

  const handleUpdate= (event)=>{
    event.preventDefault()
    dispatch(updateUser({
      id:id,
      name:uname,
      email:uemail,
      dept:udept
    }))
    navigate('/')
  }

  return (
<>
<div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-4'>
      <form onSubmit={handleUpdate}>
        <h3>Edit</h3>
        <div >
          <label htmlFor="name">Name:</label>
           <input type="text" value={uname} onChange={e=> setName(e.target.value)}  placeholder='Enter Name' name='name' className='form-control' />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" value={uemail} onChange={e=> setEmail(e.target.value)} placeholder='Enter Email ID' name='email' className='form-control' />
        </div> 
        <div>
        <label htmlFor="text">Department:</label>
        <input type="text" value={udept} onChange={e=> setDept(e.target.value)}  placeholder='Enter Department' name='name' className='form-control' />
        </div>

        <button className='btn btn-info my-3'>Submit</button>
      </form>

    </div>

   </div>

</>  )
}

export default Update

