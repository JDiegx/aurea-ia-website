import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import Chat from '../pages/Chat/Chat.jsx';
import Slides from '../components/Slides/Slides.jsx';
import Login from '../pages/Login/Login.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';

import PrivateRoute from './PrivateRoute.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/slides" element={<Slides />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Ruta protegida con PrivateRoute */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
