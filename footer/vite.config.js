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
            name:'footer-app',
            filename: 'remoteEntry.js',
            exposes: {
                './FooterApp': './src/App.jsx',
            },
            shared: ['react', 'react-dom']
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },

    preview:{
        port: 4182,
    },
})
