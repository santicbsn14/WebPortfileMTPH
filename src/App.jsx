import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Componentes/home'
import Workshops from './Componentes/Workshops/workshops'
import Projects from './Componentes/Projects/projects'
import Statement from './Componentes/statement'
import Bio from './Componentes/bio'
import Nav from './Componentes/Nav/nav'
import Contact from './Componentes/contact'

function App() {

  return (
    <div >
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/workshops'} element={<Workshops/>}/>
      <Route path={'/projects'} element={<Projects/>}/>
      <Route path={'/statement'} element={<Statement/>}/>
      <Route path={'/bio'} element={<Bio/>}/>
      <Route path={'/Contacto'} element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
