import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Booking = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [serviceArea, setArea] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postCode, setPostCode] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [members, setMembers] = useState([]);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            fullName,
            phoneNumber,
            email,
            date,
            time,
            serviceArea,
        };
        const token = sessionStorage.getItem('token');
        try {
            const serviceType = sessionStorage.getItem('type');
            const response = await fetch("http://localhost:1337/api/provider/providersfilter/" + serviceType + '/' + serviceArea, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: token
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                sessionStorage.setItem("bookingId", data.bookingId)
                setMembers(data.providers);
                setShowForm(false);
            } else {
                console.error("Booking failed!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleAccept = async (providerId) => {
        try {
            const response = await fetch("http://localhost:1337/api/book/accept/" + sessionStorage.getItem("bookingId") + '/' + providerId, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMyNzFiNzBmYjhkYjQ3N2Y2Yjk3NTYiLCJpYXQiOjE3MTQ3MjA1NzksImV4cCI6MTcxNDcyNDE3OX0.qu1HBY0wdAEFjcv3zyzbGDfJgfa7TARy7BvOjqMPUUs"
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
            } else {
                console.error("Accept failed!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
        navigate("/mybookings")
    };


    const renderMembersList = () => {
        return (
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

        );
    };
    return (
        <div className="flex items-center justify-center p-12">
            {/* <!-- Author: FormBold Team --> */}
            <div className="mx-auto w-full max-w-[550px] bg-white">
                {showForm ? (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input onChange={(e) => setFullName(e.target.value)} type="text" name="name" id="name" placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Date
                                    </label>
                                    <input type="date" name="date" id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                        Time
                                    </label>
                                    <input type="time" name="time" id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5 pt-3">
                            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                Address Details
                            </label>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="area" id="area" placeholder="Enter area" onChange={(e) => setArea(e.target.value)}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="city" id="city" placeholder="Enter city"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="state" id="state" placeholder="Enter state"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Book Appointment

                            </button>
                        </div>
                    </form>
                ) : (
                    renderMembersList()
                )}
            </div>
        </div>
    );
}

export default Booking;