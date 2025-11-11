import { useState, useEffect, createContext } from "react";
import { jwtDecode } from "jwt-decode"
const AuthContext = createContext();

const AuthProvider = ( { children }) => {
    
    const [ user, setUser ] = useState( null );
    const [ token, setToken] = useState(  localStorage.getItem('jwt') );

    useEffect( () => {
        if( token){
            try {
                const decoded = jwtDecode( token );
                console.log( decoded );
                setUser( decoded )
            } catch (error) {
                console.error('Token Invalido', error);
                setUser(null);
            }
        } else {
            setUser(null);
        }
    }, [ token ] );


    const login = ( user, token) => {
        console.log('Soy el login del contexto');
        setUser( user );
        setToken( token );
        localStorage.setItem('jwt', token);
    }

    const logout = () => {
        setUser( null );
        setToken( null );
        localStorage.removeItem('jwt');
    }
    return (
        <AuthContext.Provider value={ { user, token, login, logout}} >
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }