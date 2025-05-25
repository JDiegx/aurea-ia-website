import React from "react";

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="w-[300px] h-[90px] flex items-center justify-center gap-[15px]" >
            <div className="w-[75px] h-[75px] bg-[#404040] rounded-full flex justify-center items-center">
                {icon}
            </div>
            <div className="w-[200px]">
                <h1 className="text-[19px] text-[#555555] font-bold">{title}</h1>
                <p className="text-[14px] text-[#B2B2B2] leading-[1.1]">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
