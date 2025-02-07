const Footer = () => {
    return (
        <div className="relative pt-10 md:pt-20 pb-5 px-5 bg-[#050709]">
            <div className="max-w-7xl mx-auto flex flex-col justify-between items-center">
                <a href="/">
                    <h1 className="text-5xl uppercase font-black text-white">A</h1>
                </a>
                <div className="flex items-center gap-5 text-white my-5">
                    {["Service", "Work", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`/${item}`}

                            className="group relative text-sm md:text-lg font-semibold cursor-pointer"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>
                <p className="text-sm text-primary">© {new Date().getFullYear()} All Rights Reserved by Ahadul Islam</p>
            </div>
        </div>
    );
};

export default Footer;