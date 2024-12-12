import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Configuración de umbral de scroll (en píxeles)
  const SCROLL_THRESHOLD = 500;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Determinar si se ha hecho scroll más allá del umbral
      setIsScrolled(position > SCROLL_THRESHOLD);
    };

    // Agregar event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Limpiar event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Características', href: '#features' },
    { label: 'Soluciones', href: '#solutions' },
    { label: 'Contacto', href: '#contact' }
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        {/* Logo con efecto de transición */}
        <div className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className={`
              h-8 w-auto transition-all duration-300
              ${isScrolled ? 'scale-90' : 'scale-100'}
            `}
          />
        </div>

        {/* Navegación Desktop */}
        <nav 
          className={`
            hidden md:flex items-center space-x-6 transition-all duration-300
            ${isScrolled ? 'text-gray-800' : 'text-white'}
          `}
        >
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className={`
                hover:text-blue-600 font-medium text-sm transition-colors
                ${isScrolled 
                  ? 'text-gray-700 hover:text-blue-700' 
                  : 'text-white/90 hover:text-white'}
              `}
            >
              {item.label}
            </a>
          ))}
          
          {/* Botón CTA con transición */}
          <button 
            className={`
              px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                : 'bg-white text-blue-600 hover:bg-white/90'}
            `}
          >
            Comenzar
          </button>
        </nav>

        {/* Toggle Menú Móvil */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`
              focus:outline-none transition-colors
              ${isScrolled ? 'text-gray-800' : 'text-white'}
            `}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
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
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 text-lg hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                onClick={toggleMenu}
              >
                Comenzar
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;