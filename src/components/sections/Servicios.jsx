import React from "react";

const Servicios = ({ id }) => {
  return (
    <section id={id} className="min-h-min bg-white">
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-[100vw] lg:max-w-[95vw] shadow-md rounded-lg bg-[#F5F5F5] border-t-4 border-[#FF9800]">
              <div className="text-[#2E8B57] text-center py-6 rounded-t-lg">
                <h1 className="text-2xl font-bold">Experiencia y Proyectos</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#002B5B] mb-4">
                    Proyectos Destacados
                  </h2>
                  <div className="grid gap-4">
                    {[
                      "Servicios de mantenimiento central bocamina",
                      "Limpieza industrial complejo térmico",
                      "Gestión operativa de residuos peligrosos",
                      "Servicios en centrales hidroeléctricas",
                    ].map((proyecto, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <p className="text-[#4A4A4A] group-hover:text-[#FF9800]">
                          <span className="hover:text-[#FF9800] transition-colors duration-300">
                            {proyecto}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#002B5B] mb-4">
                    Referencias Principales
                  </h2>
                  <div className="grid gap-4">
                    {[
                      "Contratos con ENEL Generación Chile S.A.",
                      "Proyectos con IMA Industrial Ltda.",
                      "Servicios para múltiples centrales térmicas",
                      "Mantenimiento de instalaciones industriales",
                    ].map((referencia, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <p className="text-[#4A4A4A] group-hover:text-[#FF9800]">
                          <span className="hover:text-[#FF9800] transition-colors duration-1000">
                            {referencia}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;