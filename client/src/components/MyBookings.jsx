import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const token = sessionStorage.getItem('token');
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/book/mybooking/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token
          }
        });
        if (response.ok) {
          const data = await response.json();
          setBookings(data.bookings);
          console.log(data.bookings)
        } else {
          console.error("Fetching bookings failed!");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-24">
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking.id} className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-4">
            {/* Left side */}
            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">{booking.serviceType}</p>
              <p className="text-gray-500">{booking.serviceType}</p>
            </div>
            {/* Middle side */}
            <div className="flex flex-col gap-2 py-2">
              <p className="text-gray-500">
                <span className="font-bold">Date:</span> {booking.date.slice(0, 10)}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">Time:</span> {booking.time.time}
              </p>
              <p className="text-gray-500">
                <span className="font-bold">Status:</span> {booking.status}
              </p>
            </div>
            {/* Right side */}
            <div className="flex flex-col gap-2 py-2 ml-auto">
              <p className="text-gray-500">booking details</p>
            </div>
          </div>
        ))
      ) : (
        <h1>Not found at the moment</h1>
      )}
    </div>
  );
};

export default MyBookings;
