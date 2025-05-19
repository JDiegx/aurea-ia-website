import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <motion.div
            className='w-full h-dvh flex flex-col items-center justify-center bg-gradient-to-b from-[#3B3AEF] to-[#171835]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className='w-full h-[70%] flex flex-col items-center justify-center bg-white text-[#171835] absolute bottom-0 rounded-t-3xl'
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
                <motion.img
                    src="/404-not-found-pymeup.png"
                    className='w-[320px] absolute top-[-180px]'
                    alt="Not Found"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                />
                <h1 className='font-extrabold text-[30px]'>404 - NotFound</h1>
                <p className='font-semibold mt-[-5px]'>Sorry, Website under construction</p>
                <Link
                    to="/"
                    className='w-[170px] h-[40px] flex justify-center items-center rounded-3xl font-bold bg-[#3B3AEF] text-white mt-[30px]'
                >
                    Back to Home
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default NotFound
