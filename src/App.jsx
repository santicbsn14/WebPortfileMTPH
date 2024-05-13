import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Componentes/Home/home'
import ProjectsContainer from './Componentes/Projects/projectsContainer'
import Statement from './Componentes/statement'
import Bio from './Componentes/bio'
import Nav from './Componentes/Nav/nav'
import Contact from './Componentes/contact'
import WorkshopsContainer from './Componentes/Workshops/workshopsContainer'

function App() {

  return (
    <div style={{width:'100%'}}>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/workshops/:title'} element={<WorkshopsContainer/>}/>
      <Route path={'/projects/:title'} element={<ProjectsContainer/>}/>
      <Route path={'/statement'} element={<Statement/>}/>
      <Route path={'/bio'} element={<Bio/>}/>
      <Route path={'/Contacto'} element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
