import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(true)
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDateForm, setDateForm] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [showMembers, setShowMembers] = useState(true)
  const [members, setMembers] = useState([]);
  const [details, setDetails] = useState()
  const [showDetails, setShowDetails] = useState(false)

  const handleViewDetails = (id) => {
    const booking = bookings.find(booking => booking.id === id);
    sessionStorage.setItem("SelectedBookingId", booking.id)
    sessionStorage.setItem("serviceArea", booking.serviceArea)
    sessionStorage.setItem("serviceType", booking.serviceType)
    setSelectedBooking(booking);
    setShowBookings(false);
  };

  const handleEdit = async () => {
    setDateForm(true)
  };

  const handleAccept = async (providerId) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:1337/api/book/accept/" + sessionStorage.getItem("SelectedBookingId") + '/' + providerId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setShowMembers(false)
      } else {
        console.error("Accept failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    window.location.reload()
  };

  const handleFinish = async (providerId) => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:1337/api/book/finish/" + sessionStorage.getItem("SelectedBookingId"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        window.location.reload()
      } else {
        console.error("Accept failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    window.location.reload()
  };


  const handleCancel = async () => {
    const bookingId = sessionStorage.getItem("SelectedBookingId");
    const token = sessionStorage.getItem('token');
    try {
      const deleteUrl = "http://localhost:1337/api/book/delete/" + bookingId
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token
        }
      });
      if (response.ok) {
        const data = await response.json();
        alert("Deleted Successfully")
        window.location.reload()
      } else {
        console.error("Delete failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitDate = async () => {
    const bookingId = sessionStorage.getItem("SelectedBookingId");
    const token = sessionStorage.getItem('token');
    try {
      const putUrl = "http://localhost:1337/api/book/update/" + bookingId + '/' + date.toString() + "/" + time
      const response = await fetch(putUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token
        }
      });
      if (response.ok) {
        const data = await response.json();
        alert("Updated Successfully")
      } else {
        console.error("Update failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchBookings = async () => {
      const token = sessionStorage.getItem("token")
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

  useEffect(() => {
    const fetchProviders = async () => {
      if (selectedBooking?.status == "pending") {
        try {
          const serviceType = sessionStorage.getItem("serviceType");
          const serviceArea = sessionStorage.getItem("serviceArea")
          const response = await fetch("http://localhost:1337/api/provider/simpleprovidersfilter/" + serviceType + '/' + serviceArea, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token
            }
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setMembers(data.providers);
          } else {
            console.error("Booking failed!");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else if (selectedBooking?.status == "accepted") {
        try {
          const id = selectedBooking.acceptedProvider
          const response = await fetch("http://localhost:1337/api/provider/providerDetails/" + id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token
            }
          });
          if (response.ok) {
            const data = await response.json();
            setDetails(data.details);
            setShowDetails(true)
          } else {
            console.error("Booking failed!");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
    fetchProviders()
  }, selectedBooking)

  return (
    <div className="max-w-2xl mx-auto mt-24">
      {showBookings ? (
        <React.Fragment>
          {/* Check if there are bookings */}
          {bookings.length > 0 ? (
            <React.Fragment>
              {/* Accepted Bookings */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Accepted Bookings</h2>
                {bookings.filter(booking => booking.status === 'accepted').map(booking => (
                  <div key={booking.id} className="flex gap-3 bg-white border border-green-400 rounded-xl overflow-hidden items-center justify-start mb-4 p-4">
                    {/* Left side */}
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-bold">{booking.serviceType}</p>
                    </div>
                    {/* Middle side */}
                    <div className="flex flex-col gap-2 flex-grow">
                      <p className="text-gray-500">
                        <span className="font-bold">Date:</span> {booking.date.slice(0, 10)} <span className="font-bold">Time:</span> {booking.time}
                      </p>
                    </div>
                    {/* Right side */}
                    <div className="flex flex-col gap-2 ml-auto">
                      <button onClick={() => handleViewDetails(booking.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pending Bookings */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Pending Bookings</h2>
                {bookings.filter(booking => booking.status === 'pending').map(booking => (
                  <div key={booking.id} className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-4 p-4">
                    {/* Left side */}
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-bold">{booking.serviceType}</p>
                    </div>
                    {/* Middle side */}
                    <div className="flex flex-col gap-2 flex-grow">
                      <p className="text-gray-500">
                        <span className="font-bold">Date:</span> {booking.date.slice(0, 10)} <span className="font-bold">Time:</span> {booking.time}
                      </p>
                    </div>
                    {/* Right side */}
                    <div className="flex flex-col gap-2 ml-auto">
                      <button onClick={() => handleViewDetails(booking.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Finished Bookings */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Finished Bookings</h2>
                {bookings.filter(booking => booking.status !== 'accepted' && booking.status !== 'pending').map(booking => (
                  <div key={booking.id} className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-4 p-4">
                    {/* Left side */}
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-bold">{booking.serviceType}</p>
                    </div>
                    {/* Middle side */}
                    <div className="flex flex-col gap-2 flex-grow">
                      <p className="text-gray-500">
                        <span className="font-bold">Date:</span> {booking.date.slice(0, 10)} <span className="font-bold">Time:</span> {booking.time}
                      </p>
                    </div>
                    {/* Right side */}
                    <div className="flex flex-col gap-2 ml-auto">
                      <button onClick={() => handleViewDetails(booking.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ) : (
            <h1>No bookings</h1>
          )}
        </React.Fragment>
      ) : (
        <div>
          <div className="max-w-2xl mx-auto mt-8">
            {selectedBooking && (
              <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold">{selectedBooking.serviceType}</h2>
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-500">
                    <span className="font-bold">Date:</span> {selectedBooking.date.slice(0, 10)}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-bold">Time:</span> {selectedBooking.time}
                  </p>
                </div>
                <h2 className={`text-lg font-semibold ${selectedBooking.status === 'accepted' ? 'text-green-500' :
                  (selectedBooking.status === 'pending' ? 'text-red-500' : 'text-orange-500')
                  }`}>
                  {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                </h2>

                {(selectedBooking.status === 'pending' && showMembers) && (
                  <div>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Years of Experience</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {members.map((member) => (
                          <tr key={member.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{member.fullName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{member.yearsOfExperience}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{member.rating}</td>
                            <td className="px-6 py-4 whitespace-nowrap space-x-4">
                              <button onClick={() => handleAccept(member.id)} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Accept</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {(selectedBooking.status === 'accepted' && showDetails) && (
                  <div>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Years Of Experience</th>
                          {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.of Services</th> */}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">{details.fullName}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{details.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{details.phoneNumber}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{details.yearsOfExperience}</td>
                          {/* <td className="px-6 py-4 whitespace-nowrap">{details.rating}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{details.requests.length}</td>
                          <td className="px-6 py-4 whitespace-nowrap space-x-4">
                          </td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <button onClick={() => setShowBookings(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back to Bookings</button>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            {(selectedBooking.status === 'pending' || selectedBooking.status === 'accepted') && (
              <div className="space-x-4">
                <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Date</button>
                <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel Booking</button>
                {(selectedBooking.status === 'accepted') && (
                  <button onClick={handleFinish} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600">Mark as finished</button>
                )}
              </div>
            )}
          </div>
          <br></br>
          <div className="mx-auto w-full max-w-[550px] bg-white">
            {showDateForm && (
              <form onSubmit={handleSubmitDate}>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                        Date
                      </label>
                      <input type="date" onChange={(e) => { console.log(e.target.value); setDate(e.target.value); console.log(date) }} name="date" id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                        Time
                      </label>
                      <input type="time" onChange={(e) => { console.log(e.target.value); setTime(e.target.value); console.log(time) }} name="time" id="time"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      )}
    </div>
  );




};
export default MyBookings;
