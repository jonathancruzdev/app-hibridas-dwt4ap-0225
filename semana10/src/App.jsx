import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Tareas from './components/Tareas'
import Tarea from './components/Tarea'
function App() {
  // Breve repaso
  const persona = { nombre: 'Jonathan', apellido: 'Cruz'};
  const { nombre, apellido } = persona;

  const lenguajes = ['JavaScript', 'PHP', 'Python', () => { console.log('hola')}];
  const [cero, uno, dos, tres ] = lenguajes;
  //console.log(nombre, apellido);
  //console.log(uno, dos, tres);

 
  const nombre2 = 'Jonathan';
  const lista = [
    {id:1, descripcion: 'Pasear el Perro', fecha: '14-10-2025'},
    {id:2, descripcion: 'Estudiar NodeJS', fecha: '18-10-2025'},
    {id:3, descripcion: 'Ir al Cine', fecha: '18-10-2025'}
  ]
  const [ tarea, setTarea ] = useState('');
  const [ tareas, setTareas ] = useState(lista);

  const manejadorForm = ( event ) => {
    setTarea( event.target.value);
  }
  const manejadorSubmit = ( event) => {
    event.preventDefault();
    const descripcion = tarea;
    const fecha =  new Date().toLocaleDateString();
    const id = lista.length + 1;

    const nuevoArray = tareas;
    nuevoArray.push({ id, descripcion, fecha } )

    setTareas( nuevoArray )

    console.table(tareas);
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
