import React from 'react'
import { Link } from 'react-router-dom'
import GettingStartedSection from '../GettingStartedSection/GettingStartedSection'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HowItWorksSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 })

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <>
      <motion.div
        ref={ref1}
        variants={fadeInUp}
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        className="w-[90%] my-10 max-w-[400px] font-[Poppins] bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-[#222189] mx-auto rounded-3xl overflow-hidden flex justify-center items-center p-5 sm:w-[95%] sm:max-w-[850px] sm:h-[400px] md:h-[370px] sm:justify-evenly lg:max-w-[1000px] lg:h-[400px]"
      >
        <div className="w-full h-auto flex flex-col justify-start items-center gap-2 sm:w-[270px] sm:items-start md:w-[390px] lg:w-[450px]">
          <h3 className="text-[25px] font-normal md:text-[27px] lg:text-[32px]">
            Aurea uses artificial intelligence to analyze your SME’s performance
          </h3>
          <p className="text-[15px] text-white lg:text-[17px] ">
            situation and provide personalized recommendations to reduce costs, optimize resources, and increase your revenue. It’s like having a finance team—without the extra salaries.
          </p>
          <Link to={"/slides"}>
            <button className='w-[250px] h-[45px] bg-white text-[#222189] cursor-pointer mt-5 rounded-[15px] font-medium border-2 border-white transition ease-in-out hover:bg-transparent hover:text-white'>I’m Ready to Grow</button>
          </Link>
        </div>
        <div className='w-[300px] h-[300px] hidden sm:flex justify-center items-center lg:w-[350px]'>
          <img src="/up.png" className='w-full' alt="Growth illustration" />
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={fadeInUp}
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        className='w-full max-w-[1050px] mx-auto flex flex-col justify-center items-center gap-10 sm:flex-row lg:justify-between '
      >
        <GettingStartedSection
          userPhoto={"user-image"}
          tittle={"Tell Aurea how your business works."}
          description={"What do you sell? How much do you earn? What are your expenses?"}
          userTestimony={"I didn't know where to start with my finances. Aurea showed me step by step what to do. In just 3 weeks, I increased my income by 15%."}
          userName={"— Andrés M. , E-commerce Entrepreneur"}
        />
        <GettingStartedSection
          userPhoto={"user-image-2"}
          tittle={"Grow without stress"}
          description={"Aurea takes care of the finances. You focus on what you do best: growing your business"}
          userTestimony={"I felt like I was working non-stop but earning too little. PymeUp analyzed everything and gave me clear, actionable steps. It was like hiring a digital CFO!"}
          userName={"—Diana C., Creative Agency Founder"}
        />
      </motion.div>
    </>
  )
}

export default HowItWorksSection
