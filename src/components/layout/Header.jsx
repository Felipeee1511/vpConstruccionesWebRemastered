import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Configuración de umbral de scroll (en píxeles)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (elementId) => {
    console.log(elementId);
    const element = document.getElementById(elementId);
    console.log(element);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navItems = [
    { label: "Inicio", sectionId: "home" },
    { label: "Servicios", sectionId: "services" },
    { label: "Nosotros", sectionId: "us" },
    { label: "Contacto", sectionId: "contact" },
  ];

  return (
    <header
      className={`
        relative top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-6"
            : "bg-[#fffbdd] py-3"
        }
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        {/* Logo con efecto de transición */}
        <div className="flex items-center">
          <a href="#">
          <img
            src={'/logo.webp'}
            alt="Logo"
            className={`
              h-full transition-all duration-300 w-32
              ${isScrolled ? "scale-90" : "scale-100"}
            `}
          />
          </a>
        </div>

        {/* Navegación Desktop */}
        <nav
          className={`
            hidden md:flex items-center space-x-6 transition-all duration-300  
            ${isScrolled ? "text-gray-800" : "text-[#ffed76]"}
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className={`
              hover:text-[#001289] font-medium text-lg transition-colors text-black cursor-pointer
                ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-700"
                    : "text-[#black]/50 hover:text-[#001289]"
                } 
              `} // IMPORTANTE AQUI SE CAMBIA EL COLOR DEL TEXTO AL INICIO DEL SCROLL (ESTADO INICIAL)
            >
              {item.label}
            </a>
          ))}

          {/* Botón CTA con transición */}
          {/* <button 
            className={`
              px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                : 'bg-white text-blue-600 hover:bg-white/90'}
            `}
          >
            Comenzar
          </button> */}
        </nav>

        {/* Toggle Menú Móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`
              focus:outline-none transition-colors
              ${isScrolled ? "text-gray-800" : "text-black"}
            `}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 black" />
            ) : (
              <Bars3Icon className="h-6 w-6 black" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <a
                  key={item.sectionId}
                  className="text-gray-800 text-lg hover:text-blue-600 transition-colors cursor-pointer"
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    toggleMenu();
                  }}
                >
                  {item.label}
                </a>
              ))}
              {/* <button 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                onClick={toggleMenu}
              >
                Comenzar
              </button> */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
