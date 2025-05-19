import React from 'react'
import { useState } from 'react'
import SideBarMobile from '../SideBarMobile/SideBarMobile.jsx'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className='w-full h-16 bg-white shadow-md sticky top-0 flex justify-between items-center px-[15px]'>
        <div className='w-[90px]'>
          <img src="/pyme-up-gray-logo.png" alt="Gray logo of PymeUp" />
        </div>
        <button className='md:hidden' onClick={() => { openMenu() }} aria-label="Open mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#373737" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
          <nav className='hidden md:flex'>
            <ul className='w-[380px] text-[#555555] font-semibold flex justify-evenly items-center'>
              <li>Home</li>
              <li>Problems</li>
              <li>Solutions</li>
              <li>About</li>
              <li>Blog</li>
              <li>Team</li>
            </ul>
          </nav>
          <button className="hidden md:block w-[180px] h-11 font-medium bg-[#555555] border-2 rounded-2xl cursor-pointer transition ease-in-out hover:bg-white hover:border-2 hover:text-[#555555]" >I’m Ready to Grow</button>
      </header>
      <SideBarMobile isOpen={isOpen} closeMenu={closeMenu} />
      <main className='w-full h-[800px]'>
      </main>
    </>
  )
}

export default Header