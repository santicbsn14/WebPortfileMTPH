import React from 'react';
import { urlFor } from '../../client';
import Loader from '../Loader/loader';
import './project.css';

function Project({ project , currentX }) {
  const images = project?.imagenes;

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="container project-unit"
      style={{
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        className="carousel"
        style={{
          width: images ? `${(images.length + 1) * 550}px` : '100%',
          whiteSpace: 'nowrap',
          transform: `translateX(${currentX}px)`,
          cursor: 'grab',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {project ? (
          <>
            <div className="project-container">
              <h3 style={{ marginTop:'-100px' }}>{project.title}</h3>
              <div className="description-container">
                <p>{project.description}</p>
              </div>
              <span>Desliza para ver más imagenes{'>>'}</span>
            </div>
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
                    loading='lazy'
                    alt="Imagenes-projects"
                    className="image-project"
                    draggable="false"
                    onContextMenu={handleContextMenu}
                  />
                </div>
              ))
            ) : (
              <p>No hay imágenes disponibles</p>
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Project;
