import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
import Chat from '../pages/Chat/Chat.jsx'
import Slides from '../components/Slides/Slides.jsx'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/slides" element={<Slides/>} />
      </Routes>
    </>
  )
}

export default AppRouter