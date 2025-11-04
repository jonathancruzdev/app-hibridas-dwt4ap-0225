import { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ( { children }) => {
    
    const [ user, setUser ] = useState( null );
    const [ token, setToken] = useState(  localStorage.getItem('jwt') );

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