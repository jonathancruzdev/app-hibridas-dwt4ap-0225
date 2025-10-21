import { NavLink } from "react-router-dom"
const Register = () => {
    
    return (
        <main className='container'>
            <form className="register">
                <div className="form-header">
                    <h1> Register</h1>
                </div>
                <label htmlFor="name">Nombre</label>
                <input type="text"/>

                <label htmlFor="email">Email</label>
                <input type="email"  />

                <label htmlFor="password">Contraseña</label>
                <input type="password" />

                <button type="submit">Crear Cuenta</button>
            </form>

            <div className="ingresarA">
                <NavLink to='/'> ¿Ya tenes una cuenta? Ingresa desde Aquí</NavLink>
            </div>
        </main>
    )
}

export default Register