import React, { useState } from 'react'
import { loginUser } from '../../services/loginServices'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!user || !password) {
      setError('Oops! Please enter both username and password.')
      setTimeout(() => setError(null), 4000)
      return
    }

    setLoading(true)
    try {
      const data = await loginUser(user, password)
      setLoading(false)
      alert(`Login successful. Token: ${data.token}`)
      console.log('Backend response:', data)
    } catch (err) {
      setLoading(false)
      setError(
        'Oops! It seems you entered the wrong username or password. Please try again.'
      )
      setTimeout(() => setError(null), 4000)
    }
  }

  return (
    <section className='w-full h-auto bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-[#222189]'>
      <form
        onSubmit={handleSubmit}
        className='w-full h-[750px] bg-white flex flex-col items-center text-[#171835] mt-[40px] mx-auto'
      >
        <h1 className='text-[45px] font-bold'>Hello!</h1>
        <p className='w-[90%] text-[16px] mt-[-5px] font-medium text-center'>
          Nice to see you again. Sign in to continue.
        </p>
        <input
          type='text'
          placeholder='User'
          className='bg-[#b1b1b11e] text-[15px] w-[90%] h-[45px] rounded-[10px] px-3 mt-5 focus:outline-none focus:ring-2 focus:ring-[#3B3AEF]/40'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <div className='relative w-[90%] mt-5'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='bg-[#b1b1b12f] text-[15px] w-full h-[45px] rounded-[10px] px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#3B3AEF]/40'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#aaa] hover:text-[#5a68f5] transition-colors duration-200 p-1 focus:outline-none'
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.154-3.364m2.21-1.997A9.969 9.969 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.056 10.056 0 01-4.182 5.211m-5.245-5.246l5.245 5.246M3 3l18 18'
                />
              </svg>
            )}
          </button>
        </div>
        {error && (
          <div className='mt-2 w-[90%] min-h-[40px] text-center transition-opacity duration-300'>
            <p className='text-red-600 text-sm'>{error}</p>
          </div>
        )}
        <p className='w-[90%] text-[15px] font-medium mt-4'>
          By signing up or logging in, you consent to Aurea{' '}
          <span className='underline'>Terms of Use</span> and{' '}
          <span className='underline'>Privacy Policy.</span>
        </p>
        <button
          type='submit'
          disabled={loading}
          className={`w-[200px] h-[45px] mt-[40px] flex justify-center items-center rounded-3xl font-bold text-white ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3B3AEF]'
          }`}
        >
          {loading ? 'Loading...' : 'Grow'}
        </button>
        <div className='w-[85%] flex justify-between items-center mt-[30px]'>
          <p className='text-[15px] font-bold text-[#3B3AEF] underline cursor-pointer'>
            Forgot password?
          </p>
          <Link to={'/signup'} className='text-[15px] font-bold text-[#3B3AEF] underline'>
            Sign up
          </Link>
        </div>
        <div className='flex items-center w-[90%] mt-7 mb-3'>
          <div className='flex-grow h-px bg-[#b1b1b1] opacity-30' />
          <span className='mx-2 text-[#b1b1b1] text-sm font-medium'>or</span>
          <div className='flex-grow h-px bg-[#b1b1b1] opacity-30' />
        </div>
        <button className='w-[90%] h-[50px] border border-[#b1b1b1] bg-[#b1b1b11a] rounded-[10px] flex items-center justify-center gap-3 text-[#171835] font-medium transition-all duration-200'>
          <img
            src='/icons/Google__G__logo.svg.webp'
            alt='Google'
            className='w-5 h-5'
          />
          <span className='text-[15px]'>Log In with Google</span>
        </button>
        <section className='w-full h-[100px] flex justify-center items-center'>
          <p className='text-[15px] font-medium text-[#555555b7]'>
            ©2025 Aurea. All rights reserved.
          </p>
        </section>
      </form>
    </section>
  )
}

export default Login
