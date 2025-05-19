import React from 'react'

const SideBarMobile = ({ isOpen, closeMenu }) => {
    return (
        <aside className={`fixed top-0 right-0 h-full w-64 bg-[#bbbbbb49] text-[#373737] backdrop-blur-[30px] shadow-xl transform transition-transform duration-300 ease-in-out z-40  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={() => { closeMenu() }} className="absolute top-3 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </button>
            <div className='w-full h-[500px] flex flex-col justify-between items-center mt-[50px]'>
                <ul className='w-full flex flex-col gap-[15px] pl-[20px] '>
                    <li className='font-semibold text-[20px]'>Home</li>
                    <li className='font-semibold text-[20px]'>Problems</li>
                    <li className='font-semibold text-[20px]'>Solutions</li>
                    <li className='font-semibold text-[20px]'>About</li>
                    <li className='font-semibold text-[20px]'>Blog</li>
                    <li className='font-semibold text-[20px]'>Team</li>
                </ul>
                <button className="w-[220px] h-11 font-medium border-2 border-[#373737] rounded-2xl cursor-pointer transition ease-in-out hover:bg-[#373737] hover:border-2 hover:text-white">I’m Ready to Grow</button>
            </div>
        </aside>
    )
}

export default SideBarMobile