import { BrowserRouter, Routes, Route, NavLink, useNavigate  } from 'react-router-dom'
import './App.css'

import MainLayout from './components/MainLayout'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'

import {  AuthProvider } from './context/AuthContext'


function App() {

  return (
    <>
    <AuthProvider >
      <BrowserRouter> 
        <Routes>
          <Route  element={ <MainLayout />} >
            <Route path='/' element={ <Home />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={ <Register/>} />
            <Route path='*' element={ <NotFound />} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
