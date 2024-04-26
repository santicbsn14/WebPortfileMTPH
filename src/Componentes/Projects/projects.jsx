import React, { useRef, useState, useEffect } from 'react';
import { getProjectById } from '../../client';

const Projects = () => {
  const images = [
    <div
      style={{
        width: '500px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
      <h2>La flor Marite</h2>
      <div>“Para conocer a la flor marité hay que darle la vuelta, la vuelta entera.</div>
    <div>Imaginarla de formas diversas, esperarla a que cambie</div>
    <div>que pase por diferentes estados. (...)</div>
    </div>,
    'https://i.postimg.cc/jd7V9Z58/foto-Tere3.jpg',
    'https://i.postimg.cc/g0ftvPym/foto-Tere2.jpg',
    'https://i.postimg.cc/3JQDBLxM/Imagen-de-Whats-App-2024-04-15-a-las-11-56-41-7e95b2ae.jpg',
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [prevX, setPrevX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPrevX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = prevX - e.clientX;
    setCurrentX((prevState) => prevState - newX);
    setPrevX(e.clientX);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Evita que se muestre el menú contextual
  };

  return (
    <div
      className="container"
      style={{
        width: windowWidth - 50, // Ancho fijo basado en el ancho de la ventana
        height: '400px', // Altura fija según tus necesidades
        position: 'fixed', // Posición fija
        top: '70%', // Centrado verticalmente
        left: '80%', // Centrado horizontalmente
        transform: 'translate(-50%, -50%)', // Ajuste para el centrado
        overflow: 'hidden', // Ocultar desbordamiento
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      <div
        className="carousel"
        style={{
          width: `${images.length * 500 + (images.length - 1) * 50}px`, // Ancho dinámico basado en la cantidad de imágenes y su tamaño
          whiteSpace: 'nowrap', // Evitar ajuste de línea
          transform: `translateX(${currentX}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container"
            style={{
              display: 'inline-block', // Mostrar imágenes en línea
              marginRight: index !== images.length - 1 ? '50px' : '0', // Margen entre imágenes
            }}
          >
            {typeof image === 'string' ? (
              <img
                src={image}
                alt=""
                style={{ width: '500px', height: '300px' }}
                draggable="false"
                onContextMenu={handleContextMenu}
              />
            ) : (
              image
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;