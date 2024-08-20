import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link, useLocation } from 'react-router-dom';
import { getWorkshops, getProjects } from '../../client';

function Nav({ isMenuOpen, toggleMenu, closeMenu }) {
  const location = useLocation();
  const isProjectsRoute = location.pathname.startsWith('/projects');
  const isWorkshopsRoute = location.pathname.startsWith('/workshops');

  const [workshops, setWorkshops] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    getWorkshops().then(data => setWorkshops(data));
    getProjects().then(data => setProjects(data));
  }, []);

  useEffect(() => {
    // Cerrar submenús cuando cambie la ruta
    if (!isProjectsRoute && !isWorkshopsRoute) {
      setActiveSubMenu(null);
    }
  }, [location.pathname]);

  const handleSubmenuClick = (menuType) => {
    setActiveSubMenu(prev => prev === menuType ? null : menuType);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '238px', marginLeft: '0px' }}>
      <img src="https://i.postimg.cc/JhNNzjYG/logoweb-Marite-Ph.webp" alt="" style={{ width: '270px', height: '270px', padding: '0px' }} />
      <nav className="navbar navbar-expand-lg" style={{ marginLeft: '0' }}>
        <section className="container-fluid" style={{ width: '238px' }}>
          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav row" style={{ width: '238px' }}>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width: '238px' }}>
                  <Link to='/' className="nav-link" onClick={handleLinkClick}>Home</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width: '238px' }}>
                  <span className="nav-link" onClick={() => handleSubmenuClick('workshops')}>Workshops</span>
                  {activeSubMenu === 'workshops' && (
                    <div className="submenu">
                      <ul>
                        {workshops.map(workshop => (
                          <li key={workshop.id}><Link to={`/workshops/${encodeURIComponent(workshop.title)}`} onClick={handleLinkClick}>{workshop.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width: '238px' }}>
                  <span className="nav-link" onClick={() => handleSubmenuClick('projects')}>Projects</span>
                  {activeSubMenu === 'projects' && (
                    <div className="submenu">
                      <ul>
                        {projects.map(project => (
                          <li key={project.id}><Link to={`/projects/${encodeURIComponent(project.title)}`} onClick={handleLinkClick}>{project.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width: '238px' }}>
                  <Link to='/statement' className="nav-link" onClick={handleLinkClick}>Statement</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width: '238px' }}>
                  <Link to='/bio' className="nav-link" onClick={handleLinkClick}>Bio</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width: '238px' }}>
                  <Link to='/contacto' className="nav-link" onClick={handleLinkClick}>Contact</Link>
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
