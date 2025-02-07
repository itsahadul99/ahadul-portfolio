const Footer = () => {
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
        <div className="relative pt-10 md:pt-20 pb-5 px-5 bg-[#050709]">
            <div className="max-w-7xl mx-auto flex flex-col justify-between items-center">
                <a href="/">
                    <h1 className="text-5xl uppercase font-black text-white">A</h1>
                </a>
                <div className="flex items-center gap-3 md:gap-5 text-white my-5">
                    {["Service", "Work", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => smoothScroll(item)}
                            className="group relative text-xs md:text-lg font-semibold cursor-pointer"
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