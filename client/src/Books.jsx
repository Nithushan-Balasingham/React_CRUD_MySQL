import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Books.css'

export default function Books() {
    const [books,setBooks] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    const [account, setAccount] = useState(null);
   

    useEffect(()=>{
        const fetchAllBooks = async()=>{
                const {data} = await axios.get("/api/products/allProducts")
                // console.log(data)
                setBooks(data)
          
        }
        fetchAllBooks()
    },[])
    const handleDelete=async(id)=>{
      try{
        await axios.delete(`/api/products/${id}`)
        window.location.reload()
      }catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      const fetchUser = async()=>{
              const {data} = await axios.get("/api/users/isLoggedIn")
              console.log(data)
              setAccount(data.user)
        
      }
        fetchUser();
      },[]) 
    return (
        <div>
          <h1>Lama Book Shop</h1>
          <div>      {account && (
                <div className="book">
                  <h2>{account.username}</h2>
                </div>
              )}</div>
          <div className="books">
            {books.map((book) => (
              <div key={book.id} className="book">
               {/* {book.image && <img src={`http://localhost:8080${book.image}`} className='img_1'/>} */}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <span>${book.price}</span>
                <button><Link to={`/update/${book.id}`}>Update</Link></button>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
              </div>
            ))}
          </div>
          <button><Link to='/add'>Add NEw book</Link></button>
           </div>
      );
    };
    
