import React from "react";

const Seguridad = ({ id }) => {
  return (
    <section id={id} className="min-h-min bg-white">
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-full shadow-md rounded-lg bg-[#F5F5F5] border-t-4 border-[#FF9800]">
              <div className="text-[#2E8B57] text-center py-6 rounded-t-lg">
                <h1 className="text-2xl font-bold">Seguridad y Medio Ambiente</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#002B5B] mb-4">
                    Compromiso con la Seguridad
                  </h2>
                  <div className="grid gap-4">
                    {[
                      "Record de cero accidentes en 8 años",
                      "Protocolos estrictos de seguridad",
                      "Capacitación continua",
                      "Evaluación constante de riesgos",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <p className="text-[#4A4A4A]">
                          <span className="hover:text-[#FF9800] transition-colors duration-300">
                            {item}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#002B5B] mb-4">
                    Gestión Ambiental
                  </h2>
                  <div className="grid gap-4">
                    {[
                      "Certificación ISO 14001",
                      "Manejo responsable de residuos",
                      "Prácticas sostenibles",
                      "Cumplimiento normativo",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-sm"
                      >
                        <p className="text-[#4A4A4A]">
                          <span className="hover:text-[#FF9800] transition-colors duration-300">
                            {item}
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

export default Seguridad;