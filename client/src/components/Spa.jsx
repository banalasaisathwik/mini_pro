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
          type: "Bridal Mehendi",
          tokenAmount: 2000,
          duration: "5hrs",
          imageUrl: "https://img.freepik.com/free-photo/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament_8353-9783.jpg?t=st=1715572026~exp=1715575626~hmac=0dbcb9889e9659bdd1ac24d5894bf059526d5c31c6c99c50ea9dc1d736ec8316&w=740"
        },
        { 
          type: "leg Mehandi",
          tokenAmount: 1000,
          duration: "3hrs",
          imageUrl: "https://img.freepik.com/premium-photo/heena-art-yellow-background-isolated-hand-female-hand-beautiful-art-hand_1048944-20511076.jpg?w=1800"
        },
        { 
          type: "Half Mehendi",
          tokenAmount: 1200,
          duration: "4hrs",
          imageUrl: "https://img.freepik.com/premium-photo/mehendy-art_1048944-10196867.jpg?w=900"
        },
        { 
          type: "Indo-Western Mehendi",
          tokenAmount: 1500,
          duration: "4hrs",
          imageUrl: "https://img.freepik.com/premium-photo/close-up-woman-holding-ice-cream_1048944-23515321.jpg?w=740"
        },
        { 
          type: "Kids Mehendi",
          tokenAmount: 500,
          duration: "1hr",
          imageUrl: "https://img.freepik.com/premium-photo/close-up-midsection-woman-showing-henna-tattoo_1048944-26781711.jpg?w=1800"
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
