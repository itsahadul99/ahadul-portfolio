import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-5 text-white">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold">Logo</h1>
        <p className="hover:text-primary cursor-pointer">ahadul@gmail.com</p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center gap-8 font-semibold">
        {["Service", "Work", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
          <a key={item} href="#" className="group relative">
            {item}
            <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-secondary hover:to-primary">
          Hire Me
        </button>
      </div>
      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="lg:hidden text-white text-3xl z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black text-white flex justify-center items-center transition-all duration-300 transform z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-10">
          {["Service", "Work", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="group relative text-xl font-semibold cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-secondary hover:to-primary">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
