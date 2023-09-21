import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import { resolve } from 'pathe'
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    glsl(),
    // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
    babel(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5172, // you can replace this port with any port
  }
})



