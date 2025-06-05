import React from 'react'

const Login = () => {
  return (
    <section className='w-full h-auto bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-[#222189]'>
      <header className='w-full h-[20px] flex justify-center items-center pr-3'>
      </header>
      <form action="" className=' max-w-[380px] w-full h-[720px] bg-white rounded-t-3xl flex flex-col items-center text-[#171835] mt-[40px] pt-[20px] mx-auto xs:bg-orange-500' >
        <h1 className='text-[45px] font-bold'>Hello!</h1>
        <p className='w-[90%] text-[16px] mt-[-5px] font-medium text-center'>Nice to see you again. Sign in to continue.</p>
        <input
          type="text"
          placeholder="User"
          className="bg-[#b1b1b11e] text-[15px] w-[90%] h-[50px] rounded-[10px] px-3 mt-5 focus:outline-none focus:ring-2 focus:ring-[#3B3AEF]/40"
        />
        <input
          type="text"
          placeholder="Password"
          className="bg-[#b1b1b12f] text-[15px] w-[90%] h-[50px] rounded-[10px] px-3 mt-5 focus:outline-none focus:ring-2 focus:ring-[#3B3AEF]/40"
        />
        <p className=' w-[90%] text-[15px] font-medium mt-7'>By signing up or logging in, you consent to Aurea <span className='underline' > Terms of Use</span> and <span className='underline'> Privacy Policy.</span></p>
        <button className='w-[200px] h-[45px] mt-[40px] flex justify-center items-center rounded-3xl font-bold bg-[#3B3AEF] text-white'>Grow</button>
        <div className='w-[85%] flex justify-between items-center mt-[30px]'>
          <p className='text-[15px] font-bold text-[#3B3AEF] underline'>Forgot password?</p>
          <p className='text-[15px] font-bold text-[#3B3AEF] underline'>Sing up</p>
        </div>
        <div className="flex items-center w-[90%] mt-7 mb-3">
          <div className="flex-grow h-px bg-[#b1b1b1] opacity-30" />
          <span className="mx-2 text-[#b1b1b1] text-sm font-medium">o</span>
          <div className="flex-grow h-px bg-[#b1b1b1] opacity-30" />
        </div>
        <button className='w-[90%] h-[50px] border border-[#b1b1b1] bg-[#b1b1b11a] rounded-[10px] flex items-center justify-center gap-3 text-[#171835] font-medium  transition-all duration-200'>
          <img src="/icons/Google__G__logo.svg.webp" alt="Google" className="w-5 h-5" />
          <span className="text-[15px]">Log In with Google</span>
        </button>
        <section className="w-full h-[100px] flex justify-center items-center">
          <p className="text-[15px] font-medium text-[#555555b7]">
            ©2025 Aurea. All rights reserved.
          </p>
        </section>
      </form>
    </section>
  )
}

export default Login