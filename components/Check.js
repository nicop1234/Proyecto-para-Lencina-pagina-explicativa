/** @format */

import React from "react";
import { Button } from "react-bootstrap";

const Check = ({ evento, id, apretado }) => {
  return (
    <div className='btn btn d-flex justify-content-end div-content'>
      <Button id={id} variant='dark' onClick={evento} disabled={apretado}>
        Leido
      </Button>
    </div>
  )
};

export default Check;
