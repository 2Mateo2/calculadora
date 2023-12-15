import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const limpiarInput = () => {
    setInput('');
  };

  const validarOperador = (input) => {
    const mensaje = 'Coloque un valor numerico para hacer la operacion matematica'
    const long = input[input.length-1]; 

    if(long==='-'){
      alert(mensaje);
      return false
    } else if(long==='+'){
      alert(mensaje);
      return false
    } else if(long==='*'){
      alert(mensaje);
      return false
    } else if(long==='/'){
      alert(mensaje);
      return false
    } else if(long==='.'){
      alert('Punto mal colocado');
      return false
    } else if(input[0]==='.'){
      alert('Punto mal colocado');
      return false
    } else {
      return true
    }
  };

  const validarOperacion = (input) => {

    if (validarExpresion(input)) {
      const contenerCaracter = new Set(['+', '-', '*', '/']);
      const inputString = input.toString(); // Convierte input a cadena
      return  [...inputString].some(char => contenerCaracter.has(char));
    } else {
      alert('Expresión incorrecta: Por favor verifique los operadores.');
    }
  };

  const validarExpresion = (input) => {
    const operadores = ['+', '-', '*', '/'];
    const inputString = input.toString();
    const caracteres = [...inputString];
  
    for (let i = 0; i < caracteres.length - 1; i++) {
      const actual = caracteres[i];
      const siguiente = caracteres[i + 1];
  
      if (operadores.includes(actual) && operadores.includes(siguiente)) {
        return false;
      }
    }
    return true;
  }

  const calcularResultado = () => {

    if (input) {
      
      if (validarOperador(input)===true) {
        if (validarOperacion(input)===true) {
          setInput(evaluate(input));
        } else {
          alert('No esta realizando ninguna operacion');
        } 
      } 

    } else {
      alert("Por favor ingrese algun valor");
    }
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear limpiar={limpiarInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
