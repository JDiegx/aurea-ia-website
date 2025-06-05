import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: "/slides/1.png",
            title: (
                <>
                    Boost your SME with <br />
                    <span className="">Intelligence</span>
                </>
            ),
            subtitle: "With Aurea, make smarter decisions, cut costs, and improve your business profitability in real time.",
            buttonText: "Get Started",
        },
        {
            img: "/slides/2.png",
            title: (
                <>
                    Everything Your <br />
                    <span className="">Business Needs</span>
                </>
            ),
            subtitle: "Analyze your financial activity, receive personalized recommendations, and keep full control of your income and expenses.",
            buttonText: "Next",
        },
        {
            img: "/slides/3.png",
            title: (
                <>
                    Create Your Account
                </>
            ),
            subtitle: "Join PymeUp and take your business to the next level. Start for free and experience the power of financial intelligence.",
            buttonText: "Sign Up",
        },
    ];

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            // Redireccionar o cerrar onboarding
            window.location.href = '/'; // Cambia esto si usas navegación con React Router
        }
    };

    return (
        <section className='w-full h-screen bg-gradient-to-b from-[#3B3AEF] to-[#222189] relative overflow-hidden'>
            <header className='w-full h-[50px] flex justify-end items-center pr-3'>
                <img src="/aurea-ia-white-logo.png" className='w-[80px]' alt="Logo PymeUp" />
            </header>
            <main className='absolute bottom-0 w-full h-[60%] bg-white rounded-t-3xl flex flex-col items-center text-[#171835]  pt-[70px] transition-all duration-500'>
                <div className="absolute top-[-180px] w-[270px] h-[270px] flex justify-center items-center sm:w-[300px] sm:h-[300px] sm:top-[-200px]">
                    <img
                        src={slides[currentSlide].img}
                        alt="Slide visual"
                        className="w-[100%] object-contain"
                    />
                </div>
                <div className='w-[290px] h-auto flex flex-col mt-7 gap-0.5 sm:w-[350px]'>
                    <h3 className="text-[14px] font-bold text-[#3B3AEF]">Aurea</h3>
                    <h1 className="text-[29px] font-extrabold text-center leading-tight sm:text-[35px] ">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-[14px] font-medium text-[#171835] mt-2 sm:text-[16px]">
                        {slides[currentSlide].subtitle}
                    </p>
                </div>
                <div className=' w-[300px] h-[60px] flex justify-evenly items-center mx-auto mt-2.5 sm:w-[370px]'>
                    {currentSlide < slides.length - 1 ? (
                        <button
                            onClick={handleNext}
                            className='w-[170px] h-[40px] flex justify-center items-center rounded-3xl font-bold bg-[#3B3AEF] text-white'
                        >
                            {slides[currentSlide].buttonText}
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className='w-[170px] h-[40px] flex justify-center items-center rounded-3xl font-bold bg-[#3B3AEF] text-white'
                        >
                            {slides[currentSlide].buttonText}
                        </Link>
                    )}
                    <div className="w-[50px] h-[10px] flex gap-2">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#3B3AEF]' : 'w-2 bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Slides;
