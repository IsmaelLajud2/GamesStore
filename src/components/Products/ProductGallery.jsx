import  axios  from 'axios'
import { useState ,useEffect } from "react"
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardProduct from './CardProduct'
const URL_BASE = import.meta.env.VITE_URL_BASE
import './StylesDetails.css'

const ProductGallery = () => {

    const [products, setProduct] = useState([])

    const getProducts = async() =>{
        try {
            const {data}= await axios.get(`${URL_BASE}/productos`)
            setProduct(data)
           console.log(data)
        } catch (error) {
           return alert("ERROR DE CONEXION")
        }

    } 
    useEffect(() => {
     getProducts()
    
      
    }, [])
    
  return (
        <Container>
            <Row>
                <h1>GAMES :</h1>
               
                 {products.map((product, index) => <CardProduct  key={index} prod={product}></CardProduct> )}
               
            </Row>
        </Container>
  )
}

export default ProductGallery