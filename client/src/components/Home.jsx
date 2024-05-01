import React from "react";

const Home = () => {
    return (
        <div>
            <div className="relative w-full h-[320px] overflow-hidden" id="home">
                <img src="https://tse1.mm.bing.net/th?id=OIP.l7ak7C3sWqSNHufaJFAN2wHaD_&pid=Api&P=0&h=220" alt="Background Image" className="absolute inset-0 object-cover object-center w-full h-full" />
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Kalki</h1>
                        <p className="font-regular text-xl mb-8 mt-4">One stop solution for professional services</p>
                        <a href="#contactUs" className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200">Contact Us</a>
                    </div>
                </div>
            </div>


            <div>
                <section className="py-10" id="trending-services">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Trending right now</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <a href="#spa" className="block">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.wxxexalNoEz0EffBcNBqmQHaE7&pid=Api&P=0&h=220" alt="Spa" className="w-full h-64 object-cover" />
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-800 mb-2">Spa</h3>
                                        <p className="text-gray-700 text-base">Indulge in relaxation and rejuvenation with our luxurious spa services. From massages and facials to body wraps and aromatherapy, our skilled therapists ensure a pampering experience that revitalizes your body and mind.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#acService" className="block">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                    <img src="https://tse3.mm.bing.net/th?id=OIP.cu8SDl_b19fOPDsNU661kwHaE8&pid=Api&P=0&h=220" alt="AC Service" className="w-full h-64 object-cover" />
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-800 mb-2">AC Service</h3>
                                        <p className="text-gray-700 text-base">Keep your air conditioner in top condition with our professional AC service. Our expert technicians ensure thorough cleaning and maintenance, providing you with efficient cooling all year round.</p>
                                    </div>
                                </div>
                            </a>

                            <a href="#deepHouseClean" className="block">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.7efBVaeoCvNikXyEyKZH2gHaEL&pid=Api&P=0&h=220" alt="Deep House Clean" className="w-full h-64 object-cover" />
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-800 mb-2">Deep House Clean</h3>
                                        <p className="text-gray-700 text-base">Experience the joy of a sparkling clean home with our deep house cleaning service. Our skilled professionals use eco-friendly products and advanced techniques to leave every corner of your home spotless.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </div>



            <section className="py-10" id="services">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a href="#acService" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.cu8SDl_b19fOPDsNU661kwHaE8&pid=Api&P=0&h=220" alt="AC Service" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">AC Service</h3>
                                    <p className="text-gray-700 text-base">Keep your air conditioner in top condition with our professional AC service. Our expert technicians ensure thorough cleaning and maintenance, providing you with efficient cooling all year round.</p>
                                </div>
                            </div>
                        </a>

                        <a href="#deepHouseClean" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.7efBVaeoCvNikXyEyKZH2gHaEL&pid=Api&P=0&h=220" alt="Deep House Clean" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Deep House Clean</h3>
                                    <p className="text-gray-700 text-base">Experience the joy of a sparkling clean home with our deep house cleaning service. Our skilled professionals use eco-friendly products and advanced techniques to leave every corner of your home spotless.</p>
                                </div>
                            </div>
                        </a>
                        <a href="#lawnCare" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.VlDyehre1wzOborn-Mch4QHaE8&pid=Api&P=0&h=220" alt="Lawn Care" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Lawn Care</h3>
                                    <p className="text-gray-700 text-base">Transform your lawn into a lush green paradise with our professional lawn care services. From mowing and edging to fertilizing and weed control, we take care of all your lawn maintenance needs.</p>
                                </div>
                            </div>
                        </a>

                        <a href="#petGrooming" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.x3TxlIAkqubKwk3M2RnHvwHaE8&pid=Api&P=0&h=220" alt="Pet Grooming" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Pet Grooming</h3>
                                    <p className="text-gray-700 text-base">Treat your furry friends to a spa day with our professional pet grooming services. Our experienced groomers pamper your pets with baths, haircuts, nail trimming, and more, leaving them looking and feeling their best.</p>
                                </div>
                            </div>
                        </a>

                        <a href="#spa" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.a8PgOwiLmvAFOp1rPOxW4gHaEK&pid=Api&P=0&h=220" alt="Spa" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Spa</h3>
                                    <p className="text-gray-700 text-base">Indulge in relaxation and rejuvenation with our luxurious spa services. From massages and facials to body wraps and aromatherapy, our skilled therapists ensure a pampering experience that revitalizes your body and mind.</p>
                                </div>
                            </div>
                        </a>

                        <a href="#locksmith" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.MIjZGOHfckBcVJitcDwu6QHaEK&pid=Api&P=0&h=220" alt="Locksmith" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Locksmith</h3>
                                    <p className="text-gray-700 text-base">Ensure the security of your home or business with our reliable locksmith services. From lock installations and repairs to key duplication and emergency lockout assistance, our certified locksmiths provide peace of mind and convenience.</p>
                                </div>
                            </div>
                        </a>

                        <a href="#painting" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.aaqJpQvNqE7JhHKcrQeU4AHaE8&pid=Api&P=0&h=220" alt="Painting" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Painting</h3>
                                    <p className="text-gray-700 text-base">Transform your space with our professional painting services. Whether it's interior or exterior painting, our skilled painters deliver high-quality finishes and attention to detail, enhancing the beauty and value of your property.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
            </section>

            <section className="py-10" id="special_services">
                <div >
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Special Services (limited period)</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <a href="#mehandi" className="block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.EwHbrfQEsyhiSx97re_aOQHaJQ&pid=Api&P=0&h=220" alt="Mehandi" className="w-full h-64 object-cover" />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Mehandi</h3>
                                    <p className="text-gray-700 text-base">Adorn your hands and feet with intricate mehndi designs. Our skilled artists create beautiful patterns using natural henna, ensuring a stunning and long-lasting result for weddings, festivals, and special occasions.</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* about us */}
            <section className="bg-gray-100" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                            <p className="mt-4 text-gray-600 text-lg">
Welcome to Kalki, your one-stop solution for professional services. We are dedicated to providing exceptional services that cater to your every need. Our team of skilled professionals is committed to delivering top-notch quality and customer satisfaction. At Kalki, we believe in the power of expertise and reliability. Whether it's AC service, deep house cleaning, spa treatments, or locksmith services, we ensure that every service is performed with precision and care. We take pride in our attention to detail and our ability to exceed our customers' expectations. Our mission is to make your life easier by offering convenient and reliable services that you can trust. With Kalki, you can rest assured that your needs will be met with professionalism and excellence. Thank you for choosing Kalki. We look forward to serving you and building a long-lasting relationship based on trust and satisfaction.We look forward to serving you!</p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- why us  --> */}
            <section className="text-gray-700 body-font mt-10">
                <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
                    Why Us?
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Advanced Machinery</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- Visit us section --> */}
            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
                        <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
                    </div>
                    <div className="mt-8 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                                        <p className="mt-1 font-bold text-gray-600"><a href="tel:+123">Phone: +91
                                            123456789</a></p>
                                        <a className="flex m-1" href="tel:+919823331842">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                                                    {/* <!-- Heroicon name: phone --> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                    </svg>
                                                    Call now
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div className="px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                        <p className="mt-1 text-gray-600">cbit, gandipet</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                        <p className="mt-1 text-gray-600">Monday - Sunday : 2pm - 9pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden order-none sm:order-first">
                                <iframe
                                    src= "https://www.google.com/maps/embed/v1/place?q=CBIT,+Osman+Sagar+Road,+Kokapet,+Gandipet,+Telangana,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
                                    className="w-full" width="600" height="450"  loading="lazy"
                                    > </iframe>

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- footer --> */}
            <section>
                <footer className="bg-gray-200 text-white py-4 px-3">
                    <div className="container mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
                            <p className="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights Reserved</p>
                        </div>
                        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                            <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                                <li><a href="#contactUs" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li className="mx-4"><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </section>


        </div>
    );
}

export default Home;
