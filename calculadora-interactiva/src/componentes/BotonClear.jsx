import React from 'react';
import '../hojas-de-estilo/BotonClear.css'

export const BotonClear = (props) => (
  <div className='boton-clear'>
    { props.children }
  </div>
);