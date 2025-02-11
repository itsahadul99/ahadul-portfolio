/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import RecentWork from "../components/RecentWork";
import EduAndExp from "../components/EduAndExp";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
const Home = ({ isOpen, setIsOpen }:any) => {
    const [scrolling, setScrolling] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 600);
        };
        const nav = document.querySelector('.nav-container') as HTMLElement;
        if (nav) setNavHeight(nav.offsetHeight);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative bg-[#0F0715] overflow-hidden">
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-gradient-to-br from-[#8E5BF8] to-[#DDCDFD] rounded-full blur-[120px] opacity-50"></div>
            <div className={`nav-container transition-all duration-500 ease-out ${scrolling
                    ? "fixed top-0 w-full z-40 bg-[#0F0715] backdrop-blur-sm"
                    : "relative"
                }`}>
                <Navbar />
            </div>
            {/* Placeholder to prevent layout shift */}
            {scrolling && <div style={{ height: `${navHeight}px` }} />}
            <Banner />
            <Services />
            <RecentWork />
            <Skills />
            <EduAndExp />
            <Contact />
            <Blogs />
            <ChatBot isOpen={isOpen} setIsOpen={setIsOpen} />
            <Footer />
        </div>
    );
};

export default Home;