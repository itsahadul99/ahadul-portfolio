
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import EduAndExp from "../components/EduAndExp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className="relative bg-[#0F0715] overflow-hidden">
            {/* Gradient Circle */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-gradient-to-br from-[#8E5BF8] to-[#DDCDFD] rounded-full blur-[120px] opacity-50"></div>
            <Navbar />
            <Banner />
            <Services />
            <RecentWork />
            <EduAndExp />
            <Skills />
            {/* <Testimonial /> */}
            <Contact />
            <Blogs />
            <Footer />
        </div>

    );
};

export default Home;