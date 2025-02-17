import React, { useState } from 'react';
import { useAxios } from 'use-axios-client';

const API_URL = "https://cors-anywhere.herokuapp.com/http://148.204.161.28/api/login";

const LoginPage = () => {
    const [credentials] = useState({
        email: "usuario@example.com",
        password: "123456"
    });

    const { data, loading, error, refetch } = useAxios({
        url: API_URL,
        method: 'POST',
        data: credentials,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    });

    const handleLogin = () => {
        refetch();
        console.log("Respuesta del servidor:", data);

    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
            <button 
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Iniciar sesión
            </button>
            
            {data && (
                <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                    ¡Inicio de sesión exitoso!
                </div>
            )}
        </div>
    );
};

export default LoginPage;

import React from 'react';
import axios from 'axios';
const API_URL = "https://cors-anywhere.herokuapp.com/http://148.204.161.28/api/login"; // Dirección de tu backend
const LoginPage = () => {
    const handleLogin = async () => {
        try {
            const response = await axios.post(
                API_URL,
                {
                    email: "usuario@example.com",
                    password: "123456"
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );
            console.log("Respuesta del servidor:", response.data);
        } catch (error) {
            console.error("Error en la petición:", error.response?.data || error.message);
        }
    };
    return (
        <div>
            <h1>Iniciar sesión</h1>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};
export default LoginPage;