import React from "react";

const Locksmith = ({ type, tokenAmount, duration, imageUrl }) => {
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

const LockList = () => {
    
    const locksmithSubServices = [
   
        { 
          type: "Lock Repair",
          tokenAmount: 700,
          duration: "1hr",
          imageUrl: "https://img.freepik.com/free-photo/point-view-young-handyman-using-power-drill-fix-door-kitchen-cabinet_662251-2704.jpg?t=st=1715572324~exp=1715575924~hmac=76e814a9ff116983ce7280fe83a09738778bbd3d4c1dcc95ca0d8a69fb7918a4&w=1800"
        },
        { 
          type: "Key Duplication",
          tokenAmount: 500,
          duration: "30mins",
          imageUrl: "https://img.freepik.com/premium-photo/lock-heart-your-lover-metal-rusty-bridge_255544-1717.jpg?w=1800"
        },
        { 
          type: "Emergency Lockout Service",
          tokenAmount: 1000,
          duration: "1hr",
          imageUrl: "https://img.freepik.com/premium-photo/electric-off-switch-wall-closeup-view_614679-11027.jpg?w=2000"
        },
        { 
          type: "CC-Camera Installation",
          tokenAmount: 1500,
          duration: "2hrs",
          imageUrl: "https://img.freepik.com/free-photo/closeup-cctv-camera-wall_53876-33830.jpg?t=st=1715572438~exp=1715576038~hmac=aabf53109ebfc2f8753b3b4f5fca95be304042a9f403aeab0fb227d7de6a7c46&w=1800"
        }
      ];


    return (
        <div className="grid grid-cols-4 gap-4">

            {locksmithSubServices.map((spa, index) => (
                <Locksmith
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

export default LockList;
