
const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "The Beauty of Tanstack Query",
            date: "Mar 15, 2024",
            description: "Exploring Why TanStack Query is a Game-Changer in Modern Web Development",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNLVt8_jHjxqqzvlDpLXrSpqvRdXGCg8RYTCjv3OHn36ONDwhr0Uq89nxsp7fIljA8w4&usqp=CAU",
            category: "Technology",
            link: 'https://www.linkedin.com/pulse/why-tanstack-query-game-changer-modern-web-ahadul-islam-lkwhc/?trackingId=tZCmkO4oTGK296%2Bg1nueyQ%3D%3D'
        },
        {
            id: 2,
            title: "React: Why and How?",
            date: "Apr 2, 2024",
            description: "Diving deep into the React ecosystem, its core benefits, and best practices.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSjOO96ae3I6V-UYtEAzJojHLb-zpqlio-apKfYWxyWIpFlicn4OVyZDSuo5CzC4NkPs&usqp=CAU",
            category: "Technology",
            link: 'https://www.linkedin.com/pulse/why-should-we-use-react-front-end-ahadul-islam-damfc/?trackingId=tZCmkO4oTGK296%2Bg1nueyQ%3D%3D'
        },
        {
            id: 3,
            title: "Optimizing React Performance",
            date: "Apr 18, 2024",
            description: "Advanced techniques for boosting your React application's speed and efficiency.",
            image: "https://gerold.themejunction.net/wp-content/uploads/2024/05/blog-4-410x370.jpg",
            category: "Development",
            link: "#"
        }
    ];
    return (
        <div id='Blogs' className="relative py-10 md:py-20 overflow-hidden px-5">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center w-full mb-16">
                    <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                        My Latest Insights
                    </h1>
                    <p className="text-sm md:text-lg text-gray-300 w-full md:w-2/3 mx-auto transform transition-all duration-500">
                        Stay updated with my latest thoughts and discoveries in web development and technology.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                                {/* Date */}
                                <span className="text-sm text-primary font-medium mb-2 block">
                                    {blog.date}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {blog.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm mb-4">
                                    {blog.description}
                                </p>

                                {/* Category & Read More */}
                                <div className="flex justify-between items-center">
                                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                                        {blog.category}
                                    </span>
                                    <a href={blog.link} target='_blank' className="flex items-center text-white hover:text-primary transition-colors">
                                        Read More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 rounded-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;