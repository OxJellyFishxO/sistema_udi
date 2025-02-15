import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta para redirigir las solicitudes de login a la API externa
app.post('/api/login', async (req, res) => {
    try {
        const response = await axios.post('http://148.204.161.28/api/login', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en la solicitud' });
    }
    });

    // Iniciar el servidor
    app.listen(PORT, () => {
    console.log(`Servidor intermedio corriendo en http://localhost:${PORT}`);
});