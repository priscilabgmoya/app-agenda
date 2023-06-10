import React from "react";
import '../css/Tarea.css';
import { AiFillDelete,AiOutlineCheck } from "react-icons/ai";
function Tarea({id , texto, completada , completarTarea, eliminarTarea }){
    return (
        <div className= {completada ?  "tarea-contenedor completada" : "tarea-contenedor" }>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-iconos">
              <button className="tarea-boton-completar"
            onClick={() => {completarTarea(id)}}
            > <AiOutlineCheck className="tarea-icono"/></button>
                <button className="tarea-boton-eliminar"
            onClick={() => {eliminarTarea(id)}}
            >  <AiFillDelete className="tarea-icono" /> </button>
            </div>
        </div>
    ); 
}
export default Tarea; 
