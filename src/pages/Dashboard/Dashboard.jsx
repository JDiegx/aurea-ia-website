import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem('greeting');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('greeting');
    navigate('/login');
  };

  return (
    <section className='font-[Poppins]'>
      <header className='w-full h-[230px] bg-[#3B3AEF] p-3 flex'>
        <div>
          <h1 className='text-[30px] font-medium'>Dashboard</h1>
          <p className='text-[15px] ml-1 mt-[-5px] text-[#ffffffab]'>Welcome Back <span className='font-semibold'>{userName}</span>!</p>
        </div>
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-white mt-[5px] ml-auto flex items-center justify-center'>
          <img src="/users/user-default.png" className='w-full' alt="profile picture of" />
        </div>
      </header>
      <div className='w-[90%] h-[50px] bg-white mx-auto mt-[-135px] rounded-2xl p-1.5 flex items-center justify-between'>
        <div className='flex items-center'>
          <div className=' w-[35px] h-[35px] flex items-center justify-center ml-1.5  bg-[#4e4ef3] rounded-[5px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cash-stack w-[25px] " viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
            </svg>
          </div>
          <div className='w-[60px] h-[40px] text-black flex flex-col justify-center ml-2 '>
            <p className='text-[13px]'>Balance</p>
            <h2 className='text-[15px] mt-[-3px] font-semibold'>$ 0.00</h2>
          </div>
        </div>
        <Link to={"/chat"} className='w-[120px] h-[30px] rounded-[6px] flex items-center justify-center gap-1 mr-1.5 bg-[#4e4ef3]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" />
          </svg>
          Grow
        </Link>
      </div>
      <div className='w-[90%] h-[140px] bg-white mx-auto mt-[15px]  rounded-2xl shadow-lg '>
      </div>
      <main className='w-full h-[300px] text-black bg-[#6868681f] mt-5 p-2.5'>
        <h3 className='text-[20px]'>Your graphics</h3>
      </main>
      <button
        onClick={handleLogout}
        className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded'
      >
        Cerrar sesión
      </button>
    </section>
  );
};

export default Dashboard;
