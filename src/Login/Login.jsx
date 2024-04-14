import  axios  from 'axios'
import React ,{useState,useRef} from 'react'
import './Login.css'
import { Button,Col,Container,Form, Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const URL_BASE = import.meta.env.VITE_URL_BASE
console.log(URL_BASE)

const Login =  () => {
    const navigate = useNavigate()
    const formDataRef = useRef({
        email: "",
        password:"",
        
    })
    const [error, setError] = useState({})
    
    
    console.log(navigate)
        const handleChange= (e) =>{
            const{name,value} =e.target 
    
            formDataRef.current = {
              
             ...formDataRef.current ,
              [name] :value
            
            }
                
            
        }
        
        
        const handleSubmit = async (e)  =>{ 
            e.preventDefault() 
            const passwordcharcater=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
            let newError ={}; 
            if (!formDataRef.current.email) {
                newError.email="Ingresa un email valido"
            } 
            if (formDataRef.current.password && !passwordcharcater.test(formDataRef.current.password)) {
                newError.password="Contraseña incorrecta"
            } 
            if (!formDataRef.current.password) {
                newError.password="Debes ingresar una contraseña"
            } 
 
            setError(newError)  
            
    
    
    if (Object.keys(newError).length === 0) {
        const dataLogin =formDataRef.current
        console.log("Usuario Logeado :",dataLogin)
        try {
          const {data}= await axios.get(`${URL_BASE}/users/?email=${dataLogin.email}`) 
          console.log(data) 
          const [user] =data
        if (!user) {
            return alert("Usuario Invalido")
        } 
        if (dataLogin.password !== user.password) {
            return alert("Contraseña incorrecta")
        } 
      
       
        const userJson = JSON.stringify({  
            email:user.email ,
            surname:user.surname,
            name:user.name,
            id:user.id})
        
        localStorage.setItem("user",userJson)    
        navigate("/")
        return alert("Bienvenido")
        } catch (error) {
            console.log(error)
        }
    }
            
}   
    
  return (
    <Container>
    <Row className='justify-content-center my-5'>
        <h2 className='d-flex justify-content-center'>Login</h2>
      <Col sm={10}>
   <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={formDataRef.current.email}
       isValid={formDataRef.current.email && !error.email} onChange={handleChange} isInvalid={!!error.email}  /> 
           <Form.Control.Feedback type="invalid">
          {error.email}
        </Form.Control.Feedback>  
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

   
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} defaultValue={formDataRef.current.password}
      isValid={formDataRef.current.password && !error.password} isInvalid={!!error.password} /> 
            <Form.Control.Feedback type="invalid">
          {error.password}
        </Form.Control.Feedback> 
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group> 
   
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Col>
  </Row>
      
  </Container>
  )
}

export default Login