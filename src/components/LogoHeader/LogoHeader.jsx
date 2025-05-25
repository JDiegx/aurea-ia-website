import React from "react";

const LogoHeader = () => {
    return (
        <header className="w-full h-[60px] flex justify-start items-center">
            <img
                src="/aurea-ia-white-logo.png"
                className="w-[90px] ml-4  xl:w-[100px]"
                alt="Logo of PymeUp"
            />
        </header>
    );
};

export default LogoHeader;
