import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
const Nav = ( {usuario}) => {
    const navigate = useNavigate();
    const logout = () => {
      if( confirm('¿Finalizar Sesión? ') ){
        navigate('/login');
      }
    }
  return (
    <nav>
        <h1> To-Do APP </h1>
        
        <div className="user-info">
            <p> { usuario }</p>
            <div className="user-image"></div>
            <button onClick={ () => logout() } type="button">Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default Nav