import React from 'react';

const Nosotros = ({ id }) => {
  return (
    <section id={id} className="min-h-min bg-white z-40 mt-20">
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-[100vw] lg:max-w-[95vw] shadow-lg rounded-lg bg-[#F5F5F5] border-t-4 border-[#FF6B2B]">
              <div className="text-[#2E8B57] text-center py-6">
                <h2 className="text-4xl font-bold mb-2">Sobre nosotros</h2>
              </div>
              
              <div className="text-[#002B5B] text-center py-4">
                <h3 className="text-2xl font-bold mb-4">Quienes somos</h3>
              </div>

              <div className="p-6 text-[#4A4A4A]">
                <div className="mb-8 max-w-4xl mx-auto px-4">
                  <article>
                    <p className="text-lg leading-relaxed text-center">
                      VP Construcciones SpA es una empresa líder en servicios
                      industriales y mantenimiento, con una sólida trayectoria
                      respaldada por certificaciones internacionales ISO 45001,
                      14001 y 9001.
                    </p>
                    <p className="text-lg leading-relaxed text-center mt-4">
                      Nuestro enfoque se centra en la excelencia
                      operativa y el compromiso con nuestros clientes.
                    </p>
                  </article>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative py-4 lg:py-0">
                    <div className="absolute inset-0 bg-[url('/blob.svg')] bg-no-repeat bg-center bg-cover scale-100 transform w-full h-full" />
                    <div className="h-full flex flex-col justify-center p-6 relative z-20 text-center text-white">
                      <h4 className="text-xl font-semibold mb-4">
                        Valores Corporativos
                      </h4>
                      <article className="flex flex-col gap-3 items-center text-base">
                        {[
                          'Compromiso con la excelencia',
                          'Seguridad como prioridad',
                          'Responsabilidad ambiental',
                          'Mejora continua',
                          'Profesionalismo y ética'
                        ].map((valor, index) => (
                          <p key={index} className="w-4/5 hover:scale-105 transition-transform">
                            {valor}
                          </p>
                        ))}
                      </article>
                    </div>
                  </div>

                  <div className="relative aspect-* py-4 lg:py-0">
                    <div className="absolute inset-0 bg-[url('/blob1.svg')] bg-no-repeat bg-center bg-cover scale-100 transform w-full h-full" />
                    <div className="h-full flex flex-col justify-center p-6 relative z-20 text-center text-[#002B5B]">
                      <h4 className="text-xl font-semibold mb-4">
                        Logros Destacados
                      </h4>
                      <article className="flex flex-col gap-3 items-center text-base">
                        {[
                          '8 años sin accidentes en operaciones',
                          'Certificaciones ISO vigentes',
                          'Amplia cartera de clientes satisfechos',
                          'Personal altamente capacitado'
                        ].map((logro, index) => (
                          <p key={index} className="w-4/5">
                            {logro}
                          </p>
                        ))}
                      </article>
                    </div>
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

export default Nosotros;