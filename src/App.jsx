import { useState } from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signout from './pages/Signup'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signout />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
