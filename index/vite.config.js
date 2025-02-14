import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        federation({
            name:'index-app',
            filename: 'remoteEntry.js',

            exposes: {
                "./IndexApp": "./src/app.jsx"
            },

            shared:['react', 'react-dom'],
        })
    ],

    build:{
        modulePreload: false,
        target: 'esnext',
        minify:false,
        cssCodeSplit: false,
    },

    preview: {
        port: 4183, // Cambia este valor al puerto que desees
    },
})
