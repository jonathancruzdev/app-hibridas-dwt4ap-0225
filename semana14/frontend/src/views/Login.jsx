import { useState, useContext } from "react"

import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
const Login = () => {
    const navigate = useNavigate();

    const [ user, setUser ] = useState({ email: '', password: ''});
    const { login } = useContext( AuthContext );

    const onChange = ( event ) =>{
        const { name, value} = event.target;
        setUser( { ...user, [name]: value});
    }

    const onSubmit = async (event ) =>{
        event.preventDefault();
        const endPoint = 'http://localhost:3000/api/usuarios/auth';
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user.email, clave: user.password})
        };
        const resp = await fetch(endPoint, option);
        console.log(resp);
        const data = await resp.json();
        console.log( data );
        if( !data.data ){
            alert('Credenciales Invalidas');
            return
        } 
        const jwt = data.data;
        login(user, jwt)
        navigate('/')
    }
    return (
        <main className='container'>
            <h1> Login</h1>
            <form onSubmit={ onSubmit } className="login">
                <label htmlFor="email">Email</label>
                <input value={user.email} onChange={ onChange }  type="email" id="email" name="email"  />

                <label htmlFor="password">Contraseña</label>
                <input value={user.password} onChange={ onChange } type="password" id='password' name="password" />

                <button type="submit">Ingresar</button>

            </form>
            <NavLink to='/register' className="btn"> Registrarme</NavLink>
        </main>
    )
}

export default Login