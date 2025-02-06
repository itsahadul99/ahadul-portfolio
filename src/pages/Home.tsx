
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="relative bg-[#0F0715] overflow-hidden px-5">
            {/* Gradient Circle */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-gradient-to-br from-[#8E5BF8] to-[#DDCDFD] rounded-full blur-[120px] opacity-50"></div>
            <Navbar />
            <Banner />
        </div>

    );
};

export default Home;