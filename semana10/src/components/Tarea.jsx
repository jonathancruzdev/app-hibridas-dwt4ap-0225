const Tarea = ({id, descripcion, fecha}) => {

  return (
    <li className="tarea">
        <button className="change">
            <i className="fa-solid fa-circle-check"></i>
        </button>
        <div className="descripcion">
            <p className="nombre"> { descripcion }</p>
            <p className="timestamp">{ fecha }</p>
        </div>
    </li>
  )
}

export default Tarea