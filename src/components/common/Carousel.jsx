import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

const VIDEOS = [
  {
    videoId: "7222709244125007109",
    thumbnailUrl: import.meta.env.VITE_BASE_URL + "1-slider.webp",
    title: "Mantenimiento industrial",
    description: [
      "Mantenimiento preventivo y correctivo",
      "Gestión de instalaciones",
      "Servicios especializados para centrales térmicas",
      "Mantenimiento de equipos industriales"
    ]
  },
  {
    videoId: "7258016065563807003",
    thumbnailUrl: import.meta.env.VITE_BASE_URL + "2-slider.webp",
    title: "Limpieza industrial",
    description: [
      "Limpieza de calderas",
      "Limpieza de instalaciones industriales",
      "Manejo de residuos industriales",
      "Servicios especializados de limpieza"
    ]
  },
  {
    videoId: "7343332399662533920",
    thumbnailUrl: import.meta.env.VITE_BASE_URL + "3-slider.webp",
    title: "Jardineria",
    description: [
      "Mantenimiento de áreas verdes",
      "Diseño paisajístico",
      "Sistemas de riego",
      "Poda y control de vegetación"
    ]
  },
  {
    videoId: "7265231719068880160",
    thumbnailUrl: import.meta.env.VITE_BASE_URL + "4-slider.webp",
    title: "Servicios generales",
    description: [
      "Gestión de almacenes",
      "Operación de romana",
      "Jardinería",
      "Mantenimiento de edificios"
    ]
  },
  {
    videoId: "7285448407756393761",
    thumbnailUrl: import.meta.env.VITE_BASE_URL + "1-slider.webp",
    title: "Gestión de Residuos",
    description: [
      "Manejo de residuos peligrosos (RESPEL)",
      "Gestión de residuos industriales",
      "Disposición controlada",
      "Cumplimiento normativo"
    ]
  },
  {
    videoId: "7258016065563807007",
    thumbnailUrl: import.meta.env.VITE_BASE_URL + "2-slider.webp",
    title: "Tratamiento de Aguas",
    description: [
      "Tratamiento de aguas servidas",
      "Gestión de agua potable",
      "Análisis y control de calidad",
      "Mantenimiento de sistemas"
    ]
  }
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  const updateButtonStates = () => {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setLeftDisabled(scrollLeft <= 2);
    setRightDisabled(scrollLeft + clientWidth >= scrollWidth - 2);
  };

  const handleScroll = () => {
    updateButtonStates();
  };

  const scrollBy = (offset) => {
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(updateButtonStates, 300);
  };

  return (
    <section className="min-h-min bg-white overflow-hidden mt-4">
      <div className="flex items-center justify-center min-h-screen container mx-auto rounded-lg px-4 mb-4 bg-[#F5F5F5]">
        <div className="px-6 w-full content-between">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl pb-0 sm:pb-6 sm:text-2xl md:text-4xl md:pb-12 text-[#2E8B57]">
              Nuestros servicios:
            </h2>
            <div className="hidden md:flex items-center gap-x-4">
              <button
                type="button"
                className={`p-2 rounded-full transition-all ${
                  leftDisabled
                    ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-600 hover:scale-110 active:scale-100"
                }`}
                onClick={() => scrollBy(-300)}
                disabled={leftDisabled}
                aria-label="Ir al elemento anterior"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              <button
                type="button"
                className={`p-2 rounded-full transition-all ${
                  rightDisabled
                    ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-600 hover:scale-110 active:scale-100"
                }`}
                onClick={() => scrollBy(300)}
                disabled={rightDisabled}
                aria-label="Ir al siguiente elemento"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-x-4 md:gap-x-8 scrollbar-hide no-scrollbar py-8"
              onScroll={handleScroll}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {VIDEOS.map(({ videoId, thumbnailUrl, title, description }) => (
                <div
                  key={videoId}
                  className="group relative flex-shrink-0 w-[320px] snap-center rounded-lg shadow-md overflow-hidden"
                >
                  {/* Imagen de fondo */}
                  <div
                    className="w-[320px] h-[570px] bg-contain bg-no-repeat transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                  />
                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                  {/* Panel naranja */}
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#FF9800] transition-all duration-500 transform translate-y-[calc(100%-64px)] group-hover:translate-y-0"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-white mb-2">
                        {title}
                      </h3>
                      <ul className="space-y-2 text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {description.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="absolute top-0 left-0 h-full w-16 pointer-events-none bg-gradient-to-l from-transparent to-white hidden md:block"
              style={{ opacity: leftDisabled ? 0 : 1 }}
            />
            <div
              className="absolute top-0 right-0 h-full w-16 pointer-events-none bg-gradient-to-r from-transparent to-white hidden md:block"
              style={{ opacity: rightDisabled ? 0 : 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;