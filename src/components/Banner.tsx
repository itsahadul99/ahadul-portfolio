import { useState, useEffect } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const Banner = () => {
    const [typedText, setTypedText] = useState<string>("");

    const codeSnippet: string = `// Welcome to my Portfolio! 🚀
import { AhadulIslam } from 'itsahadul99';
import { Skills } from '@/expertise';

function createAmazingProjects() {
  const mySkills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Figma"],
    passion: "Building user-friendly web applications"
  };

  return {
    message: "Let's collaborate and create something amazing!",
    contact: "Scroll down 👇🏻 to connect →"
  };
}`;

    // Reset typedText on mount (reload)
    useEffect(() => {
        setTypedText(""); // Start from empty string on every reload
    }, []);

    // Typing animation
    useEffect(() => {
        if (typedText.length >= codeSnippet.length) return;
        let currentIndex = typedText.length;
        const typingInterval = setInterval(() => {
            if (currentIndex < codeSnippet.length) {
                const newTypedText = codeSnippet.slice(0, currentIndex + 1);
                setTypedText(newTypedText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);

        return () => clearInterval(typingInterval);
    }, [typedText, codeSnippet]);

    return (
        <div className="md:h-[calc(100vh-88px)] max-h-[800px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5 md:gap-0 py-8 md:py-20 px-5">
            <svg className="absolute right-10 hidden md:block" viewBox="0 0 1320 300">
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
                    <h1 className="text-transparent bg-gradient-to-r from-[#8E5BF8] to-[#DDCDFD] bg-clip-text text-3xl md:text-4xl lg:text-6xl font-bold w-full lg:max-w-lg">
                        Web Developer + UX Visionary
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl font-semibold text-white">
                        Designing and building intuitive websites that offer seamless user experiences and functional, elegant solutions.
                    </p>
                    <div className="flex items-center gap-3 md:gap-5">
                        <a
                            href="https://drive.google.com/file/d/1HG5FliUEjKXxs7y3m7CdgduE1V7jJ9O3/view?usp=sharing"
                            target="_blank"
                            className="text-xs md:text-lg flex justify-between gap-2 items-center px-2 md:px-4 py-2 md:py-3 rounded-full border hover:text-white hover:bg-primary ease-in-out duration-500 border-primary text-primary font-medium cursor-pointer"
                            rel="noopener noreferrer"
                        >
                            Download CV <CiSaveDown1 size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/md.ahadul.islam.53831"
                            target="_blank"
                            className="rounded-full border duration-500 ease-in-out border-primary hover:bg-primary text-primary hover:text-white cursor-pointer p-2"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                            className="rounded-full border duration-500 ease-in-out border-primary hover:bg-primary text-primary hover:text-white cursor-pointer p-2"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            href="https://github.com/itsahadul99"
                            target="_blank"
                            className="rounded-full border duration-500 ease-in-out border-primary hover:bg-primary text-primary hover:text-white cursor-pointer p-2"
                            rel="noopener noreferrer"
                        >
                            <FiGithub size={20} />
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex relative flex-col justify-center items-center w-full">
                        <div className="absolute bottom-[-100px] left-[-50px] w-[150px] h-[150px] bg-gradient-to-br from-[#8E5BF8] to-[#DDCDFD] rounded-full blur-[120px] opacity-50"></div>
                        {/* Code Snippet with Typing Animation */}
                        <div
                            className="rounded-lg bg-muted p-4 w-full max-w-[450px] font-mono max-[400px]:text-[0.6rem] text-xs sm:text-sm overflow-hidden shadow-xl border justify-self-center group bg-gradient-to-br from-[#1f2531] to-[#0d1117] border-[#2d3748] hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 cursor-pointer"
                            style={{ opacity: 1 }}
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex items-center gap-1.5 mb-3">
                                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-1 text-left">
                                <pre className="whitespace-pre-wrap">
                                    <code className="block">
                                        <span className="text-[#8E5BF8]">
                                            {
                                                typedText.split('\n').map((line, lineIndex) => (
                                                    <span key={`line-${lineIndex}`}>
                                                        {line.split(/(\s+)/).map((word, wordIndex) => {
                                                            let className = "text-white"; // Default color

                                                            // Keywords
                                                            if (word.match(/^(import|function|const|return|from|to)$/)) {
                                                                className = "text-primary"; // Purple for keywords
                                                            }
                                                            // Object keys
                                                            else if (word.match(/^(mySkills|message:|contact:)$/)) {
                                                                className = "text-green-400"; // Green for object keys
                                                            }
                                                            // Array values
                                                            else if (word.match(/^(frontend:|backend:|tools:|passion:)$/)) {
                                                                className = "text-yellow-400"; // Yellow for array values
                                                            }
                                                            // Symbols
                                                            else if (word.match(/^[{}[\]():;,=><]+$/)) {
                                                                className = "text-red-400"; // Red for symbols
                                                            }

                                                            return (
                                                                <span key={`word-${lineIndex}-${wordIndex}`} className={className}>
                                                                    {word}
                                                                </span>
                                                            );
                                                        })}
                                                        {'\n'}
                                                    </span>
                                                ))}
                                        </span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;