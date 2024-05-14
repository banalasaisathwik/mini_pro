import React from "react";

const Ac = ({ type, tokenAmount, duration, imageUrl }) => {
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

const AcList = () => {
    
    const acSubServices = [
        { 
          type: "AC Installation",
          tokenAmount: 1500,
          duration: "3hrs",
          imageUrl: "https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?t=st=1715570900~exp=1715574500~hmac=1812581a225ac88217a76420cb9f40c142b7690ba1f626a0ea9ec60530e3ab2c&w=1800"
        },
        { 
          type: "AC Repair",
          tokenAmount: 1200,
          duration: "2hrs",
          imageUrl: "https://img.freepik.com/premium-photo/smiling-technician-repairing-hot-water-heater_53419-11269.jpg?w=1800"
        },
        { 
          type: "AC Maintenance",
          tokenAmount: 1000,
          duration: "2hrs",
          imageUrl: "https://img.freepik.com/premium-photo/air-conditioner-service-indoors-air-conditioner-cleaning-technician-he-opened-front-cover-took-out-filters-washed-it-he-uniform-wearing-rubber-mask_208349-1339.jpg?w=1800"
        },
        { 
          type: "AC Cleaning",
          tokenAmount: 1000,
          duration: "2hrs",
          imageUrl: "https://img.freepik.com/premium-photo/repairman-uniform-installing-outside-unit-air-conditioner_93675-104991.jpg?w=1800"
        },
        { 
          type: "AC Inspection",
          tokenAmount: 800,
          duration: "1hr",
          imageUrl: "https://img.freepik.com/premium-photo/male-technician-repairing-air-conditioner-safety-uniform-indoors_61243-423.jpg?w=1800"
        }
      ];


    return (
        <div className="grid grid-cols-4 gap-4">

            {acSubServices.map((spa, index) => (
                <Ac
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

export default AcList;
