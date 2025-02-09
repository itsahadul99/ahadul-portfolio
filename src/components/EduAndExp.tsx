import { FaGraduationCap } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

const EduAndExp = () => {
    return (
        <div id='Resume' className="relative py-10 md:py-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col md:flex-row items-start justify-between w-full text-3xl md:text-4xl lg:text-5xl mb-16 gap-10 md:gap-20">
                    <div className="flex-1 space-y-5 md:space-y-8 w-full z-20">
                        <div className="flex justify-start h-full items-center gap-3 md:gap-5 flex-1">
                            <GiAchievement className="text-primary" />
                            <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text font-bold animate-fade-in">
                                My Experience
                            </h1>
                        </div>
                        <div className="group p-5 rounded-2xl bg-[#21102eea] space-y-3 ease-in-out transition-all duration-1000 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white w-full">
                            <h4 className="text-lg md:text-xl font-semibold text-primary group-hover:text-white">
                                2024 - Present
                            </h4>
                            <h1 className="text-2xl md:text-4xl font-bold text-white">
                                Full Stack Developer
                            </h1>
                            <p className="text-xs md:text-sm font-medium text-white">
                                IBOS Limited, Bangladesh
                            </p>
                        </div>

                    </div>
                    <div className="flex-1 space-y-5 md:space-y-8 w-full z-20">
                        <div className="flex items-center gap-3 md:gap-5">
                            <FaGraduationCap className="text-primary" />
                            <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text font-bold animate-fade-in">
                                My Education
                            </h1>
                        </div>
                        <div className="group p-5 rounded-2xl bg-[#21102eea] space-y-3 ease-in-out transition-all duration-1000 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white w-full">
                            <h4 className="text-lg md:text-xl font-semibold text-primary group-hover:text-white">
                                2022 - Present
                            </h4>
                            <h1 className="text-2xl md:text-4xl font-bold text-white">
                                Diploma In CST
                            </h1>
                            <p className="text-xs md:text-sm font-medium text-white">
                                Mymensingh Polytechnic Institute, Bangladesh
                            </p>
                        </div>
                        <div className="group p-5 rounded-2xl bg-[#21102eea] space-y-3 ease-in-out transition-all duration-1000 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white w-full">
                            <h4 className="text-lg md:text-xl font-semibold text-primary group-hover:text-white">
                                2023 - 2024
                            </h4>
                            <h1 className="text-2xl md:text-4xl font-bold text-white">
                                Web Development Course
                            </h1>
                            <p className="text-xs md:text-sm font-medium text-white">
                                Programming Hero
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduAndExp;