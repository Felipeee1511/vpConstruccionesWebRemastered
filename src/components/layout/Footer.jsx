import React from 'react';
import { 
  FaceSmileIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingLibraryIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-[#1A4B84] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto inline">
          {/* Phone Info - Left aligned */}
          <div className="flex items-center space-x-3 pb-2 border-b border-white/20 max-w-sm mb-4">
            <PhoneIcon className="h-5 w-5 text-white" />
            <div>
              <p className="text-sm font-medium">Teléfono</p>
              <p className="text-sm">+56 9 7935 7965</p>
            </div>
          </div>

          {/* Address Info - Left aligned */}
          <div className="flex items-center space-x-3 pb-2 border-b border-white/20 max-w-sm mb-4">
            <EnvelopeIcon className="h-5 w-5 text-white" />
            <div>
              <p className="text-sm font-medium">Contacto</p>
              <p className="text-sm">contacto@vpconstrucciones.cl</p>
            </div>
          </div>

          {/* Social Icons - Left aligned */}
          <div className="flex justify-start space-x-6 mb-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#5F6368] transition duration-300"
            >
              <FaceSmileIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition duration-300"
            >
              <PhotoIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition duration-300"
            >
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition duration-300"
            >
              <BuildingLibraryIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-400 transition duration-300"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="hover:text-gray-300 transition duration-300"
            >
              <EnvelopeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright and Credits - Centered */}
        <div className="text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} VP Construcciones SPA. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white mt-1">
            Dev: FLP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;