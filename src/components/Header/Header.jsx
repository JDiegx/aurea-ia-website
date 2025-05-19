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
        <div className='w-[100px]'>
          <img src="/pyme-up-gray-logo.png" alt="Gray logo of PymeUp" />
        </div>
        <button onClick={() => { openMenu() }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#373737" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </header>
      <SideBarMobile isOpen={isOpen} closeMenu={closeMenu} />
      <div className='w-full h-[800px]'>
      </div>
    </>
  )
}

export default Header