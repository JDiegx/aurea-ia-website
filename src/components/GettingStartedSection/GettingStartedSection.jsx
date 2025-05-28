import React from 'react'

const GettingStartedSection = ({userPhoto ,tittle, description, userTestimony, userName}) => {
    return (
        <div className='w-full max-w-[440px] font-[Poppins] flex flex-col justify-center items-center lg:max-w-[500px]'>
            <div className='w-[90%] h-[320px] bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-[#222189] mx-auto rounded-3xl p-5 lg:p-5 lg:h-[300px]'>
                <h4 className='lg:w-[365px] text-[24px] lg:text-[28px]'>{tittle}</h4>
                <p className='lg:w-[365px] text-[15px] lg:text-[16px]'>{description}</p>
            </div>
            <div className='w-[85%] h-[250px] bg-white shadow-lg mt-[-140px] rounded-3xl text-black flex flex-col justify-center items-center gap-2.5 lg:h-[280px] lg:mt-[-120px] lg:gap-5'>
                <img src={`/users/${userPhoto}.png`} className='w-[60px]' alt="Image of Andrés M. , E-commerce Entrepreneur" />
                <h5 className='w-[230px] text-[15px] font-semibold lg:w-[340px] lg:text-[17px]'>{userTestimony}</h5>
                <p className='text-[12px] text-[#555555] lg:text-[14px]'>{userName}</p>
            </div>
        </div>
    )
}

export default GettingStartedSection