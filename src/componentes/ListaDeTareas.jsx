import React , {useState} from "react";
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea'; 
import '../css/ListaDeTareas.css'; 
function ListaDeTareas(){
    const [tareas , setTareas] = useState(localStorage.getItem("listaTarea") ? JSON.parse(localStorage.getItem("listaTarea")) :  []); 
    const agregarTarea = (tarea) =>{
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim(); 
            const tareasActualizadas = [tarea, ...tareas]; 
            setTareas(tareasActualizadas); 
            localStorage.setItem("listaTarea", JSON.stringify(tareasActualizadas)); 
        }
    }
    const eliminarTarea = (id ) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); 
        setTareas(tareasActualizadas); 
        localStorage.setItem("listaTarea", JSON.stringify(tareasActualizadas)); 
    }
    const completarTarea = (id) =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
               tarea.completada = !tarea.completada; 
            }
            return tarea; 
        }); 
        setTareas(tareasActualizadas); 
        localStorage.setItem("listaTarea", JSON.stringify(tareasActualizadas)); 
    }; 
    return(
        <>
        <TareaFormulario 
        onSubmit = {agregarTarea}
        />
        <div className='tareas-listas-contenedor'>
           {
            tareas.map((tarea)=>{
                return <Tarea  
                key = {tarea.id}
                id = {tarea.id}
                texto = {tarea.texto}
                completada = {tarea.completada}
                completarTarea = {completarTarea}
                eliminarTarea={eliminarTarea}
                />
            })
           }
      </div>
        </>
    ); 
}
export default ListaDeTareas; 