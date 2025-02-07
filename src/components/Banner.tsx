import { CiSaveDown1 } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
const Banner = () => {
    return (
        <div className="min-h-[calc(100vh-88px)] max-w-7xl mx-auto flex flex-col justify-center items-center py-10 md:py-20 px-5">
            <svg className="absolute right-10" viewBox="0 0 1320 300">
                <text
                    x="50%"
                    y="70%"
                    textAnchor="middle"
                    className="text-[200px] opacity-30 fill-transparent font-bold uppercase stroke-1 stroke-[#8E5BF8] animated-text"
                >
                    HI
                </text>
            </svg>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-0 z-10">
                <div className="flex-1 space-y-3 md:space-y-5 lg:space-y-7">
                    <h1 className="text-white text-xl md:text-4xl font-bold">I am Ahadul Islam</h1>
                    <h1 className="text-transparent bg-gradient-to-r from-[#8E5BF8] to-[#DDCDFD] bg-clip-text text-3xl md:text-4xl lg:text-6xl font-bold w-full lg:max-w-lg">Web Developer + UX Visionary</h1>
                    <p className="text-sm md:text-lg lg:text-xl font-semibold text-white">
                        Designing and building intuitive websites that offer seamless user experiences and functional, elegant solutions.
                    </p>
                    <div className="flex items-center gap-3 md:gap-5">
                        <a href="https://drive.google.com/file/d/1HG5FliUEjKXxs7y3m7CdgduE1V7jJ9O3/view?usp=sharing" target="_blank" className="text-xs md:text-lg flex justify-between gap-2 items-center px-2 md:px-4 py-2 md:py-3 rounded-full border hover:text-white hover:bg-primary ease-in-out duration-500 border-primary text-primary font-medium cursor-pointer">Download CV <CiSaveDown1 size={20} /></a>
                        <a href="https://www.facebook.com/md.ahadul.islam.53831" target="_blank" className="rounded-full border  duration-500 ease-in-out border-primary hover:bg-primary text-primary hover:text-white cursor-pointer p-2"><FaFacebookF size={20} /></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" className="rounded-full border duration-500 ease-in-out border-primary hover:bg-primary text-primary hover:text-white cursor-pointer p-2"><FaLinkedinIn size={20} /></a>
                        <a href="https://github.com/itsahadul99" target="_blank" className="rounded-full border duration-500 ease-in-out border-primary hover:bg-primary text-primary hover:text-white cursor-pointer p-2"><FiGithub size={20} /></a>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex relative flex-col justify-center items-center w-full">
                        <div className="absolute bottom-[-100px] left-[-50px] w-[150px] h-[150px] bg-gradient-to-br from-[#8E5BF8] to-[#DDCDFD] rounded-full blur-[120px] opacity-50"></div>
                        <img className="size-[300px] md:size-[350px] lg:size-[420px] border-2 border-primary/30 rounded-xl rotate-4 hover:rotate-0 hover:border-primary duration-700" src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;