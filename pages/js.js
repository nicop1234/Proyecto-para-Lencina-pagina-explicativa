import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Button, Nav, Navbar, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className='hero  d-flex align-items-center col-12 '>
        <Container>
          <Row className='d-flex justify-content-center  text-center'>
            <div className='d-flex justify-content-center '>
              <h1 className=' text-white'>JavaScript</h1>
            </div>
          </Row>
          <Row >
            <Navbar className='d-flex justify-content-center '>
                <Nav.Link>que es js</Nav.Link>
                <Nav.Link>historia de js</Nav.Link>
                <Nav.Link>funciones principales</Nav.Link>
                <Nav.Link>utilidades</Nav.Link>
            </Navbar>

          </Row>
        </Container>
      </div>
    </>
  );
}
