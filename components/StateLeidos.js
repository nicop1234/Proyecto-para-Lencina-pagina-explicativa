/** @format */

import React from "react";
import useState from "react";

const StateLeidos = ({cont}) => {
  return (
    <div className='d-flex justify-content-center ms-2'>
      <div>
        <h3 className="fuente"> Numero de paginas Leidas: </h3>
      </div>
      <div>
        <h3 className='text-primary fuente'>{cont}</h3>
      </div>
    </div>
  );
};

export default StateLeidos;
