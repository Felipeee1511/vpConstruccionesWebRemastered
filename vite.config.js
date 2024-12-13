import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
console.log('NODE_ENV:', process.env.NODE_ENV);

if (!process.env.VITE_BASE_URL) {
  console.warn('VITE_BASE_URL no está definida.');
}
// https://vite.dev/config/
export default defineConfig({
  base:process.env.VITE_BASE_URL|| '/',
  plugins: [react()],
})
