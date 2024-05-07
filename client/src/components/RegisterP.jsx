import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterP = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serviceArea, setArea] = useState("");
    const [yearsOfExperience, setYears] = useState(0);
    const [typeOfServiceOffered, setTypeOfServiceOffered] = useState("")
    const [showForm, setShowForm] = useState(true);
    const [message, setMessage] = useState([]); 4

    const navigate = useNavigate();

    function rating() {
        const randomNumber = Math.random();
        const randomInteger = Math.floor(randomNumber * 6);
        return randomInteger;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            fullName,
            phoneNumber,
            email,
            password,
            serviceArea: serviceArea.split(", "),
            yearsOfExperience,
            typeOfServiceOffered,
            rating: rating(),

        };

        try {
            const response = await fetch("http://localhost:1337/api/provider/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                if (typeof data === "undefined") {
                    setMessage("An error occurred while processing your request.");
                    setShowForm(false);
                } else if (data && data.status === "Success") {
                    setMessage("Registration Successful!");
                    setShowForm(false);
                    sessionStorage.setItem('token', data.token);
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                } else {
                    setMessage(data.error);
                    setShowForm(false);
                }
            } else {
                setMessage("An error occurred while processing your request");
                setShowForm(false);
                console.log("Error:", data.error);
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    };

    const renderMessage = () => {
        return (
            <div>
                <h1>{message}</h1>
                {message !== "Registration Successful!" && (
                    setTimeout(() => {
                        setShowForm(true);
                        setMessage("");
                    }, 5000)
                )}
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
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                onChange={(e) => setPassword(e.target.value)}
                                htmlFor="password"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter strong password"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Phone Number
                            </label>
                            <input
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="typeOfServiceOffered"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Type Of Services
                            </label>
                            <input
                                onChange={(e) => setTypeOfServiceOffered(e.target.value)}
                                type="text"
                                name="typeOfServiceOffered"
                                id="typeOfServiceOffered"
                                placeholder="Enter type of services offered"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="yearsOfExperience"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Years Of Experience (OPTIONAL)
                            </label>
                            <input
                                onChange={(e) => setYears(e.target.value)}
                                type="number"
                                name="yearsOfExperience"
                                id="yearsOfExperience"
                                placeholder="Enter years of Experience"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="serviceAreas"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                SERVICE AREAS
                            </label>
                            <input
                                onChange={(e) => setArea(e.target.value)}
                                type="text"
                                name="serviceAreas"
                                id="serviceAreas"
                                placeholder="Enter space seperated service areas"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>


                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Register
                            </button>
                        </div>
                    </form>
                ) : (
                    renderMessage()
                )}
            </div>
        </div>
    );
};

export default RegisterP;
