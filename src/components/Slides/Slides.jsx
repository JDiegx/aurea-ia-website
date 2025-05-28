import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Slides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: "/slide1-pymeup.png",
            title: (
                <>
                    Boost your SME with <br />
                    <span className="text-[#3B3AEF]">Intelligence</span>
                </>
            ),
            subtitle: "With PymeUp, make smarter decisions, cut costs, and improve your business profitability in real time.",
            buttonText: "Get Started",
        },
        {
            img: "/slide2-pymeup.png",
            title: (
                <>
                    Everything Your <br />
                    <span className="text-[#3B3AEF]">Business Needs</span>
                </>
            ),
            subtitle: "Analyze your financial activity, receive personalized recommendations, and keep full control of your income and expenses.",
            buttonText: "Next",
        },
        {
            img: "/slide3-pymeup.png",
            title: (
                <>
                    Create Your <span className="text-[#3B3AEF]">Account</span>
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
            {/* Header con logo */}
            <header className='w-full h-[60px] flex justify-end items-center pr-5 pt-4'>
                <img src="/aurea-ia-white-logo.png" className='w-[100px]' alt="Logo PymeUp" />
            </header>

            {/* Slide dinámico */}
            <main className='absolute bottom-0 w-full h-[75%] bg-white rounded-t-3xl flex flex-col items-center text-[#171835] px-6 pt-[130px] transition-all duration-500'>
                {/* Imagen con fondo naranja y posicionamiento */}
                <div className="absolute top-[-120px] w-[240px] h-[240px] rounded-full bg-orange-400 flex justify-center items-center shadow-lg">
                    <img
                        src={slides[currentSlide].img}
                        alt="Slide visual"
                        className="w-[180px] object-contain"
                    />
                </div>

                <h3 className="text-sm font-bold text-[#3B3AEF] mb-2">PymeUp</h3>
                <h1 className="text-2xl font-extrabold text-center leading-tight">
                    {slides[currentSlide].title}
                </h1>
                <p className="text-center text-sm font-medium text-gray-600 mt-2 px-2">
                    {slides[currentSlide].subtitle}
                </p>

                {/* Botón: cambiar acción en el último slide */}
                {currentSlide < slides.length - 1 ? (
                    <button
                        onClick={handleNext}
                        className='w-[170px] h-[40px] flex justify-center items-center rounded-3xl font-bold bg-[#3B3AEF] text-white mt-[30px]'
                    >
                        {slides[currentSlide].buttonText}
                    </button>
                ) : (
                    <Link
                        to="/signup" // ruta hacia el registro
                        className='w-[170px] h-[40px] flex justify-center items-center rounded-3xl font-bold bg-[#3B3AEF] text-white mt-[30px]'
                    >
                        {slides[currentSlide].buttonText}
                    </Link>
                )}

                {/* Indicadores */}
                <div className="flex gap-2 mt-4">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#3B3AEF]' : 'w-2 bg-gray-300'}`}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Slides;
