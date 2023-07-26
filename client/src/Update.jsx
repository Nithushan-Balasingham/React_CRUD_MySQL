import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Update.css'

export default function Update() {
  const {id} = useParams()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState('')
  const [price,setPrice] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
      const getDataById = async()=>{
        const {data} = await axios.get(`/api/products/${id}`)
        setTitle(data.title)
        setPrice(data.price)
        setDescription(data.description)
  
      }
  
      getDataById()
    },[id])
  const updatehandleInput = async(e)=>{
    e.preventDefault()
    const data ={
      title:title,
      description:description,
      price:price
    }
    await axios.put(`/api/products/${id}`,data)
    navigate('/')
  }
  return (
    <div>
      <h1>Testing</h1>
      <form onSubmit={updatehandleInput} action="/product" method="POST" encType="multipart/form-data">
        <input type='text' placeholder='title'  onChange={(e)=> setTitle(e.target.value)} value={title}/> 
        <input type='text' placeholder='description'  onChange={(e)=> setDescription(e.target.value)} value={description}/>
        {/* <input type='file' placeholder='price'  onChange={(e)=>setImage(e.target.files[0])} name='image'/> */}
        <input type='number' placeholder='price'   onChange={(e)=> setPrice(e.target.value)} value={price} /> 
        <button>Add</button>
    </form>
      
    </div>
   
  )
}
