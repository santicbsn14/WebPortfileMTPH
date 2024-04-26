import React, { useState } from "react";
import './nav.css'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  
  const location = useLocation();
  const isProjectsRoute = location.pathname === '/projects';
  const isWorkshopsRoute= location.pathname === '/workshops';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: 'max-content', marginLeft:'0px' }}>
      <img src="https://i.postimg.cc/DzZt49VG/Imagen-de-Whats-App-2024-04-16-a-las-12-13-01-09b890a6.jpg" alt="" style={{ width: '270px', height: '270px', padding: '0px' }} />
      <nav className=" navbar navbar-expand-lg " style={{ marginLeft: '0', width: 'max-content' }}>
        <section className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav row" style={{ width:'max-content'}} >
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'max-content'}}>
                  <Link to='/' className="nav-link" >Home</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'max-content'}}>
                  <Link to='/workshops' className="nav-link">Workshops</Link>
                  {isWorkshopsRoute && (
                    <div className="submenuWorkshops">
                      <ul>
                        <li><Link to='/workshops' style={{color:'black'}}>Taller de Fotografía Creativa</Link></li>
                        <li><Link to='/workshops' style={{color:'black'}}>Taller de Escritura Creativa</Link></li>
                        <li><Link to='/workshops' style={{color:'black'}}>Taller de Expresión Artística</Link></li>
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'max-content'}}>
                  <Link to='/projects' className="nav-link" >Projects</Link>
                  {isProjectsRoute && (
                    <div className="submenu">
                      <ul>
                        <li><Link to='/projects/subproject1' style={{color:'black'}}>La flor marite</Link></li>
                        <li><Link to='/projects/subproject2' style={{color:'black'}}>Pepe</Link></li>
                        <li><Link to='/projects/subproject3' style={{color:'black'}}>Una carlotita y dos teresas</Link></li>
                      </ul>
                    </div>
                  )}
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'max-content'}}>
                  <Link to='/statement' className="nav-link" >Statement</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'max-content'}}>
                  <Link to='/Bio' className="nav-link">Bio</Link>
                </li>
              </div>
              <div className="col-lg-12">
                <li className="nav-item" style={{ width:'max-content'}}>
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
