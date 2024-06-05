import React, { useState, useEffect } from "react";
import './nav.css'
import { Link, useLocation } from 'react-router-dom';
import { getWorkshops, getProjects } from "../../client";

function Nav() {
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '238px', marginLeft:'0px' }}>
      <img src="https://i.postimg.cc/DzZt49VG/Imagen-de-Whats-App-2024-04-16-a-las-12-13-01-09b890a6.jpg" alt="" style={{ width: '270px', height: '270px', padding: '0px' }} />
      <nav className=" navbar navbar-expand-lg " style={{ marginLeft: '0' }}>
        <section className="container-fluid" style={{width: '238px'}}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav row" style={{ width:'238px'}} >
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/' className="nav-link" >Home</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/workshops' className="nav-link">Workshops</Link>
                  {isWorkshopsRoute && (
                    <div className="submenuWorkshops">
                      <ul>
                        {workshops.map(workshop => (
                          <li key={workshop.id}><Link to={`/workshops/${encodeURIComponent(workshop.title)}`} style={{color:'black'}}>{workshop.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/projects' className="nav-link" >Projects</Link>
                  {isProjectsRoute && (
                    <div className="submenu">
                      <ul>
                        {projects.map(project => (
                          <li key={project.id}><Link to={`/projects/${encodeURIComponent(project.title)}`} style={{color:'black'}}>{project.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/statement' className="nav-link" >Statement</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/Bio' className="nav-link">Bio</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'238px'}}>
                  <Link to='/Contacto' className="nav-link">Contact</Link>
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
