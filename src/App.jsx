import ListaDeTareas from './componentes/ListaDeTareas';
import Imagen from './componentes/Logo';
import './css/App.css';

function App() {
  return (
    <div className="App-tareas">
      <Imagen />
      <div className='tareas-listas-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
