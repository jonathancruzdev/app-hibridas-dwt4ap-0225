import { useState, useEffect, useContext } from 'react'

import Tareas from '../components/Tareas'
import Tarea from '../components/Tarea'
import Loading from '../components/Loading'
import { AuthContext } from "../context/AuthContext";
const Home = () => {

    const endPoint = 'http://localhost:3000/api/recetas'; 
    const { token } = useContext( AuthContext );

    console.log( {token} )
    useEffect( () => {
      const option = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      fetch(endPoint, option ).then( resp =>  resp.json() )
      .then( json => {
        console.log(json);
       // setTareas( json.data )
      }).catch( error => {
        console.error(error);
        alert('Error del servidor')
      }).finally( () => {
        setLoad( false)
      })
  
    }, [])
  
    const [ tarea, setTarea ] = useState('');
    const [ tareas, setTareas ] = useState([]);
    const [ load, setLoad] = useState( true );
    const manejadorForm = ( event ) => {
      setTarea( event.target.value);
    }
    const manejadorSubmit = ( event) => {
      event.preventDefault();
      const descripcion = tarea;
      setLoad( true);
    // Fetch a la API del tipo POST
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ descripcion})
      }
      fetch(endPoint, config).then( resp =>  resp.json() )
      .then( json => {
        console.log(json);
        const _id = json.data._id;
        const fecha = json.data.fecha;
        const nueva = { _id, descripcion, fecha };
  
        setTareas( [...tareas, nueva]  );
        setTarea('');
  
      }).catch( error => {
        console.error(error);
        alert('Error del servidor al Guardar la tarea')
      }).finally( () => {
        setLoad( false );
      })
  
    }

    return (
        <main className='container'>
        { load ? <Loading /> : <></> }
        
        <form onSubmit={manejadorSubmit } >
          <input 
            onChange={ e => setTarea( e.target.value) }
            value={tarea} 
            type="text" 
            name="nueva" 
            placeholder="Nueva tarea"
            required 
            />
          <button type="submit"> Crear</button>
        </form>
        <Tareas>
          {
            tareas.map( item => <Tarea key={item._id} descripcion={item.descripcion} fecha={item.fecha} /> )
          }
        </Tareas>
      </main>
    )
}

export default Home