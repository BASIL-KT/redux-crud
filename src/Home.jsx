import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

function Home() {
   
    const users= useSelector((state)=>state.users)
  
    const dispatch=useDispatch()

    const handleDelete= (id)=>{
        dispatch(deleteUser({id:id}))

    }

return (
<>
<div className='container'>
    <h2 className='text-dark fw-bolder text-center'>Employee Details</h2>
    <Link to={'/create'}><button className='btn btn-success my-3'>Create New</button>
    </Link>
     <table className=' table table-responsive table-sm my-5 bordered shadow'>
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Department</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {users.map((users,index)=>(
                <tr key={index}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.dept}</td>
                <td>
                    <Link to={`/update/${users.id}`}><button className='btn btn-primary me-3'>Edit</button>
                    </Link>
                    <button onClick={()=>handleDelete(users.id)} className='btn btn-danger me-3'>Delete</button>
                </td>
                </tr>
            ))}

        </tbody>

     </table>
</div>

</>  )
}

export default Home