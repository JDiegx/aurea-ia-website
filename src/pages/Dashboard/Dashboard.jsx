import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Si guardas más datos, elimínalos aquí también
    navigate('/login');
  };

  return (
    <div className='text-black p-6'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <button
        onClick={handleLogout}
        className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded'
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
