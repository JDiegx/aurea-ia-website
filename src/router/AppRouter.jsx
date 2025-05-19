import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default AppRouter