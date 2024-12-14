const Nosotros = ({ id }) => {
  return (
    <section id={id} className="min-h-min bg-white z-40 mt-20">
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-full shadow-md rounded-lg bg-[#F5F5F5] border-t-4 border-[#FF6B2B]">
              <div className="text-[#002B5B] text-center py-4 rounded-t-lg">
                <h2 className="text-3xl font-bold">Sobre nosotros</h2>
              </div>
              <div className="text-[#002B5B] text-center py-4 rounded-t-lg">
                <h3 className="text-2xl font-bold">Quienes somos</h3>
              </div>

              <div className="p-6 text-[#4A4A4A]">
                <div className="mb-6">
                  <article>
                    <p className="p-8">
                      VP Construcciones SpA es una empresa líder en servicios
                      industriales y mantenimiento, con una sólida trayectoria
                      respaldada por certificaciones internacionales ISO 45001,
                      14001 y 9001. Nuestro enfoque se centra en la excelencia
                      operativa y el compromiso con nuestros clientes.
                    </p>
                  </article>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative min-h-[300px] md:min-h-[470px] py-8 lg:py-0 ">
                  <div className="absolute inset-0  bg-[url('/blob.svg')] bg-no-repeat bg-center bg-cover scale-125  2xl:scale-75   transform w-full h-full" />
                  <div className="h-full flex flex-col justify-center p-10 relative z-20 text-center text-white">
                    <h4 className="text-xl lg:text-lg font-semibold mb-6 ">
                      Valores Corporativos
                    </h4>
                    <article className="flex flex-col gap-4 items-center text-lg lg:text-base">
                      <p className="w-4/5">
                        Compromiso con la excelencia
                      </p>
                      <p className="w-4/5">
                        Seguridad como prioridad
                      </p>
                      <p className="w-4/5">
                        Responsabilidad ambiental
                      </p>
                      <p className="w-4/5">
                        Mejora continua
                      </p>
                      <p className="w-4/5">
                        Profesionalismo y ética
                      </p>
                    </article>
                  </div>
                </div>
                <div className="relative min-h-[350px] sm:min-h-[470px] py-8 lg:py-0 ">
                  <div className="absolute inset-0 bg-[url('/blob1.svg')] bg-no-repeat bg-center bg-cover scale-125  2xl:scale-75 transform w-full h-full" />
                  <div className="h-full flex flex-col justify-center p-10 relative z-20 text-center text-[#002B5B]">
                    <h4 className="text-xl lg:text-lg font-semibold mb-6 ">
                    Logros Destacados
                    </h4>
                    <article className="flex flex-col gap-4 items-center text-lg lg:text-base">
                      <p className="w-4/5">
                        8 años sin accidentes en operaciones
                      </p>
                      <p className="w-4/5">
                        Certificaciones ISO vigentes
                      </p>
                      <p className="w-4/5">
                        Amplia cartera de clientes satisfechos
                      </p>
                      <p className="w-4/5">
                        Personal altamente capacitado
                      </p>
                     
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