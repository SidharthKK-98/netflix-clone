import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
         <Navbar expand="lg" className="HeadNavbar bg-body-tertiary bg-light bg-opacity-10" >
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#home" ><img src="src\assets\assets\asset 0.png" alt="" style={{width:'200px',height:'100px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="buttons  ">
                <button className='btn  me-2 border  text-light ps-3 pe-3'><img src="src\assets\assets\asset 15.svg" alt="" className='' />English <img src="src\assets\assets\asset 16.svg" alt="" /></button>
                <button className='btn btn-danger fw-bold' >Sign In</button>
        </div>
        
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
