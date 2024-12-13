import React from "react";

const Servicios = ({ id }) => {
  return (
    <section id={id} className="min-h-min bg-white">
      <div className="bg-white-100 py-8 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-full  shadow-md rounded-lg  bg-gradient-to-r from-[#ff7300]  to-[#ec9853] ">
              <div className=" text-white text-center py-4 rounded-t-lg">
                <h1 className="text-2xl font-bold">Servicios</h1>
              </div>

              <div className="p-6">
                <p className="text-white">
                  En VP, nos especializamos en ofrecer una amplia gama de
                  servicios adaptados a las necesidades de nuestros clientes.
                  Contamos con un equipo altamente capacitado para brindar
                  soluciones en tres áreas clave: Servicios Generales: Nos
                  encargamos de diversas tareas, desde mantenimiento de
                  instalaciones hasta trabajos de reparación y remodelación,
                  siempre con la calidad y eficiencia que nos caracteriza.
                  Jardinería: Ofrecemos servicios completos de jardinería,
                  incluyendo diseño, mantenimiento y cuidado de espacios verdes.
                  Nuestro objetivo es crear ambientes naturales que embellezcan
                  y mejoren tu entorno. Retiro de Materiales Peligrosos: Con una
                  fuerte conciencia ambiental, nos ocupamos del retiro seguro y
                  adecuado de materiales peligrosos, garantizando el
                  cumplimiento de normativas y la protección de la salud
                  pública. Nos comprometemos a brindar servicios profesionales,
                  seguros y de alta calidad para garantizar la satisfacción de
                  nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
