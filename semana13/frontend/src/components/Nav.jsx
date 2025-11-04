import { useNavigate, NavLink } from "react-router-dom";
const Nav = ( {usuario}) => {
    const navigate = useNavigate();
    const logout = () => {
      if( confirm('¿Finalizar Sesión? ') ){
        navigate('/login');
      }
    }
  return (
    <nav>
        <h1> 🐔 Recetas APP </h1>
        <ul className="menu">
          <li>
            <NavLink to='/'> Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Registro</NavLink>
          </li>
        </ul>
        <div className="user-info">
            <p> { usuario }</p>
            <div className="user-image"></div>
            <button onClick={ () => logout() } type="button">Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default Nav