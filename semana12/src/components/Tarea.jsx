const Tarea = ({id, descripcion, fecha}) => {

  const fecha_f = new Date(fecha).toLocaleDateString();
  return (
    <li className="tarea">
        <button className="change">
            <i className="fa-solid fa-circle-check"></i>
        </button>
        <div className="descripcion">
            <p className="nombre"> { descripcion }</p>
            <p className="timestamp">{ fecha_f}</p>
        </div>
    </li>
  )
}

export default Tarea