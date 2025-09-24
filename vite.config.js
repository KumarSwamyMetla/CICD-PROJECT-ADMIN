import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/admin/', // <-- This line is crucial for Tomcat subdirectory
    server: { port: 5174 }
})