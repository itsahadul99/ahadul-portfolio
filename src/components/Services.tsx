import { FaReact, FaServer, FaShoppingCart, FaUserAlt, FaDatabase } from 'react-icons/fa';
const services = [
  {
    icon: FaReact,
    title: 'Full-Stack Web Development',
    description: 'Building dynamic web applications with the **MERN stack** (MongoDB, Express, React, Node.js) for a seamless user experience.',
  },
  {
    icon: FaUserAlt,
    title: 'UI/UX Design',
    description: 'Designing clean, modern, and user-friendly interfaces with a focus on usability and responsive design using **Figma** and **Adobe XD**.',
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    description: 'Crafting secure and efficient backend services with **Node.js** and **Express.js**, ensuring smooth server-side operations.',
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Developing e-commerce platforms with product management, secure payment systems, and customer authentication.',
  },
  {
    icon: FaDatabase,
    title: 'Real-Time Web Application',
    description: 'Building interactive applications with **Socket.io** for live updates, including messaging apps and notifications.',
  },
  {
    icon: FaReact,
    title: 'Progressive Web Apps',
    description: 'Developing offline-capable applications with fast performance and native app-like experiences using **Service Workers**.',
  },
];

const Services = () => {
  return (
    <div id='Service' className="relative bg-[#050709] py-10 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-[#ddcdfdc7] to-primary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center w-full mb-16">
          <h1 className="text-transparent bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          My Quality Services
          </h1>
          <p className="text-sm md:text-lg text-gray-300 w-full md:w-2/3 mx-auto transform transition-all duration-500">
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Service Card Template */}
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative group bg-gradient-to-br from-[#1f2531] to-[#0d1117] p-6 rounded-2xl border border-[#2d3748] hover:border-primary transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-primary/20 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-start">
                  <div className="p-4 bg-gradient-to-br from-primary to-[#ddcdfdc7] rounded-xl group-hover:rotate-[15deg] transition-transform duration-300 text-start">
                    <service.icon className="text-white text-3xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-[#ddcdfdc7] bg-clip-text text-transparent mb-4 text-nowrap">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-[2px] bg-gradient-to-r from-primary to-[#ddcdfdc7] w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Services;