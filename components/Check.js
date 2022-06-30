/** @format */

import React from "react";




const Check = ({ evento, claseDelBoton, id}) => {

  return (
    <div className='d-flex justify-content-end div-content'>
      <button
        id={id}
        className={claseDelBoton}
        type="button"
        variant='dark'
        onClick={evento}>
        Leido
      </button>
 
    </div>
  );
};

export default Check;
