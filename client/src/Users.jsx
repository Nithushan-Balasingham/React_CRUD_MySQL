import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Users.css'
import { Link } from 'react-router-dom'

export default function Users() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async () =>{
      const {data} = await axios.get ("/api/users/getAllUsers")
      setUsers(data)
    }
      fetchAllUsers()
    },[])
    const handleDelete = async (id)=>{
        try{
          await axios.delete(`/api/users/${id}`)
          window.location.reload()
        }catch(err){
        console.log(err)
      }
    } 
  return (
    <div className='co_1'>
        <div className="c2">
          {users.map((user)=>(
            <div key={user.id} className='users'>
              <h2 className='h_1'>{user.username}</h2>
              <p className='p_1'>{user.email}</p>
              <button className='b_1'><Link to={`/users/update/${user.id}`}>Details</Link></button>
              <button className='b_2' onClick={()=>handleDelete(user.id)}>Delete</button>
            </div>
          ))}
        </div>
    </div>
  )
}
