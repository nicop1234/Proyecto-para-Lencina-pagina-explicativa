import React from 'react'
import {Navbar, Nav, Card, Container, NavDropdown } from "react-bootstrap";


const Layout = ({children}) => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='pb-2' sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' >
            <h1 className='text-white fuente'>Div<span className='text-info'>Geek</span></h1>
          </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" className='text-white fuente'>Inicio</Nav.Link>
            <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' className='text-white fuente'>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {children}


    <div className='text-white d-flex justify-content-center bg-dark' style={{height: '80px'}}>
        <div>
          <h4 className='text-center fuente align-items-center pt-1'>Hecho por Nico</h4>
          <p ><span className='text-center fuente'> © </span> DivGeeks Industries/ From SFFN</p>
        </div>
      </div>
    </>
  )
}

export default Layout


