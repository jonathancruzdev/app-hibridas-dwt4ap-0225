import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Nav = ( ) => {
  const { user, logout } = useContext( AuthContext);

    const navigate = useNavigate();
    
    const handleLogout = () => {
      if( confirm('¿Finalizar Sesión? ') ){
        logout()
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
          {
            !user ? (
              <>
                <li>
                  <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                  <NavLink to='/register'>Registro</NavLink>
                </li>
              </>
            ) : <>
            
            </>
          }

        </ul>
        <div className="user-info">
            <p> { user?.nombre }</p>
            <div className="user-image"></div>
            <button onClick={ () => handleLogout() } type="button">Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default Nav