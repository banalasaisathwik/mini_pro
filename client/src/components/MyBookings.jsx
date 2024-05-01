import React from "react";

const MyBookings = () => {
    const bookings = [
        {
            id: 1,
            name: "yad",
            type: "carpentry",
            date: "2024-05-15",
            time: "10:00 AM",
            status: "Confirmed",
            details: "hsbk",
        },
        {
            id: 2,
            name: "lod",
            type: "carpentry",
            date: "2024-05-18",
            time: "02:00 PM",
            status: "Pending",
            details: "mSCBN",
        },
        {
            id: 3,
            name: "pichaiaya",
            type: "carpentry",
            date: "2024-05-20",
            time: "12:30 PM",
            status: "Cancelled",
            details: ".jsdb",
        },
    ];

    return (
        <div className="max-w-2xl mx-auto mt-24">
            {bookings.map((booking) => (
                <div key={booking.id} className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-4">
                    {/* Left side */}
                    <div className="flex flex-col gap-2 py-2">
                        <p className="text-xl font-bold">{booking.type}</p>
                        <p className="text-gray-500">{booking.name}</p>
                    </div>
                    {/* Middle side */}
                    <div className="flex flex-col gap-2 py-2">
                        <p className="text-gray-500">
                            <span className="font-bold">Date:</span> {booking.date}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-bold">Time:</span> {booking.time}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-bold">Status:</span> {booking.status}
                        </p>
                    </div>
                    {/* Right side */}
                    <div className="flex flex-col gap-2 py-2 ml-auto">
                        <p className="text-gray-500">{booking.details}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyBookings;
