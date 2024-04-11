import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import 'boxicons';
const Footerv1 = () => {
  return (
    <>

    <Container>
      <Row>
        <Col className='md-3 col-sm-4'>
          <h4 className='px -2'>Sobre mi 😀 </h4>
          
            <p>Hola!Soy Ismael, un apasionado del desarrollo web en constante aprendizaje. Este proyecto es
                            el resultado de mi dedicación y entusiasmo por aprender y mejorar mis habilidades como
                            desarrollador junior.¡No dudes en ponerte en contacto conmigo si tienes alguna pregunta
                            o sugerencia!</p>
           
        
          </Col>

          <Col className='md-3 col-sm-4'>
            <h4>Contáctame</h4>
          <h6><box-icon name='current-location' animation='tada-hover' size='md'></box-icon>ALMERÍA , ESPAÑA</h6>
          <h6><box-icon name='envelope' animation='tada-hover' size='md' ></box-icon>ismael.lajud65@gmail.com</h6>
          <h6><box-icon  name='phone'animation='tada-hover' size='md'></box-icon>+34 666-906-067</h6>
          </Col>
               <Row className='md-3 col-sm-4'>
          <h4>Sígueme</h4>
         
            <h6> <box-icon name='instagram' type='logo' animation='tada-hover' size='md' pull='left' ></box-icon></h6>
            <h6><box-icon name='linkedin-square' type='logo' animation='tada-hover'  size='md' pull='left'></box-icon></h6>
            <h6> <box-icon name='github' type='logo' animation='tada-hover'   size='md'pull='left' ></box-icon></h6>
          
        </Row>
      </Row>
    </Container>
    
    
    
    
    {/* <h1>FOOTER</h1> 
    <box-icon name='instagram' type='logo' animation='tada'  size='md' pull='left' ></box-icon>
    <box-icon name='linkedin-square' type='logo' animation='tada' size='md' pull='left'></box-icon>
    <box-icon name='github' type='logo' animation='tada' flip='horizontal' size='md'pull='left' ></box-icon> */}
    </>
    
  )
}

export default Footerv1