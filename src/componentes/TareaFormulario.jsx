import React, {useState} from "react";
import '../css/TareaFormulario.css'; 
import {v4 as uuidv4} from 'uuid'; 
function TareaFormulario(props){
    const [input, setInput] = useState(''); 
    const manejarCambio = (event) =>{
      setInput(event.target.value);
    }
    const manejarEnvio = (event) =>{
        event.preventDefault(); 
        const tareaNueva = {
            id: uuidv4(),
            texto: input, 
            completada: false
        }
        props.onSubmit(tareaNueva);
        event.target.reset(); 
    } ; 
    return(
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escriba Una Tarea..."
            name="texto"
            required
            maxLength={2000}
            minLength={1}
            onChange={manejarCambio}
            />
            <button
            className="tarea-boton"
            > Agregar Tarea </button>
        </form>
    );
}
export default TareaFormulario; 