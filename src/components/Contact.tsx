import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "sonner";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}
const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        emailjs.send(
            'service_0vvp9pt',
            'template_eo4vqoc',
            { ...formData },
            'uyvRhCRHsVIVj-mUa'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast.success('Message sent successfully! You can get reply soon. Thanks for connecting me.');
            setFormData({  
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "", 
            });
        }, () => {
            toast.error("An error occur. Please try again !1");
        });
    };
    return (
        <div id="Contact" className="relative py-10 md:py-30 overflow-hidden bg-[#050709]">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Contact Form */}
                    <div className="bg-secondary w-full md:w-sm lg:w-xl backdrop-blur-sm rounded-lg p-8 border border-[#050709]/50">
                        <div className="w-full space-y-5 text-start">
                            <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-2xl lg:text-4xl font-bold animate-fade-in">
                                Let’s work together!
                            </h1>
                            <p className="text-sm text-white w-full lg:w-sm mb-8">
                                I design and code beautifully simple things and i love what i do. Just simple like that!
                            </p>
                        </div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="mt-1 block w-full text-sm px-4 py-3 bg-[#050709] border border-gray-600 rounded-md text-white focus:ring-primary"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="mt-1 block w-full text-sm px-4 py-3 bg-[#050709] border border-gray-600 rounded-md text-white focus:ring-primary"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full text-sm px-4 py-3 bg-[#050709] border border-gray-600 rounded-md text-white focus:ring-primary"
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="mt-1 block w-full text-sm px-4 py-3 bg-[#050709] border border-gray-600 rounded-md text-white focus:ring-primary"
                                    placeholder="+01 123 654 8096"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    rows={8}
                                    className="mt-1 block w-full text-sm px-4 py-3 bg-[#050709] border border-gray-600 rounded-md text-white focus:ring-primary"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer px-4 py-3 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white font-semibold rounded-md hover:opacity-90 transition-opacity transform duration-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="backdrop-blur-sm rounded-lg p-8 border border-[#050709]/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Details</h3>
                            <div className="space-y-4 text-white">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary rounded-full">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-primary text-xs">Phone</span>
                                        <p>+8801967271561</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary p-2 rounded-full">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-primary text-xs">Email</span>
                                        <p>itisahadul@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-full bg-primary">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-primary text-xs">Address</span>
                                        <p>Mymensingh, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;