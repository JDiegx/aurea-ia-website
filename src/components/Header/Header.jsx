import React from 'react'
import { useState } from 'react'
import SideBarMobile from '../SideBarMobile/SideBarMobile.jsx'
import { Link } from 'react-router-dom'

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
      <header className='w-full h-16 backdrop-blur-2xl bg-[#ffffff73] shadow-md sticky top-0 flex justify-between items-center px-[16px] xl:px-[20px]'>
        <div className='w-[100px]'>
          <img src="/aurea-ia-gray-logo.png" alt="Gray logo of PymeUp" />
        </div>
        <button className='md:hidden' onClick={() => { openMenu() }} aria-label="Open mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#373737" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
        <nav className='hidden md:flex'>
          <ul className='w-[370px] mr-[-50px] font-medium flex justify-between items-center xl:w-[400px]'>
            <li className='text-[15px] cursor-pointer text-[#555555] transition ease-in-out hover:text-[#5555557e]'>Home</li>
            <li className='text-[15px] cursor-pointer text-[#555555] transition ease-in-out hover:text-[#5555557e]'>Problems</li>
            <li className='text-[15px] cursor-pointer text-[#555555] transition ease-in-out hover:text-[#5555557e]'>Solutions</li>
            <li className='text-[15px] cursor-pointer text-[#555555] transition ease-in-out hover:text-[#5555557e]'>About</li>
            <li className='text-[15px] cursor-pointer text-[#555555] transition ease-in-out hover:text-[#5555557e]'>Blog</li>
            <li className='text-[15px] cursor-pointer text-[#555555] transition ease-in-out hover:text-[#5555557e]'>Team</li>
          </ul>
        </nav>
        <Link to="/slides" className='hidden md:block'>
          <button className="w-[170px] text-[14px] h-[37px] font-normal bg-[#555555] text-white rounded-2xl border-2 border-[#555555] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#555555]">
            I’m Ready to Grow
          </button>
        </Link>
      </header>
      <SideBarMobile isOpen={isOpen} closeMenu={closeMenu} />
    </>
  )
}

export default Header