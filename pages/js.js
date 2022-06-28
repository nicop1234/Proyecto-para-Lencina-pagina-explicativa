import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Collapse1 from "../components/Collapse1";
import { Button, Nav, Navbar, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className='hero  d-flex align-items-center col-12 '>
        <Container>
          <Row className='d-flex justify-content-center text-center '>
            <div className='d-flex justify-content-center '>
              <h1 className=' text-white'>JavaScript</h1>
            </div>
          </Row>

          <Collapse1/>

        </Container>
      </div>
    </>
  );
}
