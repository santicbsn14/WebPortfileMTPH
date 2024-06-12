import React, { useState, useEffect } from "react";
import './nav.css'
import { Link, useLocation } from 'react-router-dom';
import { getWorkshops, getProjects } from "../../client";

function Nav({ isMenuOpen, toggleMenu }) {
  const location = useLocation();
  const isProjectsRoute = location.pathname === '/projects';
  const isWorkshopsRoute = location.pathname === '/workshops';

  const [workshops, setWorkshops] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Obtener workshops y proyectos al montar el componente
    getWorkshops().then(data => setWorkshops(data));
    getProjects().then(data => setProjects(data));
  }, []);

  // Función para ocultar el submenú cuando se hace clic en un enlace
  const handleSubmenuClick = () => {
    const submenu = document.querySelector('.submenu');
    if (submenu) {
      submenu.classList.remove('active'); // Remueve la clase "active" del submenú
    }
    toggleMenu(); // Cierra el menú cuando se hace clic en un enlace
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '238px', marginLeft:'0px' }}>
      <img src="https://i.postimg.cc/DzZt49VG/Imagen-de-Whats-App-2024-04-16-a-las-12-13-01-09b890a6.jpg" alt="" style={{ width: '270px', height: '270px', padding: '0px' }} />
      <nav className="navbar navbar-expand-lg" style={{ marginLeft: '0' }}>
        <section className="container-fluid" style={{width: '238px'}}>
          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav row" style={{ width:'238px'}} >
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/' className="nav-link" onClick={handleSubmenuClick}>Home</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/workshops' className="nav-link" onClick={handleSubmenuClick}>Workshops</Link>
                  {isWorkshopsRoute && (
                    <div className="submenu">
                      <ul>
                        {workshops.map(workshop => (
                          <li key={workshop.id}><Link to={`/workshops/${encodeURIComponent(workshop.title)}`} style={{color:'black'}} onClick={handleSubmenuClick}>{workshop.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/projects' className="nav-link" onClick={handleSubmenuClick}>Projects</Link>
                  {isProjectsRoute && (
                    <div className="submenu">
                      <ul>
                        {projects.map(project => (
                          <li key={project.id}><Link to={`/projects/${encodeURIComponent(project.title)}`} style={{color:'black'}} onClick={handleSubmenuClick}>{project.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/statement' className="nav-link" onClick={handleSubmenuClick}>Statement</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/Bio' className="nav-link" onClick={handleSubmenuClick}>Bio</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/Contacto' className="nav-link" onClick={handleSubmenuClick}>Contact</Link>
                </li>
              </div>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Nav;