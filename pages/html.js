/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import Hero from "../components/Hero.js";
import Check from "../components/Check.js";
import StateLeidos from "../components/StateLeidos.js";
import { useState } from "react";
import Swal from "sweetalert";
import Layout from "../components/Layout.js";



export default function Home({
  apretado,
  id,
  hrn1,
  hrn2,
  hrn3,
  hrn4,
  hrn5,
  hrn6,
  hrn7,
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  page,
  cont,
}) {
  const [contador, setContador] = useState(0);

  const [apretadobtn, setApretadobtn] = useState(false);
  const [apretadobtn1, setApretadobtn1] = useState(false);
  const [apretadobtn2, setApretadobtn2] = useState(false);
  const [apretadobtn3, setApretadobtn3] = useState(false);
  const [apretadobtn4, setApretadobtn4] = useState(false);
  const [apretadobtn5, setApretadobtn5] = useState(false);
  const [apretadobtn6, setApretadobtn6] = useState(false);

  const cambiarClase = (apretado) => {
    apretado ? console.log("") : setApretadobtn((apretadobtn = true));
    setContador(contador + 1);
  };

  const cambiarClase1 = (apretado) => {
    apretado ? console.log("") : setApretadobtn1((apretadobtn1 = true));
    setContador(contador + 1);
  };

  const cambiarClase2 = (apretado) => {
    apretado ? console.log("") : setApretadobtn2((apretadobtn2 = true));
    setContador(contador + 1);
  };

  const cambiarClase3 = (apretado) => {
    apretado ? console.log("") : setApretadobtn3((apretadobtn3 = true));
    setContador(contador + 1);
  };

  const cambiarClase4 = (apretado) => {
    apretado ? console.log("") : setApretadobtn4((apretadobtn4 = true));
    setContador(contador + 1);
  };

  const cambiarClase5 = (apretado) => {
    apretado ? console.log("") : setApretadobtn5((apretadobtn5 = true));
    setContador(contador + 1);
  };


  const cambiarClase6 = (apretado) => {
    apretado ? console.log("") : setApretadobtn6((apretadobtn6 = true));
    setContador(contador + 1);
  };

  const contadoress = () => {
    setContador(contador = 0)
    setApretadobtn(apretadobtn =false)
    setApretadobtn1(apretadobtn1 =false)
    setApretadobtn2(apretadobtn2 =false)
    setApretadobtn3(apretadobtn3 =false)
    setApretadobtn4(apretadobtn4 =false)
    setApretadobtn5(apretadobtn5 =false)
    setApretadobtn6(apretadobtn6 =false)
 
  }

  if (contador == 7) {

    Swal({
      title: 'Felicitciones completaste html',
      icon: 'success'
    })
    contadoress()
}



  return (
    <>
      <Layout>
        <Hero
          page='Html'
          hrn1='#ques'
          hrn2='#sintaxis'
          hrn3='#etiquetas'
          hrn4='#atributos'
          hrn5='#listas'
          hrn6='#tablas'
          hrn7='#formularios'
          n1='Que es html'
          n2='Sintaxis'
          n3='Etiquetas'
          n4='Atributos'
          n5='Listas'
          n6='tablas'
          n7='Formularios'
        />
        <StateLeidos cont={contador} />
        <Container className='borders ' id='ques'>
          <div>
            <Row>
              <div  className='pb-2'>
                <h2 className='text-center pb-1 text-black'>¿Que es html?</h2>
              </div>
            </Row>

            <Row className='pb-3'>
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
                  Html, Lenguaje de Marcado de Hipertexto (HTML) es el código
                  que se utiliza para estructurar y desplegar una página web y
                  sus contenidos. Por ejemplo, sus contenidos podrían ser
                  párrafos, una lista con viñetas, o imágenes y tablas de datos.
                </p>
              </div>
            </Row>
            <Check
              evento={() => cambiarClase(apretado)}
              id='btn1'
              apretado={apretadobtn}
            />
          </div>
        </Container>
        <Container className='borders my-4'  id='sintaxis'>
          <div className='mb-1'>
            <Row>
              <div>
                <h2 className='text-center  pb-2 text-black'>Sintaxis</h2>
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
          <Check
            evento={() => cambiarClase1(apretado)}
            id='btn2'
            apretado={apretadobtn1}
          />
        </Container>
        <Container className='borders' id='etiquetas'>
          <div>
            <div>
              <h2  className='text-center text-black'>
                Etiquetas
              </h2>
            </div>
            <div>
              <h6 className='text-center'>
                Los elementode de encabezado implementan 6 niveles de encabezado
                del documento, {"h1"} es el mas importante y {"h6"} el menos
              </h6>
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
          </div>
          <Check
            evento={() => cambiarClase2(apretado)}
            id='btn3'
            apretado={apretadobtn2}
          />
        </Container>

        <Container className='borders my-4' id='atributos'>
          <div>
            <Row>
              <h2 className='text-center text-black'>
                Atributos
              </h2>
              <Row>
                <h6 className='text-center pb-1'>
                  Son valores adicionales que ajustan los elementos y su
                  comportamiento
                </h6>
              </Row>
              <Row>
                <div className='pb-4'>
                  <h5 className='text-center'>algunos ejemplos son:</h5>
                </div>
              </Row>
              <div className='text-center'>
                <ul>
                  <li>
                    Lang= ES : configuramos diciendo que el idioma va a ser
                    español
                  </li>
                  <li>HREF: especificar ruta del recurso</li>
                  <li>TARGET: configura como quremos ver el recurso</li>
                  <li>CLASS : da estilos a nuestra página.</li>
                  <li>
                    ID : idetificador unico que nos permite seleccionar un
                    elemento y asi hacer navegación a traves de anclas
                  </li>
                </ul>
              </div>
            </Row>
          </div>
          <Check
            evento={() => cambiarClase3(apretado)}
            id='btn4'
            apretado={apretadobtn3}
          />
        </Container>

        <Container className='borders' id='listas'>
          <Row>
            <h2  className='text-center text-black'>
              listas
            </h2>
          </Row>
          <Row>
            <p className='text-center pb-1'>
              UL: SE UTILIZAN CUANDO EL ORDEN DE LOS ELEMENTOS NO INFLUYE
            </p>
          </Row>
          <Row>
            <p className='text-center pb-1'>
              OL : SE UTILIZAN CUANDO EL ORDEN DE LOS ELEMENTOS ES IMPORTANTE
            </p>
          </Row>
          <Row>
            <p className='text-center pb-1 '>
              {" "}
              Dentro del ol o del ul tenes que poner li que ese seria cada
              elemento de la listE
            </p>
          </Row>
          <Check
            evento={() => cambiarClase4(apretado)}
            id='btn5'
            apretado={apretadobtn4}
          />
        </Container>
        <Container className='borders my-4' id='tablas'>
          <div>
          <Row>
            <h2 className='text-center text-black'>
              Tablas
            </h2>
            </Row>
          <Row>
          <div className='text-center'>
                <ul>
                  <li>
                  table: Etiqueta que encierra una tabla
                  </li>
                  <li>caption : establece el titulo de la tabla</li>
                  <li>thead: van las cabeceras y las celdas iran en vez de td con th</li>
                  <li>tbody : contenido de la tabla</li>
                  <li>
                  tfoot: pie de tabla
                  </li>
                  <li>
                  tr : etiqueta que construye una fila
                  </li>
                  <li>
                  td : etiqueta que construye una celda
                  </li>
                </ul>
              </div>
           
          </Row>
          <Check
            evento={() => cambiarClase5(apretado)}
            id='btn6'
            apretado={apretadobtn5}
          />
          </div>
        </Container>
        <Container className='borders mb-4' id='formularios'>
          <div>
            <Row>
              <h2  className='text-center text-black pb-2'> Formularios</h2>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> LABEL: SIRVE PARA ESCRIBIR EL NOMBRE DEL CAMPO DE RELLENAR</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> SELECT CREA UNA LISTA DE OPCIONES DONDE PODEMOS SELECCIONAR UNA O VARIAS OPCIONES</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> BUTTON : VISUALMENTE ES IGUAL, PERO EL FORMULARIO NO SE VA A ENVIAR</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> SUBMIT: SE UTILIZA PARA ENVIAR EL FORMULARIO</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> DATE: SE UTILIZA PARA INTRODUCIR UNA FECHA</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> DATETIME-LOCAL: FECHA Y HORA</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> TIME: SE UTILIZA PARA INTRODUCIR UNA HORA</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'>MONTH: SE UTILIZA PARA INTRODUCIR UN MES</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> WEEK: SE UTILIZA PARA INTRODUCIR EL NÚMERO DE SEMANA DEL AÑO</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> COLOR: SE UTILIZA PARA ESPECIFICAR UN COLOR</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'> NUMBER: SE UTILIZA PARA VALORES NUMÉRICOS</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'>RANGE: SE UTILIZA PARA ESTABLECER UN RANGO</p>
            </Row>
            <Row>
              <p id='atributos' className='text-center text-black'>RESET: SE UTILIZA PARA RESETEAR EL FORMULARIO</p>
            </Row>
          </div>
          <Check
            evento={() => cambiarClase6(apretado)}
            id='btn7'
            apretado={apretadobtn6}
          />
        </Container>
      </Layout>
    </>
  );
}
