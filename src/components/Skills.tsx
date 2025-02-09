import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiTypescript, SiJavascript, SiTailwindcss, SiGit, SiHtml5, SiCss3, SiPostman } from 'react-icons/si';

const Skills = () => {
    return (
        <div id='Skills' className="relative bg-[#050709] py-10 md:py-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-transparent">
                        My Skills
                    </h2>
                    <p className="text-gray-300 text-lg">Tools & technologies I use to build amazing things</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Skill Cards */}
                    {[
                        { icon: SiReact, name: 'React.js', color: 'group-hover:text-blue-500' },
                        { icon: SiNodedotjs, name: 'Node.js', color: 'group-hover:text-green-500' },
                        { icon: SiExpress, name: 'Express.js', color: 'group-hover:text-gray-500' },
                        { icon: SiMongodb, name: 'MongoDB', color: 'group-hover:text-green-700' },
                        { icon: SiRedux, name: 'Redux', color: 'group-hover:text-purple-500' },
                        { icon: SiTypescript, name: 'TypeScript', color: 'group-hover:text-blue-600' },
                        { icon: SiJavascript, name: 'JavaScript', color: 'group-hover:text-yellow-500' },
                        { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'group-hover:text-teal-500' },
                        { icon: SiHtml5, name: 'HTML5', color: 'group-hover:text-orange-500' },
                        { icon: SiCss3, name: 'CSS3', color: 'group-hover:text-blue-400' },
                        { icon: SiGit, name: 'Git', color: 'group-hover:text-red-500' },
                        { icon: SiPostman, name: 'Postman', color: 'group-hover:text-orange-400' },
                    ].map((skill, idx) => (
                        <div
                            key={idx}
                            className="p-4 bg-[#21102eea] backdrop-blur-sm rounded-lg border group hover:bg-primary/50 border-none hover:border-primary/50 transition-all hover:scale-105 transform duration-300 cursor-pointer"
                        >
                            <div className="flex flex-col items-center text-center">
                            <skill.icon className={`w-12 h-12 mb-4 text-gray-400 hover:scale-105 duration-300 ${skill.color}`} />

                                <h3 className="text-xl font-semibold text-primary group-hover:text-white">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-300">
                    <p>Always learning and expanding my skill set 🚀</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;