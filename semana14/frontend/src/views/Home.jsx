import { useState, useEffect, useContext } from 'react'

import Recetas from '../components/Recetas'
import Receta from '../components/Receta'
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
        if( json.msg != 'Ok'){
          setReceta( []);
        } else {
          setRecetas( json.data )

        }
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
        const detalle = json.data.detalle;

        const nueva = { _id, detalle, fecha };
  
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
        
        <form onSubmit={manejadorSubmit } className='formReceta' >
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
            <textarea 
              onChange={ onChange }
              rows={3}
              name="detalle"></textarea>
          <button type="submit"> Crear</button>
        </form>
        <Recetas>
          {
            recetas.map( item => <Receta 
                            key={item._id} 
                            creador={item.usuario.nombre} 
                            nombre={item.nombre}
                            descripcion={item.detalle} 
                            tiempo={item.tiempo} 
                            
                            /> )
          }
        </Recetas>
      </main>
    )
}

export default Home