import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navbar1 = () => {
  return (
<>

    <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary " >
      <Container> 
    
        <Navbar.Brand href="/" className="me-auto" ><img src="logo.games.png" alt='logo' style={{maxHeight:'90px' ,borderRadius:'33%',marginRight: '100px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         
            <Navbar.Text > 
            <Link   to="/" className='mx-5'>Go to Home</Link>
            
            </Navbar.Text> 
            <Navbar.Text>
              <Link   to='/register' className='mx-5'>Register</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link   to='/login'className='mx-5'>Login</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link   to='/admin'className='mx-5'>Admin Page</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link   to='/productos'className='mx-5'>Games</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link  to='/carrito' className='mx-5'>Tu compra 🛍️ <span>0</span></Link>
            </Navbar.Text>
           
           
          
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse> 
      
      </Container> 
    </Navbar>



</>
  )
}

export default Navbar1