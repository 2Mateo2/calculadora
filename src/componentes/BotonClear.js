import React from 'react'
import '../styles/BotonClear.css'

const BotonClear = (props) => (
  <button className='boton-clear'
  onClick={() => props.limpiar()}>
    Clear
  </button>
);

export default BotonClear;