import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [message, setMessage] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password
        };

        try {
            const response = await fetch("http://localhost:1337/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if (typeof data === "undefined") {
                    setMessage("An error occurred while processing your request.");
                    setShowForm(false);
                } else if (data.status === "Success") {
                    setMessage("Login Successful! Being navigated to home page");
                    setShowForm(false);
                    sessionStorage.setItem('token', data.token);
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                } else if (data.status === "Fail") {
                    setMessage(data.message);
                    setShowForm(false)
                }
                else {
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
                {message !== "Login Successful! Being navigated to home page" && (
                    setTimeout(() => {
                        setShowForm(true);
                        setMessage("");
                    }, 2000)
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
                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Login
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

export default Register;
