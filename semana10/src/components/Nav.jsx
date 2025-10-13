const Nav = ( {usuario}) => {

    const logout = () => {
        confirm('¿Finalizar Sesión?');
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