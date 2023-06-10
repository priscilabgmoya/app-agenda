import React from "react";
import freeCodeLogo from '../assets/freecodecamp-logo.png';
import '../css/Logo.css'; 

function Imagen(){
    return(
        <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={freeCodeLogo}
          alt='logo de freeCodeCamp' />
      </div>
    );
}
export default Imagen; 