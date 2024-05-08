import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByNav } from '../../client';
import Project from './project';
import Loader from '../Loader/loader'; // Importa el componente Loader

const ProjectsContainer = () => {
  const { title } = useParams();
  const [project, setProject] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getProjectByNav(title);
      setProject(result);
      setIsLoading(false);
    };
    fetchData();
  }, [title]);

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
      {/* Mostrar el Loader si isLoading es true */}
      {isLoading ? <Loader /> : <Project project={project} />}
    </div>
  );
};

export default ProjectsContainer;
