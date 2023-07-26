import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CreateNew.css'

export default function CreateNew() {
    // const [title, setTitle] = useState("")
    // const [price,setPrice] = useState(0)
    // const [description, setDescription] = useState('')
    // const [image, setImage] = useState('')
    const [book, setBook] = useState({
      title:"",
      description:"",
      price:null
    });
    const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/products/addProduct", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

    
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={2}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};
  

