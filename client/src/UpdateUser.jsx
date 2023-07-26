import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {
  const {id} = useParams()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
      const getDataById = async()=>{
        const {data} = await axios.get(`/api/users/${id}`)
        setUsername(data.username)
        setEmail(data.email)
        setPassword(data.password)
        setUsers(data)
  
      }
  
      getDataById()
    },[id])
  const updatehandleInput = async(e)=>{
    e.preventDefault()
    const data ={
      username:username,
      email:email,
      password:password
   
    }
    await axios.put(`/api/users/${id}`,data)
    window.location.reload()
  }
  return (
    <>
    <div>
        <div className="det">
            {users &&
            <div className='det_1'>
                <h2>{users.username}</h2>
                <h4>{users.email}</h4>
                </div>}
        </div>
       
      <form onSubmit={updatehandleInput} action="/product" method="POST" encType="multipart/form-data">
        <input type='text' placeholder='username'  onChange={(e)=> setUsername(e.target.value)} value={username}/> 
        <input type='email' placeholder='description'  onChange={(e)=> setEmail(e.target.value)} value={email}/>
        {/* <input type='file' placeholder='price'  onChange={(e)=>setImage(e.target.files[0])} name='image'/> */}
        <input type='password' placeholder='price'   onChange={(e)=> setPassword(e.target.value)} value={password} /> 
        <button>Update</button>
    </form>
      
    </div>
    </>
    
   
  )
}
