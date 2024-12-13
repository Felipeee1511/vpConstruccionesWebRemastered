import React from 'react';
import { 
  FaceSmileIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingLibraryIcon,
  CodeBracketIcon,
  EnvelopeIcon 
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition duration-300"
          >
            <FaceSmileIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition duration-300"
          >
            <PhotoIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition duration-300"
          >
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 transition duration-300"
          >
            <BuildingLibraryIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition duration-300"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="hover:text-gray-300 transition duration-300"
          >
            <EnvelopeIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} VP Construcciones SPA. Todos los derechos reservados.
        </p>

        <p className="text-sm text-gray-400">
          Dev: FLP.
        </p>
      </div>
    </footer>
  );
};

export default Footer;