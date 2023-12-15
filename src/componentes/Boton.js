import '../styles/Boton.css'

function Boton(props){

  const esOperador = valor => {
    //isNaN permite saber si un valor es un numero
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
};

export default Boton;