/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const ProveedorAuth = ({children}) => {
    const [usuarioActual, setUsuarioActual] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);

                setUsuarioActual({ ...decodedToken, token });
            } catch (error) {
                console.error('Error decodificando el token:', error);

            }
        }
    }, []);

    const iniciarSesion = async (token) => {
        sessionStorage.setItem('token', token);
        try {
            const decodedToken = jwtDecode(token);
            setUsuarioActual({ ...decodedToken, token });
        } catch (error) {
            console.error('Error decodificando el token:', error);
        }
    };

    const cerrarSesion = async () => {
        sessionStorage.removeItem('token');
        setUsuarioActual(null);
    };

    const valor = {
        usuarioActual,
        iniciarSesion,
        cerrarSesion,
    };

    return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
};