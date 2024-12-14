import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false); // Cerrar menú móvil después de seleccionar
    }
  };

  const navItems = [
    { label: "Nosotros", sectionId: "us" },
    { label: "Equipamiento", sectionId: "home" },
    { label: "Proyectos", sectionId: "services" },
    { label: "Contacto", sectionId: "contact" },
  ];

  return (
    <header
      className={`
        absolute top-0 left-0 w-full z-50 
        py-4
        bg-[#F5F5F5]
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img
              src={import.meta.env.VITE_BASE_URL + "logo.webp"}
              alt="Logo"
              className="h-full w-32"
            />
          </a>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="
                px-4 py-2 rounded-lg text-base font-bold 
                bg-transparent text-[#1A4B84] border border-white/30 
                hover:bg-white/20 
                transition-all duration-300
              "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Toggle Menú Móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-4 max-h-fit pb-12">
          <div className="container mx-auto px-4 flex justify-between items-center mb-10">
            <div className="flex items-center">
              <a href="#">
                <img
                  src={import.meta.env.VITE_BASE_URL + "logo.webp"}
                  alt="Logo"
                  className="h-full w-32"
                />
              </a>
            </div>
            
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4 items-center">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  className="
                    w-full max-w-xs px-4 py-3 
                    text-gray-800 text-lg 
                    border border-gray-300 
                    rounded-lg 
                    hover:bg-gray-100 
                    transition-colors
                  "
                  onClick={() => scrollToSection(item.sectionId)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;