import React from "react";

const Lawncaresub = ({ type, tokenAmount, duration, imageUrl }) => {
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

const LawnList = () => {
    
        const lawnCareSubServices = [
            { 
              type: "Lawn Mowing",
              tokenAmount: 50,
              duration: "Varies",
              imageUrl: "https://img.freepik.com/free-vector/person-lawn-mowing-outdoors-illustration_23-2149224751.jpg?t=st=1715571539~exp=1715575139~hmac=595602d1824bf5d2e835f762e409315e9b132dcfbffde81d23dc5a668c80648f&w=1380"
            },
            { 
              type: "Weed Control",
              tokenAmount: 60,
              duration: "Varies",
              imageUrl: "https://img.freepik.com/free-photo/female-gardener-wearing-pollution-mask-looking-plants-greenhouse_23-2147918601.jpg?t=st=1715571586~exp=1715575186~hmac=b5a5091295f8d170486413deb9da74400d654e8f24bc1f89ba8cc52eb03f350c&w=1380"
            },
            { 
              type: "Fertilization",
              tokenAmount: 70,
              duration: "Varies",
              imageUrl: "https://img.freepik.com/free-photo/tractor-field-ai-generated-image_268835-6450.jpg?t=st=1715571629~exp=1715575229~hmac=3419513fcdeacf7a4606b81c109e453d56660a87346ec80b917357e53e930d5b&w=1800"
            },
            { 
              type: "Aeration",
              tokenAmount: 80,
              duration: "Varies",
              imageUrl: "https://img.freepik.com/free-vector/isometric-water-purification-technology-horizontal-composition-with-infographic-elements-bar-charts-aqua-aeration-units-text-vector-illustration_1284-81078.jpg?t=st=1715571687~exp=1715575287~hmac=098f9cbc2e59044b09dbadd947dd0fb986a5aa0c220738fedff9f2e246444855&w=1800"
            },
            { 
              type: "Pest Control",
              tokenAmount: 90,
              duration: "Varies",
              imageUrl: "https://img.freepik.com/premium-photo/ppe-staff-medical-team-using-restriction-shutdown-area-preventive-coronavirus_255544-107.jpg?w=1800"
            }
          ];


    return (
        <div className="grid grid-cols-4 gap-4">

            {lawnCareSubServices.map((spa, index) => (
                <Lawncaresub
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

export default LawnList;
