import React, { useEffect, useState } from 'react';
import { verifyToken } from '../../services/authServices';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        await verifyToken(token);

        // Mostrar bienvenida si acaba de iniciar sesión
        if (sessionStorage.getItem('justLoggedIn') === 'true') {
          setShowWelcome(true);
          sessionStorage.removeItem('justLoggedIn');
          setTimeout(() => setShowWelcome(false), 4000); // Ocultar después de 4s
        }

        setLoading(false);
      } catch {
        localStorage.clear();
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading dashboard...</p>;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-black bg-gray-50">
      {showWelcome && (
        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg mb-6 text-center shadow-md">
          ¡Bienvenido de nuevo!
        </div>
      )}

      <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>
      {/* Aquí el contenido real del dashboard */}
      <p className="text-gray-600">Aquí irán los datos y funcionalidades del sistema.</p>
    </div>
  );
};

export default Dashboard;
