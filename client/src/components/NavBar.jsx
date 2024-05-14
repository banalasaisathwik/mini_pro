import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isRegisterPage = location.pathname === "/register";
    const isLoginPage = location.pathname === "/login";
    const navReg = () => { navigate("/register") }
    const logout = () => {
        sessionStorage.clear()
        window.location.reload()
    }
    let isLoggedIn = false;
    const token = sessionStorage.getItem('token');

    const scrollToId = (id) => {
        navigate("/")
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100)
    };

    if (token) {
        isLoggedIn = true;
    }

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 mb-4 bg-[#e8e8e5]">
            {(!isLoggedIn && !isLoginPage) ? (
                <div className={`toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded ${isRegisterPage ? '' : 'md:border-none'}`}>
                    <button onClick={() => navigate(!isRegisterPage ? "/login" : "/registerp")}>
                        <div className="flex justify-end">
                            <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                                {isRegisterPage ? "REGISTER AS PROVIDER" : "LOGIN"}
                            </div>
                        </div>
                    </button>
                </div>
            ) : (<div></div>)}
            <div className="flex md:hidden">
                <button id="hamburger">
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                </button>
            </div>
            <div className={`toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 ${isRegisterPage ? 'md:border-none' : ''}`}>
                <button onClick={() => navigate("/")} className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home</button>
                <button onClick={() => scrollToId("services")} className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services</button>
                <button onClick={() => navigate("/mybookings")} className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">My Bookings</button>
                <button onClick={() => scrollToId("aboutus")} className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us</button>
                <button onClick={() => navigate("/help")} className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Write to us</button>
            </div>

            <div className={`toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded ${isRegisterPage ? '' : 'md:border-none'}`}>
                <button onClick={() => navigate(isLoggedIn ? "/call" : (isRegisterPage ? "/login" : "/register"))}>
                    <div className="flex justify-end">
                        <div onClick={isLoggedIn ? logout : navReg}
                            className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                            {isLoggedIn ? "LOGOUT" : (isRegisterPage ? "LOGIN" : "REGISTER")}
                        </div>
                    </div>
                </button>
            </div>
        </nav>
    );
}

export default Nav;
