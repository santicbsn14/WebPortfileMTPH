import React, { useRef, useState } from 'react';
import { urlFor } from '../../client';
import Loader from '../Loader/loader';
import './project.css'
function Project({ project }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [prevX, setPrevX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef(null);

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

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const newX = touchStartX - e.touches[0].clientX;
    setCurrentX((prevState) => prevState - newX);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const images = project.imagenes;
  

  return (
    <div
      className="container project-unit"
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div
        className="carousel"
        style={{
          width: images ? `${(images.length + 1) * 550}px` : '100%',
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
                className="project-container"
              >
                <h2 style={{textAlign:'center'}}>{project.title}</h2>
                <div className="description-container" >
                  {project.description.split(/\.(\s*|\n+)/).map((paragraph, index) => (
                    <p style={{ fontSize: '12px', textAlign:'center' }} key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {images && images.length > 0 ? (
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
                    alt="Imagenes-projects"
                    className='image-project'
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
