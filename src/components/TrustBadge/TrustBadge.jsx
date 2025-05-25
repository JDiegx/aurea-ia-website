import React from 'react'

const TrustBadge = () => {
    return (
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
                    SMALL AND MEDIUM-SIZED BUSINESSES GROW WITH AUREA-IA.
                </p>
            </div>
        </div>
    )
}

export default TrustBadge