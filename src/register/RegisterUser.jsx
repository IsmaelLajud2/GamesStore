import React, { useState, useRef } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const RegisterUser = () => {

  const navigate = useNavigate()
  const URL_BASE = import.meta.env.VITE_URL_BASE
  console.log(URL_BASE)
  const formDataRef = useRef({
    name: "",
    surname: "",
    email: "",
    password: "",
    checkpassword: ""
  })
  const [error, setError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    formDataRef.current = {

      ...formDataRef.current,
      [name]: value

    }


  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const passwordcharcater = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let newError = {};
    if (!formDataRef.current.email) {
      newError.email = "Ingresa un email valido"
    }
    if (formDataRef.current.password && !passwordcharcater.test(formDataRef.current.password)) {
      newError.password = "La contraseña debe contener un caracter especial ,Mayuscula y min 8 dígitos"
    }
    if (!formDataRef.current.password) {
      newError.password = "Debes ingresar una contraseña"
    }
    if (formDataRef.current.checkpassword !== formDataRef.current.password) {
      newError.checkpassword = "Las contraseñas deben coinicdir"
    }
    if (!formDataRef.current.checkpassword) {
      newError.checkpassword = "Ingrese su contraseña nuevamente"
    }
    setError(newError)



    if (Object.keys(newError).length === 0) {
      console.log("Usuario Registrado :", formDataRef.current)
      try {
        const { data } = await axios.post(`${URL_BASE}/users/`,formDataRef.current)
        console.log("Usuario registrado",data)

        const userJson = JSON.stringify({
          email: formDataRef.current.email,
          surname: formDataRef.current.surname,
          name: formDataRef.current.name,
          id: data.id 
        });

        sessionStorage.setItem("user", userJson)
        navigate("/")

        return alert(`Bienvenido ${formDataRef.current.name}🫡`)
      } catch (error) {
        console.log(error)
      }
    }



  }
  return (
    <>
      <Container>
        <Row className='justify-content-center my-5'>
          <h2 className='d-flex justify-content-center' >Formulario de Registro</h2>
          <Col sm={10}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Nombre" name="name" defaultValue={formDataRef.current.name}
                  isValid={formDataRef.current.name && !error.namel} onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  {error.name}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Apellido" name="surname" defaultValue={formDataRef.current.surname}
                  isValid={formDataRef.current.surname && !error.surname} onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  {error.surname}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={formDataRef.current.email}
                  isValid={formDataRef.current.email && !error.email} onChange={handleChange} isInvalid={!!error.email} />
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
                <Form.Control type="password" placeholder="checkPassword" name="checkpassword" isInvalid={!!error.checkpassword} onChange={handleChange}
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