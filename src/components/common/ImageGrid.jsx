import React from 'react';

const ImageGrid = () => {
  const images = [
    { src: 'imagen1.jpg', title: 'Imagen 1', description: 'Descripción 1' },
    { src: 'imagen2.jpg', title: 'Imagen 2', description: 'Descripción 2' },
    { src: 'imagen3.jpg', title: 'Imagen 3', description: 'Descripción 3' },
    { src: 'imagen4.jpg', title: 'Imagen 4', description: 'Descripción 4' },
  
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-[570px]"
          >
            <img src={image.src} alt={image.title} className="rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{image.title}</h3>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;