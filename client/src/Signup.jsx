import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'

export default function SignUp(){
  const [values , setValues] = useState({
    username:'',
    email:'',
    password:''
});
const navigate = useNavigate()
const [errors, setErrors] = useState({})
const handleInput =(e)=>{
    const {name, value} =e.target;
    setValues({...values, [name]: value})
}
const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (event)=>{
    event.preventDefault();
    // setErrors(validate(values))
    setIsSubmit(true);
    if(!values.username){
        setErrors({username:"Username is required"})
        return
    }
    if(!values.email){
        setErrors({email:"Email is required"})
        return
    }
    if(!values.password){
        setErrors({password:"Password is required"})
        return
    }
        axios.post('/api/users/addUserNew', values)
        .then(res=>{
            navigate('/')
            console.log(res)})
        .catch((err=>{
            setErrors({ message: 'Email already exists' });
            // alert("Email Already exists")
            console.log(err)
        }))
    
}

useEffect(() => {
if (Object.keys(errors).length === 0 && isSubmit) {  
}
}, [errors, isSubmit]);

return (
<div className='d-flex justify-content-center align-items-center bg-primary vh-100' >
    <div className='bg-white p-3 rounded w-25'>
        <h2 className='h_2'>Sign Up</h2>
        {errors.message && (<p>{errors.message}</p>)}   
        <form action='' onSubmit={handleSubmit}  className='f_1'>
        <div className='m_3'>
                <label className='l_1'>Name</label>
                <input type='text' value={values.username} onChange={handleInput} placeholder='Enter Name' name='username' className='f_2'/>
                {
                    errors.username && (
                        <p>{errors.username}</p>
                    )
                }                        
            </div>
            <div className='m_3'>
                <label><strong>Email</strong></label>
                <input type='email' value={values.email} onChange={handleInput} placeholder='Enter Email' name='email' className='f_2'/>
                {
                    errors.email && (
                        <p>{errors.email}</p>
                    )
                }              
            </div>
            <div className='m_3'>
                <label><strong>Password</strong></label>
                <input type='password' value={values.password} onChange={handleInput} placeholder='Enter Password' name='password' className='f_2'/>
                {
                    errors.password && (
                        <p>{errors.password}</p>
                    )
                }                       
            </div>
            <button className='btn_1'>Sign up</button>
            <p></p>
        </form>
    </div>
</div>
)
}


