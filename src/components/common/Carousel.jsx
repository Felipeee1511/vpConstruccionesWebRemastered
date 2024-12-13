import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

const VIDEOS = [
  {
    videoId: "7222709244125007109",
    thumbnailUrl: "/1-slider.webp",
    title: "Limpieza industrial",
  },
  {
    videoId: "7258016065563807003",
    thumbnailUrl: "/2-slider.webp",
    title: "Aseo ",
  },
  {
    videoId: "7343332399662533920",
    thumbnailUrl: "/3-slider.webp",
    title: "Jardineria",
  },
  {
    videoId: "7265231719068880160",
    thumbnailUrl: "/4-slider.webp",
    title: "Servicios generales",
  },
  {
    videoId: "7285448407756393761",
    thumbnailUrl: "/1-slider.webp",
    title: "No se que poner aquí",
  },
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
    console.log(offset);
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(updateButtonStates, 300); // Delay to wait for smooth scrolling to complete
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="flex items-center justify-center  py-12  min-h-screen container mx-auto rounded-lg px-4 mb-4">
        {/* Título y controles */}
        <div className="px-6 w-full content-between my-32 ">
          <div className="flex items-center justify-between pb-6 md:pb-12">
            <h2 className="text-xl font-bold">
              Algunos de nuestros procesos:{" "}
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
                className={`p-2 rounded-full transition-all bg-blue-500 active:bg-blue-600 ${
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

          {/* Contenedor del carrusel */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-x-4 md:gap-x-8 scrollbar-hide"
              onScroll={handleScroll}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {VIDEOS.map(({ videoId, thumbnailUrl, title }) => (
                <div
                  key={videoId}
                  className="flex-shrink-0 w-[320px] md:w-[350px] snap-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
                >
                  <div
                    className={"w-[320px] h-[570px] object-cover bg-contain"}
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                  >
                    {/* <div className="p-4">
                    <h3 className="text-lg font-medium">{title}</h3>
                  </div> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Gradientes para los bordes */}
            <div
              className="absolute top-0 left-0 h-full w-16 pointer-events-none bg-gradient-to-l from-transparent to-white"
              style={{ opacity: leftDisabled ? 0 : 1 }}
            />
            <div
              className="absolute top-0 right-0 h-full w-16 pointer-events-none bg-gradient-to-r from-transparent to-white"
              style={{ opacity: rightDisabled ? 0 : 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
