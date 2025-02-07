import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const smoothScroll = (targetId:string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
  
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust duration for slower scroll (1000ms = 1s)
    let startTime: number | null = null;

    const animateScroll = (currentTime:number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, ease);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };
  
    requestAnimationFrame(animateScroll);
  };
  
  // Easing Function (for smooth effect)
  const easeInOutQuad = (t:number, b:number, c:number, d:number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-5 py-5 text-white">
      <div className="flex items-center gap-2">
        <a href="/">
        <h1 className="text-5xl uppercase font-black text-white">A</h1>
        </a>
        <p className="hover:text-primary cursor-pointer">ahadul@gmail.com</p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center gap-8 font-semibold">
        {["Service", "Work", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
          <a key={item}  href={`#${item}`} onClick={() => smoothScroll( item)} className="group relative">
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
          isMenuOpen ? "translate-x-[50%]" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start space-y-5 w-full pl-8 md:pl-10">
          {["Service", "Work", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              
              className="group relative text-sm md:text-xl font-semibold cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="px-4 md:px-8 py-2 md:py-4 text-sm md:text-xl rounded-full bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer transition-all duration-1000 ease-in-out hover:bg-gradient-to-r hover:from-secondary hover:to-primary">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
