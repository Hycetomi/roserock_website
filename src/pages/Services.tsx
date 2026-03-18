
import { Link } from 'react-router-dom';
import {
    Building2,
    Droplets,
    Settings,
    TestTube,
    Database,
    Wrench,
    Activity
} from 'lucide-react';

const Services = () => {
    const servicesList = [
        {
            id: "civil-engineering",
            title: "Civil Engineering",
            description: "Comprehensive civil engineering services tailored for modern infrastructure development. We handle projects from planning through execution.",
            icon: <Building2 className="h-8 w-8" />,
        },
        {
            id: "borehole-drilling",
            title: "Borehole Drilling",
            description: "Functional water boreholes, submersible pumps installation, and accessories for residential, commercial, and industrial use.",
            icon: <Droplets className="h-8 w-8" />,
        },
        {
            id: "pipe-laying",
            title: "Pipe Laying",
            description: "Expert pipe laying services for barracks, estates, industries, and state governments with durable materials and precise engineering.",
            icon: <Settings className="h-8 w-8" />,
        },
        {
            id: "water-treatment",
            title: "Water/Sewage Treatment Plant",
            description: "Supply and installation of water and sewage treatment plants of various capacities to ensure clean and safe environmental standards.",
            icon: <Activity className="h-8 w-8" />,
        },
        {
            id: "maintenance",
            title: "Maintenance and Installation",
            description: "Preventive maintenance, servicing, and expert installation to ensure your water and mechanical systems run optimally.",
            icon: <Wrench className="h-8 w-8" />,
        },
        {
            id: "consultancy",
            title: "Consultancy & Laboratory",
            description: "Geological investigation, comprehensive water sample analysis, and expert project supervision.",
            icon: <TestTube className="h-8 w-8" />,
        },
        {
            id: "tanks-tower",
            title: "Tanks Tower",
            description: "Custom design, fabrication, and secure installation of water storage tanks and elevated towers.",
            icon: <Database className="h-8 w-8" />,
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 background-pattern"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-accent1">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10">Our Services</h1>
                    <div className="w-24 h-1 bg-accent1 mx-auto mb-6 relative z-10"></div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10">
                        Delivering technical excellence across a comprehensive suite of civil and water engineering solutions.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col h-full"
                            >
                                <div className="p-8 flex-grow">
                                    <div className="w-16 h-16 rounded-lg bg-blue-50 text-accent1 flex items-center justify-center mb-6 group-hover:bg-accent1 group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="px-8 py-5 border-t border-gray-50 bg-gray-50 group-hover:bg-accent1 group-hover:text-white transition-colors duration-300 mt-auto">
                                    <Link to="/contact" className="text-sm font-semibold uppercase tracking-wider flex items-center w-full">
                                        Request Quote
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* CTA Card linking to contact */}
                        <div className="bg-accent2 rounded-xl overflow-hidden shadow-md border-transparent text-white p-8 flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
                            <p className="text-red-100 mb-8 max-w-sm">We provide tailored engineering solutions to meet specific and complex requirements.</p>
                            <Link
                                to="/contact"
                                className="bg-white text-accent2 hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-all shadow-md"
                            >
                                Contact Our Team
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
