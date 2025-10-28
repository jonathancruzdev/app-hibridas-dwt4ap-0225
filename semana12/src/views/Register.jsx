import { NavLink } from "react-router-dom"
import { use, useRef } from "react";
const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        const endPoint = 'http://10.23.22.22:3000/api/users';
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        const resp = await fetch(endPoint, option);
        console.log(resp);
        const data = await resp.json();
        console.log( data );
    }
    return (
        <main className='container'>
            <form onSubmit={ onSubmit } className="register">
                <div className="form-header">
                    <h1> Register</h1>
                </div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" ref={ nameRef }/>

                <label htmlFor="email">Email</label>
                <input type="email"  name="email" ref={ emailRef } />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" ref={ passwordRef }/>

                <button type="submit">Crear Cuenta</button>
            </form>

            <div className="ingresarA">
                <NavLink to='/'> ¿Ya tenes una cuenta? Ingresa desde Aquí</NavLink>
            </div>
        </main>
    )
}

export default Register