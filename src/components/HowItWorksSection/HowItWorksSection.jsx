import React from 'react'
import { Link } from 'react-router-dom'

const HowItWorksSection = () => {
  return (
    <div className="w-[90%] max-w-[400px] font-[Poppins] bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-[#222189] mx-auto rounded-3xl overflow-hidden flex justify-center items-center p-5 sm:w-[95%] sm:max-w-[800px] sm:h-[370px] sm:justify-evenly lg:max-w-[1000px] lg:h-[390px] xl:max-w-[1300px] xl:justify-around xl:rounded-4xl xl:h-[470px]">
      <div className="w-full h-auto flex flex-col justify-start items-center gap-2 sm:w-[270px] sm:items-start md:w-[390px] lg:w-[450px] xl:w-[550px]">
        <h3 className="text-[25px] font-normal md:text-[27px] lg:text-[32px] xl:text-[37px]">
          Aurea uses artificial intelligence to analyze your SME’s performance
        </h3>
        <p className="text-[15px] text-white lg:text-[17px] xl:text-[20px]">
          situation and provide personalized recommendations to reduce costs, optimize resources, and increase your revenue. It’s like having a finance team—without the extra salaries.
        </p>
        <Link to={"/slides"}>
          <button className='w-[250px] h-[45px] bg-white text-[#222189] cursor-pointer mt-5 rounded-[15px] font-medium border-2 border-white transition ease-in-out hover:bg-transparent hover:text-white'>I’m Ready to Grow</button>
        </Link>
      </div>
      <div className='w-[300px] h-[300px] hidden sm:flex justify-center items-center lg:w-[350px] xl:w-[430px]'>
        <img src="/up.png" className='w-full' alt="Growth illustration" />
      </div>
    </div>
  )
}

export default HowItWorksSection
