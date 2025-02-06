const Navbar = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto py-5 text-white">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Logo</h1>
                <p className="hover:text-primary cursor-pointer">ahadul@gmail.com</p>
            </div>
            <div className="flex justify-between items-center gap-8 font-semibold">
                <a href="#" className="group relative">
                    Service
                    <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="group relative">
                    Work
                    <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="group relative">
                    Resume
                    <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="group relative">
                    Skills
                    <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="group relative">
                    Testimonials
                    <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="group relative">
                    Contact
                    <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
                <div>
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-secondary hover:to-primary">
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
