import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Rolle() {
  const [role , setRole] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials= true
  useEffect(()=>{
    
  })
  return (
    <div>
      <h1>Admin</h1>
      <h1>User</h1>
      <h1>Moderator</h1>
    </div>
  )
}

export default Rolle
