import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import SInfo from 'react-native-sensitive-info'; // Importa react-native-sensitive-info

const TOKEN_KEY = 'token-jwt';
export const API_URL = 'http://192.168.0.106:8000/api/v1'; //cambiar a url de la api
const AuthContext = createContext({});

// Valores predeterminados para desarrollo
const DUMMY_USER = "admin";
const DUMMY_PASS = "admin";
const DUMMY_TOKEN = "dummy-token";

export const useAuth = () => {
    return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        authenticated: false
    });

    useEffect(() => {
        const loadToken = async () => {
            // Cambia el método de obtención del token
            const token = await SInfo.getItem(TOKEN_KEY, {});
            console.log('stored:', token);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true
                });
            }
        };
        loadToken();
    }, []);

    const register = async (email, password) => {
        try {
           return await axios.post(`${API_URL}/register`, { email, password });    
        } catch (e) {
            return { error: true, msg: e.response?.data?.msg || "Error en inicio de sesión" };
         };
        
    };

    const login = async (username, password) => {
    
            const url = `${API_URL}/user/login/`
            const res = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "username":username,
                    "password":password
                })

            })
            const response = await res.json()
            if(response.token){
                setAuthState({
                    token: response.token,
                    authenticated: true
                });
            } 
            // fetch(`${API_URL}/user/login/`,{
                
            //     method:'POST',
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body:JSON.stringify({"username":username,"password":password})
            // })
            // .then(res=>res.json())
            // .then(res=>console.log(res))
            // .catch(error=>console.log(error))
            // const result = await axios.post(ur, { username, password });
            // console.log("login result:", result);
        }
    


    const logout = async () => {
        // Cambia la manera de eliminar el token almacenado
        await SInfo.deleteItem(TOKEN_KEY, {});
        axios.defaults.headers.common['Authorization'] = '';

        setAuthState({
            token: null,
            authenticated: false
        });
    };
    
    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState: authState,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
