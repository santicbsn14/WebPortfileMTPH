import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectByNav } from '../../client';
import './project.css';
import Project from './project';
import Loader from '../Loader/loader';

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
  const [touchStartX, setTouchStartX] = useState(0);
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

  return (
    <div
      className="container container-projects"
      style={{
        width: windowWidth - 50,
        height: '400px',
        position: 'fixed',
        top: '70%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
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
      {isLoading ? <Loader /> : <Project project={project} currentX={currentX} />}
    </div>
  );
};

export default ProjectsContainer;
