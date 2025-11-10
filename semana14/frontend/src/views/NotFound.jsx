import { NavLink, useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate();

    const irRegistro = () =>{
        if( confirm('¿ir al Registrarse?') ) {
            navigate('/register');
        }
    }

    return (
    <main className="container">
        <h1> Error 404 | Not Found 😒</h1>
        <br />

        <NavLink to="/" className="btn" > Ir al Inicio </NavLink>

        <button onClick={ () => irRegistro() } className="btn" type="button"> Registrarme</button>
        
    </main>
    )
}

export default NotFound