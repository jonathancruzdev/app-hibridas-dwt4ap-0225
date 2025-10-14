import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Tareas from './components/Tareas'
import Tarea from './components/Tarea'
function App() {
/*   // Breve repaso
  const persona = { nombre: 'Jonathan', apellido: 'Cruz'};
  const { nombre, apellido } = persona;

  const lenguajes = ['JavaScript', 'PHP', 'Python', () => { console.log('hola')}];
  const [cero, uno, dos, tres ] = lenguajes;
  //console.log(nombre, apellido);
  //console.log(uno, dos, tres); */
  const nombre = 'Jonathan';
  const endPoint = 'http://127.0.0.1:5000/api/tasks'; 

  useEffect( () => {

    fetch(endPoint).then( resp =>  resp.json() )
    .then( json => {
      console.log(json);
      setTareas( json.data )
    }).catch( error => {
      console.error(error);
      alert('Error del servidor')
    })

  }, [])

  const [ tarea, setTarea ] = useState('');
  const [ tareas, setTareas ] = useState([]);

  const manejadorForm = ( event ) => {
    setTarea( event.target.value);
  }
  const manejadorSubmit = ( event) => {
    event.preventDefault();
    const descripcion = tarea;
    const fecha =  new Date().toLocaleDateString();
    const id = tareas.length + 1;
    const nueva = {id, descripcion, fecha};
    console.log(nueva);
    // tareas.push( nueva ); No es correcto
    setTareas( [...tareas, nueva]  );
    console.table( tareas);
    // Fetch a la API del tipo POST
  }
  return (
    <>
      <Header>
        <Nav usuario={nombre}/>
      </Header>
      <main className='container'>
        <form onSubmit={manejadorSubmit } >
          <input 
            onChange={ e => setTarea( e.target.value) }
            value={tarea} 
            type="text" 
            name="nueva" 
            placeholder="Nueva tarea" 
            />
          <button type="submit"> Crear</button>
        </form>
        <Tareas>
          {
            tareas.map( item => <Tarea key={item.id} descripcion={item.descripcion} fecha={item.fecha} /> )
          }
        </Tareas>
      </main>
      <Footer descripcion="DV | To_Do APP" />
    </>
  )
}

export default App
