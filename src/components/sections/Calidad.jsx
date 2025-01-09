import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Calidad = ({ id }) => {
  const [openSections, setOpenSections] = useState({
    vehicles: true,
    machinery: true,
    safety: true
  });

  const equipment = {
    vehicles: {
      title: "Vehículos",
      items: ["Camionetas doble cabina 4x2"]
    },
    machinery: {
      title: "Maquinaria Especializada",
      items: [
        "Hidrolavadoras industriales",
        "Aspiradoras industriales",
        "Equipos de medición y control",
        "Herramientas especializadas"
      ]
    },
    safety: {
      title: "Equipos de Seguridad",
      items: [
        "Equipos de protección personal completos",
        "Sistemas de monitoreo y control",
        "Equipos de rescate y emergencia"
      ]
    }
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section id={id} className="bg-white z-40">
      <div className="bg-white-100 min-h-[100vh] lg:min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-screen lg:max-w-[95vw] shadow-md rounded-lg bg-[#F5F5F5] border-t-4 border-[#1A4B84] h-[90vh] sm:h-[80vh] md:h-[70vh] lg:h-[40vh]">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#2E8B57]">
                  Equipamiento
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                  {Object.entries(equipment).map(([key, section]) => (
                    <div key={key} className="border-l-2 border-transparent">
                      <button
                        onClick={() => toggleSection(key)}
                        className="w-full flex items-center justify-between group"
                      >
                        <h3 className="text-[#1A4B84] underline font-bold mb-3">
                          {section.title}
                        </h3>
                        {openSections[key] ? (
                          <ChevronDownIcon className="h-5 w-5 text-[#5F6368]" />
                        ) : (
                          <ChevronRightIcon className="h-5 w-5 text-[#5F6368]" />
                        )}
                      </button>
                      
                      {openSections[key] && (
                        <div className="text-[#5F6368] space-y-2">
                          {section.items.map((item, index) => (
                            <div 
                              key={index}
                              className="pl-2 border-l-2 border-transparent hover:border-[#1A4B84] transition-colors duration-200 cursor-pointer"
                            >
                              <p className="cursor-pointer">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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