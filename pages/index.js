/** @format */

import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import { logos } from "../profile";
import Card from "react-bootstrap/Card";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ children }) {
  return (
    <div style={{ height: "100vh" }}>
      <Head>
        <title>Landing JavaScript</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>


        <div>
          <h1 className=' text-center fuente mt-1 '> ¿Que desea consutar? </h1>
        </div>
    
          <Container className='d-flex justify-content-center cards mb-1'>
            <Row className='pb-2 ms-5'>
            {logos.map(({ alt, url, href, text, id}, i) => (
             <>
              <div className='sombra navs col-md-3 col-10 my-2 ancho' id={id}>
              <Row>
                <div>
                  <h2 className='text-center fuente'>{text}</h2>
                </div>
              </Row>
                <Row className='d-flex justify-content-center'>
                  <Nav.Link className='d-flex'>
                    <Link href={href} >
                      <div className='imagen'>
                      <Image
                        alt={alt}
                        src={url}
                        width={1200}
                        height={1200}
                        layout='intrinsic'
                        key={i}
                      />
                      </div>
                    </Link>
                  </Nav.Link>
                </Row>
                
                </div>
                <div className='col-1'></div>                
                </>
              
            ))}

            </Row>
          </Container>
        
      </Layout>
    </div>
  );
}
