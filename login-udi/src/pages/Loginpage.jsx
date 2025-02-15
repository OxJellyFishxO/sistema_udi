import React from 'react';
import axios from 'axios';

const API_URL = "http://148.204.161.28/api/login"; // Dirección de tu backend

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