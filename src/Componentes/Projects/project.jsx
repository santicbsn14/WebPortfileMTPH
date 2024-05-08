import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { urlFor} from '../../client';
import Loader from '../Loader/loader';

function Project({ project }) { // Cambiado de { title } a { project }

  // Eliminado: const [images, setImages] = useState([]);
  // Eliminado: const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Mantenido
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [prevX, setPrevX] = useState(0);
  const carouselRef = useRef(null);

  // useEffect no necesita cambios ya que no depende de "title" ahora.

  
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
    e.preventDefault();
  };
  const images = project.imagenes
  console.log(images)
  
  // Ahora "images" ya no es un estado, sino que se toma directamente de "project.images"
//  

return (
  <div
    className="container"
    style={{
      width: '100%',
      height: '400px',
      overflow: 'hidden',
      position: 'relative',
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
        width: images ? `${(images.length + 1) * 550}px` : '100%', // Verifica si images está definido antes de usarlo
        whiteSpace: 'nowrap',
        transform: `translateX(${currentX}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <div><Loader /></div> 
      ) : (
        <>
          {project && (
            <div
              style={{
                width: '500px',
                height: '300px',
                textAlign: 'center',
                backgroundColor: '#e4e6ea',
                padding: '10px',
                borderRadius: '5px',
                display: 'inline-block',
                marginRight: '50px',
                marginLeft:'50px'
              }}
            >
              <h2>{project.title}</h2>
              <div style={{ maxWidth: '480px', padding: '0 10px' }}>
                {project.description.split(/\.(\s*|\n+)/).map((paragraph, index) => (
                  <p style={{fontSize:'12px'}} key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
          {images && images.length > 0 ? ( // Verifica si images está definido antes de usarlo
            images.map((imageId, index) => (
              <div
                key={index}
                className="image-container"
                style={{
                  display: 'inline-block',
                  marginRight: '50px',
                  position: 'relative',
                }}
              >
                <img
                  src={urlFor(imageId)}
                  alt=""
                  style={{ width: '500px', height: '300px' }}
                  draggable="false"
                  onContextMenu={handleContextMenu}
                />
              </div>
            ))
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </>
      )}
    </div>
  </div>
);

}

export default Project;
