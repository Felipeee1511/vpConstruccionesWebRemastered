import { useState } from 'react'
import Header from './components/layout/Header';
import Inicio from './components/sections/Inicio';
import Servicios from './components/sections/Servicios';
import Nosotros from './components/sections/Nosotros';
import './index.css';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Inicio  id="home"/>
      <Servicios  id="services" />
      <Nosotros id="us" />
    </main>
  </div>
  )
}

export default App
