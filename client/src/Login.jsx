import './Login.css'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [loginStatus,  setLoginStatus] = useState('')
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const [account, setAccount] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await   axios.post('/api/users/addUser', {
        email,
        password
      });

      const data = response.data;

      if (response.status === 200) {
        if (data.message === 'Success') {
          setMessage('Login successful');
          navigate('/books')
        } else {
          setMessage('Invalid email or password');
          // Handle invalid login
        }
      } else {
        setMessage('Failed to login');
        // Handle failed login
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error during login');
    }
  }
  const handleNavigate=()=>{
    navigate('/signup')
  }
 
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response = await axios.get('/api/users/isLoggedIn');
  //       const data = response.data;

  //       if (response.status === 200) {
  //         if (data.loggedIn) {
  //           setMessage('Already logged in');
  //           // navigate('/books');
  //         }
  //       } else {
  //         setMessage('Failed to check login status');
  //         // Handle failed login status check
  //       }
  //     } catch (error) {
  //       console.error('Error during login status check:', error);
  //       setMessage('Error during login status check');
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

    

  return (
    <div>
      <h2 className='he_1'>Login</h2>
      


    <form action='' onSubmit={handleLogin} className='cont_2'>
                <div className='mb-3'>
                    <label className='lb_1'><strong>Email</strong></label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'  className='ib_1'/>
                    {/* <p>{errors.email}</p>                 */}
                </div>
                <div className='mb-3'>
                    <label className='lb_2'><strong>Password</strong></label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'  className='ib_2'/>
                    {/* <p>{errors.password}</p>                 */}
                </div>
                <button  className='btn_1'>Log-In</button>
                <p></p>
                {/* <Link to='/' className='btn btn-default border w-100 bg-light'>Login</Link> */}
                <button className='btn_2' onClick={handleNavigate}>Create An Account</button>
            </form>
      {message && <p>{message}</p>}
    </div>
      
  );
};
export { Login };
