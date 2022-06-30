/** @format */

import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import Hero from "../components/Hero.js";
import Check from "../components/Check.js";
import StateLeidos from "../components/StateLeidos.js";
import { useState } from "react";
import Swal from "sweetalert";

export default function Home({ id, hrn1, hrn2, hrn3, hrn4, hrn5, hrn6, hrn7, n1, n2, n3, n4, n5, n6, n7, page, cont, claseDelBoton }) {
  const [contador, setContador] = useState(0);

  const cambiarClase = (claseDelBoton) => {
    setContador(contador + 1)
  }

  if (contador == 5){

   
  Swal(
    'The Internet?',
    'That thing is still around?',
  'question'
)
  }



  return (
    <>
      <Hero
        page='Html'
        hrn1='#ques'
        hrn2='#sintaxis'
        hrn3='#etiquetas'
        hrn4='#atributos'
        hrn5='#listas'
        hrn6='#etiquetas'
        hrn7='#formularios'
        n1='Que es html'
        n2='Sintaxis'
        n3='Etiquetas'
        n4='Atributos'
        n5='Listas'
        n6='Etiquetas'
        n7='Formularios'
      />
      <StateLeidos cont={contador} />
      <Container>
        <div>
          <Row>
            <div className='pb-2'>
              <h2 className='text-center pt-5 pb-1 text-black'>
                ¿Que es html?
              </h2>
            </div>
          </Row>

          <Row id='ques' className='pb-3'>
            <div className='text-center img d-flex justify-content-center'>
              <Image
                src='/img/img-html-1.jpg'
                height={560}
                width={400}
                layout='intrinsic'
              />
            </div>
          </Row>
          <Row>
            <div>
              <p className='text-center'>
                Html, Lenguaje de Marcado de Hipertexto (HTML) es el código que
                se utiliza para estructurar y desplegar una página web y sus
                contenidos. Por ejemplo, sus contenidos podrían ser párrafos,
                una lista con viñetas, o imágenes y tablas de datos.
              </p>
            </div>
          </Row>
          <Check evento={() => cambiarClase()} claseDelBoton = 'boton' id = 'btn1'/>
        </div>
      </Container>
      <Container>
        <div id='sintaxis' className="mb-1">
          <Row>
            <div className='pb-2'>
              <h2 className='text-center pt-5 pb-2 text-black'>Sintaxis</h2>
            </div>
          </Row>
          <Row>
            <div>
              <ul>
                <li>1 Creamos un nuevo archivo y lo llamamos 'index.html'</li>
                <li>
                  2. Como regla general cuando abrimos una etiqueta, hay que
                  cerrarla de la siguiente forma {"<div> </div>"}.
                </li>
                <li className='sinPuntito'>
                  {"<etiqueta> contenido de la etiqueta </etiqueta>"}
                </li>
                <li>
                  3. Para crear una estructura base de HTML en VSCode podemos
                  usar el siguiente atajo, siempre y cuando hayamos creado el
                  archivo, con su respectiva extensión .html:
                </li>
                <li className='sinPuntito'>
                  ! enter y se creara esta estructura:
                </li>
              </ul>
            </div>
          </Row>
        </div>
        <Check evento={() => cambiarClase()} claseDelBoton = 'boton' id = 'btn2'/>
      </Container>
      <Container id='etiquetas'>
        <div>
          <h2 className='text-center text-black'>Etiquetas</h2>
        </div>
        <div>
          <h6 className='text-center'>Los elementode de encabezado implementan 6 niveles de encabezado del documento, {'h1'} es el mas importante y {'h6'} el menos</h6>
        </div>
        <Row>
          <div className='text-center'>
          <Image
            src='/img/hs.PNG'
            height={529}
            width={486}
            layout='intrinsic'
              />
          </div>
        </Row>
      </Container>
    </>
  );
}
