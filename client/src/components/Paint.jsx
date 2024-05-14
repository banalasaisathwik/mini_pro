import React from "react";

const Paint = ({ type, tokenAmount, duration, imageUrl }) => {
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

const PaintList = () => {
    const paintingSubServices = [
        { 
          type: "Interior Painting",
          tokenAmount: 800,
          duration: "4hrs",
          imageUrl: "https://img.freepik.com/free-photo/repairman-home-construction-using-roller-brush-as-guitar-guy-singing-while-renovating-house-apartment-redecoration-home-construction-while-renovating-improving-repair-decorating_482257-14172.jpg?t=st=1715571848~exp=1715575448~hmac=3b75aa546803cc066f575428f20906decb56ac9d9fa3c543394379c6c9de04a4&w=2000"
        },
        { 
          type: "Exterior Painting",
          tokenAmount: 1200,
          duration: "6hrs",
          imageUrl: "https://img.freepik.com/free-photo/man-traveling-alone-mutriku-while-having-his-essentials-backpack_23-2149118767.jpg?t=st=1715571880~exp=1715575480~hmac=ba79705dfca1e1b2a9a10b7b2b690d7e521b82e622bf85f16530ab9f509970bb&w=740"
        },
        { 
          type: "Wall Repainting",
          tokenAmount: 1000,
          duration: "5hrs",
          imageUrl: "https://img.freepik.com/free-photo/happy-cheerful-young-couple-brushing-wall-blue-color_186202-3796.jpg?t=st=1715571911~exp=1715575511~hmac=e9ee36f836af073b93c3f5d6a1a7ab090499db1ec5c9008a42cd0c63cfe0154d&w=1480"
        }
       
      ];


    return (
        <div className="grid grid-cols-4 gap-4">

            {paintingSubServices.map((spa, index) => (
                <Paint
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

export default PaintList;
