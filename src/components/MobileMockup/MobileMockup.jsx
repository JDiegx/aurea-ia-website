import React from 'react'
import { motion } from 'framer-motion'

const MobileMockup = () => {
    return (
        <>
            <motion.img
                src="/mobile-mockup.png"
                alt="Image of Mobile"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-[350px] m-auto xl:w-[370px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent z-0 xl:h-[400px]"></div>
        </>
    )
}

export default MobileMockup