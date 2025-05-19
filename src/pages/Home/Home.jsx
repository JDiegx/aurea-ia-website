import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden w-full h-[670px] bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-white sm:h-[780px] xl:h-[950px]">
        <header className="w-full h-[60px] flex justify-start items-center">
          <img
            src="/pyme-up-white-logo.png"
            className="w-20 ml-4 sm:w-[88px] xl:w-[90px]"
            alt="Logo of PymeUp"
          />
        </header>
        <div className="w-full flex flex-col justify-evenly items-center mb-[20px] sm:mb-[40px] lg:mb-[30px]">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-[50px] font-normal sm:text-[60px] md:text-[65px] lg:text-[80px] xl:text-[90px]"
          >
            Revolutionize
          </motion.h1>
          <motion.h2
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-[35px] mt-[-20px] font-medium sm:text-[37px] sm:mt-[-23px] md:text-[40px] md:mt-[-25px] lg:text-[50px] lg:mt-[-30px] xl:text-[55px] xl:mt-[-35px]"
          >
            Your SMEs.
          </motion.h2>
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="w-[300px] text-[13px] text-center mt-[-5px] sm:w-[320px] sm:text-[14px] md:w-[360px] md:text-[15px] xl:w-[450px] xl:text-[18px]"
          >
            Uncover hidden expenses, save smarter, and make decisions based on
            real data.
          </motion.p>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Link
              to="/slides"
              className="w-[220px] h-11 flex items-center justify-center font-medium mt-4 border-2 rounded-2xl cursor-pointer transition ease-in-out hover:bg-white hover:border-2 hover:text-[#3B3AEF] lg:mt-5"
            >
              I’m Ready to Grow
            </Link>
          </motion.div>
        </div>
        <div className="w-[250px] h-[80px] rounded-r-xl flex justify-center items-center gap-[8px] bg-white absolute left-0 top-[490px] shadow-lg z-10 overflow-hidden md:top-[600px] lg:w-[260px] xl:w-[270px] xl:top-auto xl:bottom-[40px] xl:bg-transparent xl:shadow-none">
          <div className="w-[100px] h-[80px] flex flex-col items-center justify-evenly">
            <div className="w-full h-[23px] flex justify-evenly items-center mb-[-15px]">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill text-amber-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
            </div>
            <p className="text-[35px] text-[#555555] font-semibold">500+</p>
          </div>
          <div>
            <p className="w-[130px] text-[13px] text-[#555555] font-bold leading-[15px]">
              SMALL AND MEDIUM-SIZED BUSINESSES GROW WITH PYMEUP.
            </p>
          </div>
        </div>
        <motion.img
          src="/mobile-mockup.png"
          alt="Image of Mobile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[350px] m-auto xl:w-[370px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-white to-transparent z-0"></div>
      </section>
      <Header />
    </>
  );
};

export default Home;
