import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//Paquete de Tailwind
import tailwindcss from '@tailwindcss/vite'

//Paquete de vite-plugin-federation
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        //Servir componente Header
        federation({
            name: 'header-app',
            filename: 'remoteEntry.js',
            
            //Modulos a exponer para consumir
            exposes: {
                "./HeaderApp": "./src/App.jsx"  
            },

            //Dependencias compartidas entre aplicaciones
            shared: ["react", "react-dom"],
        }),
    ],

    build: {
        // Configuracion de la compilación de producción
        // Deshabilita la precarga automática de módulos, como y cuando se carga los modulos
        modulePreload: false,
        // Define el nivel de compatibilidad de JavaScript, mas reciente
        target: "esnext",
        // Deshabilita la minificación del código, codigo optimizado
        minify:false,
        // Deshabilita la división del código CSS, un archivo css unico styles.css
        cssCodeSplit: false,
    },
})
