import { CiSaveDown1 } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="min-h-[calc(100vh-88px)] max-w-7xl mx-auto flex flex-col justify-center items-center">
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
            <div className="flex justify-between items-center w-full">
                <div className="flex-1 space-y-7">
                    <h1 className="text-white text-4xl font-bold">I am Ahadul Islam</h1>
                    <h1 className="text-transparent bg-gradient-to-r from-[#8E5BF8] to-[#DDCDFD] bg-clip-text text-6xl font-bold w-full md:max-w-lg">Web Developer + UX Designer</h1>
                    <p className="text-xl font-semibold text-white">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                    <div className="flex items-center gap-8">
                        <button className="text-lg flex justify-between gap-2 items-center px-4 py-3 rounded-full border border-red-400 font-medium cursor-pointer">Download CV <CiSaveDown1 size={20} /></button>
                        <button className="rounded-full border border-red-400 hover:bg-red-200 cursor-pointer p-1"><FaFacebook size={25} /></button>
                        <button className="rounded-full border border-red-400 hover:bg-red-200 cursor-pointer p-1"><FaLinkedin size={25} /></button>
                        <button className="rounded-full border border-red-400 hover:bg-red-200 cursor-pointer p-1"><FaGithub size={25} /></button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col justify-center items-center w-full">
                        <img className="size-[420px] border-2 border-red-400 rounded-xl rotate-6 hover:rotate-0 hover:border-white duration-700" src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;