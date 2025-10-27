import { NavLink } from "react-router-dom"

const Login = () => {

    return (
        <main className='container'>
            <h1> Login</h1>
            <br />
            <NavLink to='/register' className="btn"> Registrarme</NavLink>
        </main>
    )
}

export default Login