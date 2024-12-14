import { useState } from "react";
import Header from "./components/layout/Header";
import Inicio from "./components/sections/Inicio";
import Servicios from "./components/sections/Servicios";
import Nosotros from "./components/sections/Nosotros";
import Contacto from "./components/sections/Contacto";
import Footer from "./components/layout/Footer";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-custom">
      <Header />
      <main className="flex-grow mt-32">
      <Nosotros id="us" className="" />
        <Inicio id="home" />
        <Servicios id="services" />
        <Contacto id = "contact"/>

      </main>
      <Footer />
    </div>
  );
}

export default App;
