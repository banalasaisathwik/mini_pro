import React from "react";

const House = ({ type, tokenAmount, duration, imageUrl }) => {
    return (
        <a href={`/booking/${type}`} className="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-sm bg-stone-500 text-white cursor-pointer h-28">
            <div className="w-7/12 pl-3 p-3 text-text1 flex flex-col justify-center">
                <div className="text-xs text-primary mb-2">
                    <a className="flex items-center">
                        <span className="font-bold tracking-wide text-sm text-pink-400">{type}</span>
                    </a>
                </div>
                <div className="text-sm text-text2 tracking-wider">Token amount : {tokenAmount}</div>
                <div className="text-sm text-text2 tracking-wider">Duration: {duration}</div>
            </div>
            <div className="lg:flex flex w-5/12 p-2">
                <img src={imageUrl} className="rounded-xl object-cover w-full h-full" alt="Spa" />
            </div>
        </a>
    );
}

const HouseCleaning = () => {
    const houseCleaningSubServices = [
        {
            type: "Deep Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?deepcleaning"
        },
        {
            type: "Carpet Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?carpetcleaning"
        },
        {
            type: "Upholstery Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?upholsterycleaning"
        },
        {
            type: "Window Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?windowcleaning"
        },
        {
            type: "Tile and Grout Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?tilegroutcleaning"
        },
        {
            type: "Appliance Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?appliancecleaning"
        },
        {
            type: "Air Duct Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?airductcleaning"
        },
        {
            type: "Pressure Washing",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?pressurewashing"
        },
        {
            type: "Gutter Cleaning",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?guttercleaning"
        },
        {
            type: "Disinfection Services",
            tokenAmount: 1000,
            duration: "2hrs",
            imageUrl: "https://source.unsplash.com/1600x900/?disinfectionservices"
        }
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            {houseCleaningSubServices.map((service, index) => (
                <House
                    key={index}
                    type={service.type}
                    tokenAmount={service.tokenAmount}
                    duration={service.duration}
                    imageUrl={service.imageUrl}
                />
            ))}
        </div>
    );
}

export default HouseCleaning;
