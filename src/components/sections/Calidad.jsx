const Calidad = ({ id }) => {
  return (
    <section id={id} className="min-h-min bg-white">
      <div className="bg-white-100 py-8 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-full  shadow-md rounded-lg  bg-[#ffe0b3] ">
              {/* <div className=" text-[#ff7300] text-center py-4 rounded-t-lg">
                <h1 className="text-2xl font-extrabold">
                  Expertos en Servicios Generales, Limpieza Industrial y
                  Materiales Peligrosos
                </h1>
              </div> */}

              <div className="p-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Columna del texto */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#ff7300]">
                      Expertos en Servicios Generales, Limpieza Industrial y
                      Materiales Peligrosos
                    </h2>
                    <p className="text-black">
                      En nuestra empresa, destacamos por ofrecer soluciones de
                      calidad en servicios generales, limpieza industrial y
                      manejo seguro de materiales peligrosos. Con tecnología
                      avanzada y un equipo capacitado, garantizamos espacios
                      limpios, seguros y eficientes. Nuestro compromiso es
                      cuidar el medio ambiente, priorizar la seguridad y aportar
                      valor a tu empresa. Confía en nosotros para soluciones
                      confiables y responsables.
                    </p>
                  </div>
                  {/* Columna de la imagen */}
                  <div className="flex justify-center">
                    <img
                      src="/isopng.webp"
                      alt="Certificación"
                      className="w-64 h-64 object-cover transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
                    />
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

export default Calidad;
