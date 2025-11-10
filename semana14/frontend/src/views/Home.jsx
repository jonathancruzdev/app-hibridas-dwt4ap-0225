import { useState, useEffect, useContext } from 'react'

import Tareas from '../components/Tareas'
import Tarea from '../components/Tarea'
import Loading from '../components/Loading'
import { AuthContext } from "../context/AuthContext";
const Home = () => {

    const endPoint = 'http://localhost:3000/api/recetas'; 
    const { token } = useContext( AuthContext );

   
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
        setRecetas( json.data )
      }).catch( error => {
        console.error(error);
        alert('Error del servidor')
      }).finally( () => {
        setLoad( false)
      })
  
    }, [])
  
    const [ receta, setReceta ] = useState({nombre: '', tiempo: '', detalle: ''});
    const [ recetas, setRecetas ] = useState([]);
    const [ load, setLoad] = useState( true );

    const onChange = ( event ) =>{
      const { name, value} = event.target;
      setReceta( ( r) => ({ ...r, [name]: value}) );
      console.log(receta)
    }
    const manejadorSubmit = ( event) => {
      event.preventDefault();
   
      setLoad( true);
    // Fetch a la API del tipo POST
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify( receta)
      }
      fetch(endPoint, config).then( resp =>  resp.json() )
      .then( json => {
        console.log(json);
        const _id = json.data._id;
        const fecha = json.data.fecha;
        const nueva = { _id, descripcion, fecha };
  
        setRecetas( [...recetas, nueva]  );
        setReceta({nombre: '', tiempo: '', detalle: '' });
  
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
            onChange={ onChange }
            value={receta.nombre} 
            type="text" 
            name="nombre" 
            placeholder="Nueva Receta"
            required 
            />
          <input 
            onChange={ onChange }
            value={receta.tiempo} 
            type="numbre" 
            name="tiempo" 
            placeholder=""
            required 
            />
          <button type="submit"> Crear</button>
        </form>
        <Tareas>
          {
            recetas.map( item => <Tarea key={item._id} creador={item.usuario.nombre} descripcion={item.nombre} tiempo={item.tiempo} /> )
          }
        </Tareas>
      </main>
    )
}

export default Home