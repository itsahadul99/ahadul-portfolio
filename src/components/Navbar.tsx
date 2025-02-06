const Navbar = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto py-5  text-white">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Logo</h1>
                <p className="hover:text-[#8E5BF8] cursor-pointer">ahadul@gmail.com</p>
            </div>
            <div className="flex justify-between items-center gap-8 font-semibold">
                <a href="#">Service</a>
                <a href="#">Work</a>
                <a href="#">Resume</a>
                <a href="#">Skills</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact</a>
                <div>
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8E5BF8] to-[#2b0f40] font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-[#2b0f40] hover:to-[#8E5BF8]">
                        Hire Me
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;