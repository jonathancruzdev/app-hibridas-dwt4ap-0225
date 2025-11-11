const Receta = ({id, nombre, descripcion, tiempo, creador}) => {

  
  return (
    <li className="tarea">
        <button className="change">
            <i className="fa-solid fa-circle-check"></i>
        </button>
        <div className="descripcion">
            <p className="nombre"> <strong>{ nombre }: </strong> | { descripcion } <strong>{ creador }</strong> </p>
            <p className="timestamp">{ tiempo}</p>
        </div>
    </li>
  )
}

export default Receta