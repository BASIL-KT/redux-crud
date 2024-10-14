import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Create() {
  
  const [name,setName]=useState('')
  const [email,setEmail]= useState('')
  const [dept,setDept]= useState('')
  const users= useSelector(state=>state.users)
  const navigate=useNavigate


   const dispatch = useDispatch()

  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(addUser({id: users[users.length-1].id+1, name , email , dept}))
    navigate('/')
  }

  return (
   <>
       <Link className='mt-5 btn btn-link' to={'/'}>Go Back</Link>

   <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-4'>
      <form onSubmit={handleSubmit}>
        <h3>Create</h3>
        <div >
          <label htmlFor="name">Name:</label>
           <input type="text" onChange={e=>setName(e.target.value)} placeholder='Enter Name' name='name' className='form-control' />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={e=>setEmail(e.target.value)} placeholder='Enter Email ID' name='email' className='form-control' />
        </div> 
        <div>
        <label htmlFor="text">Department:</label>
        <input type="text" onChange={e=>setDept(e.target.value)} placeholder='Enter Department' name='name' className='form-control' />
        </div>

        <button className='btn btn-info my-3'>Submit</button>
      </form>

    </div>

   </div>
   </>

  )
}

export default Create