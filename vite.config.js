import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

let env;
if (process.env.NODE_ENV === 'development') {
  env = '/' 
}
if (process.env.NODE_ENV === 'production') {
  env = '/vpConstruccionesWebRemastered' 
}
// https://vite.dev/config/
export default defineConfig({
  base:env || '/',
  plugins: [react()],
})
