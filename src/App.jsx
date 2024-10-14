import { useState } from 'react'
import Create from './Create'
import Update from './Update'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
