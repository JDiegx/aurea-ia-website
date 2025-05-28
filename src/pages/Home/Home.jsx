import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoHeader from "../../components/LogoHeader/LogoHeader.jsx";
import TrustBadge from "../../components/TrustBadge/TrustBadge.jsx";
import MobileMockup from "../../components/MobileMockup/MobileMockup.jsx";
import Header from "../../components/Header/Header.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection.jsx";

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
      <section className="relative overflow-hidden w-full h-[670px] bg-gradient-to-b from-[#3B3AEF] via-[#3B3AEF] to-[#222189] sm:h-[780px] xl:h-[100vh]">
        <LogoHeader />
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
        <TrustBadge />
        <MobileMockup />
      </section>
      <section>
        <Header />
        <FeaturesSection />
        <div className="w-full h-[200px] font-[Poppins] flex justify-center items-center md:h-[200px]">
          <p className="w-[280px] text-center text-[22px] font-medium text-[#555555] sm:w-[600px] sm:text-[21px] md:text-[23px] xl:w-[700px] xl:text-[26px]">
            <span className="text-[#222189]">Aurea</span> Not only manages, it teaches you to make financial decisions like an expert.
          </p>
        </div>
        <HowItWorksSection />
      </section>
      <main className="w-full h-[800px]">

      </main>
    </>
  );
};

export default Home;
