import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'
function App() {
  const nombre = 'Jonathan';

  return (
    <>
      <Header>
        <Nav usuario={nombre}/>
      </Header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login />} />
          <Route path='/tasks' element={ <Home />} />
          <Route path='/register' element={ <Register/> } />
          <Route path='*' element={ <NotFound />} />
        </Routes>
      
      </BrowserRouter>
      
      <Footer descripcion="DV | To_Do APP" />
    </>
  )
}

export default App
