import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importaciones de estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  // Datos de ejemplo para el carrusel
  const slides = [
    {
      image: 'https://via.placeholder.com/800x400',
      title: 'Slide 1',
      description: 'Descripción del slide 1'
    },
    {
      image: 'https://via.placeholder.com/800x400',
      title: 'Slide 2',
      description: 'Descripción del slide 2'
    },
    {
      image: 'https://via.placeholder.com/800x400',
      title: 'Slide 3',
      description: 'Descripción del slide 3'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[500px] rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.7)' 
              }}
            />
            
            {/* Contenido superpuesto */}
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-xl mb-6 animate-fadeIn animation-delay-300">
                  {slide.description}
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors animate-fadeIn animation-delay-600">
                  Ver Más
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;