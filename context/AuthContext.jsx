import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import SInfo from 'react-native-sensitive-info'; // Importa react-native-sensitive-info

const TOKEN_KEY = 'token-jwt';
export const API_URL = 'http://192.168.1.1:8081/'; //cambiar a url de la api
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

    const login = async (email, password) => {
        try {

            console.log(`Attempting to login with email: ${email} and password: ${password}`);

            if (email === DUMMY_USER && password === DUMMY_PASS) {
                console.log("Logging in as admin...");

                setAuthState({
                    token: DUMMY_TOKEN,
                    authenticated: true
                });

                  await SInfo.setItem(TOKEN_KEY, DUMMY_TOKEN, {});
                  return { data: { token: DUMMY_TOKEN } };
                } else {
                  // Si las credenciales no son correctas, retorna un error
                  return { error: true, msg: "Credenciales incorrectas" };
                }
              } catch (e) {
                return { error: true, msg: e.message || "Error desconocido" };
              }
            };
            
            //const result = await axios.post(`${API_URL}/auth`, { username, password });
            //console.log("login result:", result);
    
            //setAuthState({
              //  token: result.data.token,
                //authenticated: true
            //});

            //axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
            // Cambia la manera de almacenar el token
            //await SInfo.setItem(TOKEN_KEY, result.data.token, {});

            //return result;

        //} catch (e) {
          //  return { error: true, msg: e.response?.data?.msg || "Error en inicio de sesión" };
         //};
    //};

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
