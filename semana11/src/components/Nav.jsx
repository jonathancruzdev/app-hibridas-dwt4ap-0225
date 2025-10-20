const Nav = ( {usuario}) => {

    const logout = (n) => {
        confirm('¿Finalizar Sesión? ' + 1);
    }
  return (
    <nav>
        <h1> To-Do APP </h1>
        <div className="user-info">
            <p> { usuario }</p>
            <div className="user-image"></div>
            <button onClick={ () => logout(1) } type="button">Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default Nav