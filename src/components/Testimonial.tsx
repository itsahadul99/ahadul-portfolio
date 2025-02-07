import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    // Dummy testimonials data
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            image: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/testi-2.jpg',
            role: "CEO, Company A",
            review: "Absolutely fantastic service! The team was professional and delivered beyond our expectations.",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/testi-2.jpg',
            role: "Marketing Director, Company B",
            review: "Incredible attention to detail and a pleasure to work with. Highly recommend!",
        },
        {
            id: 3,
            name: "Michael Johnson",
            image: 'https://gerold.themejunction.net/wp-content/uploads/2024/05/testi-2.jpg',
            role: "CTO, Company C",
            review: "Transformed our digital presence. The results speak for themselves.",
        },
    ];

    return (
        <div id='Testimonials' className="relative bg-[#050709] py-10 md:py-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-5 md:gap-20 items-start">
                <div className="text-start w-full mb-16">
                    <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                        My Client's Stories
                    </h1>
                    <p className="text-sm md:text-lg text-gray-300 w-full md:w-2/3 transform transition-all duration-500">
                        Empowering people in a new digital journey with my super services
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="w-full md:w-1/2">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        pagination={{ clickable: true }}
                        loop
                        className="mySwiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-secondary p-8 rounded-2xl text-white min-h-[380px]">
                                    <img className='rounded-2xl my-2' src={testimonial.image} alt="" />
                                    <div>
                                        <svg className="animated" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint0_linear_1_f5f74f8-4)"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_1_f5f74f8-4" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                                                    <stop offset="1" stop-color="var(--tj-theme-primary)"></stop>
                                                    <stop offset="1" stop-color="#140C1C" stop-opacity="0"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className="text-lg mb-4">{testimonial.review}</p>
                                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                    <p className="text-gray-400">{testimonial.role}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;