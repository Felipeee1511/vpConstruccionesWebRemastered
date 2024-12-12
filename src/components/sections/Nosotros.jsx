const Nosotros = ({id}) => {

    return(
        <section id={id} className="min-h-screen bg-gray-100">
         <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg">
                        <div className="bg-blue-500 text-white text-center py-4 rounded-t-lg">
                            <h1 className="text-2xl font-bold">Nosotros</h1>
                        </div>

                        <div className="p-6">
                            <div className="mb-6">
                                <h1 className="text-xl font-semibold mb-2">Misión</h1>
                                <p className="text-gray-700">
                                    "Satisfacer las necesidades de nuestros clientes durante la duración del proyecto. Entregamos un servicio de alta calidad, regido por exigentes estándares en seguridad, calidad y puntualidad."
                                </p>
                            </div>
                            <div className="mb-6">
                                <h1 className="text-xl font-semibold mb-2">Visión</h1>
                                <p className="text-gray-700">
                                    "Mantener a lo largo del tiempo el sello que nos caracteriza, como una empresa integral y detallista en el ámbito de la construcción y la limpieza, preocupándonos por la disminución de residuos, para así convertirnos en una empresa ambientalmente responsable, lograr que nuestro personal se sienta motivado y orgulloso de pertenecer a VP Construcciones, corregir debilidades para siempre poder entregar un mejor servicio, logrando la satisfacción de nuestros clientes. Además de ser una empresa mundialmente reconocida por su compromiso, calidad e innovación en cada uno de nuestros procesos."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Nosotros;