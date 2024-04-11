import React ,{useState,useRef} from 'react'
import { Button,Col,Container,Form, Row } from 'react-bootstrap'
import axios from 'axios'


const RegisterUser = () => {

   const formDataRef = useRef({
    email: "",
    password:"",
    checkpassword:""
   })
    const [error, setError] = useState({})

    const handleChange= (e) =>{
        const{name,value} =e.target 

        formDataRef.current = {
          
         ...formDataRef.current ,
          [name] :value
        
        }
            
        
    }
    
    
    const handleSubmit =(e) =>{ 
        e.preventDefault() 
        const passwordcharcater=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        let newError ={}; 
        if (!formDataRef.current.email) {
            newError.email="Ingresa un emailVALIDO"
        } 
        if (formDataRef.current.password && !passwordcharcater.test(formDataRef.current.password)) {
            newError.password="La contraseña no cumple los requisitos"
        } 
        if (!formDataRef.current.password) {
            newError.password="Debes ingresar una contraseña"
        } 
        if (formDataRef.current.checkpassword !== formDataRef.current.password) {
            newError.checkpassword="Las contraseñas deben coinicdir"
        }  
        if (!formDataRef.current.checkpassword) {
            newError.checkpassword="Ingrese su contraseña nuevamente"
        }
        setError(newError)  
        


if (Object.keys(newError).length === 0) {
    console.log("Usuario Registrado :",formDataRef.current)
}
        



    }
  return (
    <> 
    <Container>
      <Row className='justify-content-center my-5'>
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
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Checkpassword</Form.Label>
        <Form.Control type="password" placeholder="checkPassword" name="checkpassword"  isInvalid={!!error.checkpassword}onChange={handleChange} 
        defaultValue={formDataRef.current.checkpassword} isValid={formDataRef.current.checkpassword && !error.checkpassword} /> 
            <Form.Control.Feedback type="invalid">
            {error.checkpassword}
          </Form.Control.Feedback> 
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
        
    </Container>
    </>
  )
}

export default RegisterUser