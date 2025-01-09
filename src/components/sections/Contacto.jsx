import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import axios from "axios";

const Contacto = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const captchaRef = useRef(null);

  // Configuración de EmailJS y reCAPTCHA
  const SERVICE_ID = "service_fjrh7be";
  const TEMPLATE_ID = "template_u52iqzc";
  const PUBLIC_KEY = "V5kIGTyGzF4wsTOaH";
  const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const RECAPTCHA_SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Obtener el token de reCAPTCHA
    const captchaToken = captchaRef.current.getValue();

    // Validar que el reCAPTCHA ha sido completado
    if (!captchaToken) {
      Swal.fire({
        icon: "error",
        title: "Verifica el reCAPTCHA",
        text: "Por favor, completa la verificación de reCAPTCHA",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      try {
        const response = await axios.post(
          "https://www.google.com/recaptcha/api/siteverify",
          null,
          {
            params: {
              secret: RECAPTCHA_SECRET_KEY,
              response: captchaToken,
            },
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const verifyResult = response.data;

        if (!verifyResult.success) {
          throw new Error("Verificación de reCAPTCHA fallida");
        }

        // Aquí puedes continuar con el flujo si la verificación fue exitosa
      } catch (error) {
        console.error("Error al verificar reCAPTCHA:", error);
        throw error;
      }

      // Enviar correo con EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      // Limpiar formulario y reCAPTCHA
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      captchaRef.current.reset();

      // Mostrar mensaje de éxito
      Swal.fire({
        icon: "success",
        title: "Mensaje Enviado",
        text: "Tu mensaje ha sido enviado correctamente",
      });
    } catch (error) {
      // Mostrar mensaje de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el mensaje",
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="min-h-screen bg-white">
      <div className="flex items-center justify-center  py-12  min-h-screen container mx-auto rounded-lg px-4 mb-4">
        <div className="bg-[#F5F5F5] flex items-center justify-center  py-12  min-h-screen container mx-auto rounded-lg px-4 mb-4 border-t-4 border-[#FF9800] max-w-[100vw] lg:max-w-[95vw]">
          <div className="max-w-xl w-full bg-gray-200 shadow-md rounded-lg p-8 mx-auto">
            <h2 className="text-2xl font-bold text-center text-[#1A4B84] mb-8">
              Contacta con Nosotros
            </h2>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Campo de Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#5F6368] mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Campo de Correo Electrónico */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#5F6368] mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="tu.correo@ejemplo.com"
                />
              </div>

              {/* Campo de Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#5F6368] mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Escribe tu mensaje"
                />
              </div>

              {/* Componente reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  theme="light"
                />
              </div>

              {/* Botón de Envío */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-[#FF9800] hover:bg-indigo-700"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
