import React from 'react';
import { Button, Collapse, ListGroup, Card, Nav, Navbar, Row, Container} from "react-bootstrap";
import { useState } from 'react';


const Footer = () => {

    const [open, setOpen] = useState(false);

    return ( 
        <div className='text-center'>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{width: '10%'}}
        >
          Guia
        </Button>
        <div style={{minHeight: '150px'}}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <div className="d-flex justify-content-center pt-2 ">
              <Card body style={{width: '50%'}}>
              <ListGroup variant='flush'>
              <ListGroup.Item><a href='#ajsdhf'>Que es JavaScript</a></ListGroup.Item>
              <ListGroup.Item><a>Historia de JavaScript</a></ListGroup.Item>
              <ListGroup.Item><a>Sintaxis</a></ListGroup.Item>
            </ListGroup>
            

              </Card>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
     );
}
 
export default Footer;
