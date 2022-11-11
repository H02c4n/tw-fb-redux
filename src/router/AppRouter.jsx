import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import AddQuestion from '../pages/addQuestion/AddQuestion'

import Home from '../pages/home/Home'
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addnew' element={<AddQuestion />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter;