import React from "react";

const Spa = ({ type, tokenAmount, duration, imageUrl }) => {
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

const SpaList = () => {
    const spaSubServices = [
        {
            type: "Massage Therapy",
            description: "Relax and rejuvenate with our variety of massage therapies, including Swedish, deep tissue, hot stone, and aromatherapy massages.",
            imageUrl: "https://tse4.mm.bing.net/th?id=OIP.wdekuHJACEdZzI1xpZLnewHaE8&pid=Api&P=0&h=220",
            tokenAmount: 1200
        },
        {
            type: "Facials",
            description: "Experience our luxurious facials tailored to your skin type, including deep cleansing, hydrating, anti-aging, and acne treatments.",
            imageUrl: "https://tse4.mm.bing.net/th?id=OIP.vJ3AjgMLZYPXL_iDy6gUpAHaFA&pid=Api&P=0&h=220",
            tokenAmount: 1500
        },
        {
            type: "Body Treatments",
            description: "Indulge in body scrubs, wraps, and exfoliation treatments designed to nourish your skin, improve circulation, and promote relaxation.",
            imageUrl: "https://tse1.mm.bing.net/th?id=OIP.qgoFMgfdcZ4AuvyXXVRY5wHaHa&pid=Api&P=0&h=220",
            tokenAmount: 1800
        },
        {
            type: "Manicure and Pedicure",
            description: "Pamper yourself with our professional manicure and pedicure services, including nail shaping, cuticle care, and polish application.",
            imageUrl: "https://tse1.mm.bing.net/th?id=OIP.4PHeMKQnWEW0ppoNlVJvqQHaE8&pid=Api&P=0&h=220",
            tokenAmount: 1000
        },
        {
            type: "Waxing",
            description: "Achieve smooth, hair-free skin with our waxing services for various body areas, including eyebrows, legs, arms, bikini line, and more.",
            imageUrl: "https://source.unsplash.com/1600x900/?waxing",
            tokenAmount: 800
        },
        {
            type: "Sauna and Steam Room",
            description: "Detoxify and relax in our sauna and steam room facilities, promoting circulation, relieving stress, and enhancing overall well-being.",
            imageUrl: "https://source.unsplash.com/1600x900/?sauna",
            tokenAmount: 2000
        },
        {
            type: "Hydrotherapy",
            description: "Enjoy the therapeutic benefits of hydrotherapy with our whirlpool baths, hydro massage, and water-based relaxation treatments.",
            imageUrl: "https://source.unsplash.com/1600x900/?hydrotherapy",
            tokenAmount: 2500
        }
    ];


    return (
        <div className="grid grid-cols-4 gap-4">

            {spaSubServices.map((spa, index) => (
                <Spa
                    key={index}
                    type={spa.type}
                    tokenAmount={spa.tokenAmount}
                    duration={spa.duration}
                    imageUrl={spa.imageUrl}
                />
            ))}
        </div>
    );
}

export default SpaList;
