import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'main',

            remotes: {
                headerApp: "http://localhost:4181/assets/remoteEntry.js",
                footerApp: "http://localhost:4182/assets/remoteEntry.js"
            },
            shared: ["react", "react-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    }
})
