import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'boxicons';
import { Link } from 'react-router-dom';
import './FooterStyles.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-light ">
      <Container className='footer-container'>
        <Row className=" gx-5">
          <Col md={4} className="mb-4">
            <div>
              <h4>Sobre mí</h4>
              <p>Hola! Soy Ismael, un apasionado del desarrollo web en constante aprendizaje. Este proyecto es el resultado de mi dedicación y entusiasmo por aprender y mejorar mis habilidades como desarrollador junior. ¡No dudes en ponerte en contacto conmigo si tienes alguna pregunta o sugerencia!</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div>
              <h4>Contáctame</h4>
              <ul className="list-unstyled">
                <li><box-icon className='icon'  name='envelope' animation='tada-hover' size='md'></box-icon><span className='contact-span'> ismael.lajud65@gmail.com</span></li>
                <li><box-icon className='icon'  name='current-location' animation='tada-hover' size='md'></box-icon><span className='contact-span'> ALMERÍA, ESPAÑA</span></li>
                <li><box-icon className='icon'  name='phone' animation='tada-hover' size='md'></box-icon><span className='contact-span'> +34 666-906-067</span></li>
              </ul>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div>
              <h4>Sígueme</h4>
              <ul className="list-unstyled">
                <li><Link  to={"https://www.linkedin.com/in/ismael-lajud/"} target='_blank'><box-icon name='linkedin-square' type='logo' animation='tada-hover' size='md'></box-icon></Link></li>
                <li><Link  to={"https://github.com/IsmaelLajud2"} target='_blank'><box-icon name='github' type='logo' animation='tada-hover' size='md'></box-icon></Link></li>
                <li><Link  to={"https://www.instagram.com/ismaellajud/"} target='_blank'><box-icon name='instagram' type='logo' animation='tada-hover' size='md'></box-icon></Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
