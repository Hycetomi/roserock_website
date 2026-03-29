
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Target } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white py-32 md:py-48 overflow-hidden flex items-center min-h-[80vh]">
                {/* Video Background */}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    {/* Fallback pattern if video fails to load */}
                </video>
                
                {/* Color and gradient overlays for depth and text legibility */}
                <div className="absolute inset-0 bg-accent1/60 mix-blend-multiply z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-0 pointer-events-none"></div>
                <div className="absolute inset-0 opacity-20 background-pattern z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Service Built On <br />
                            <span className="text-secondary text-white border-b-4 border-accent2 pb-2">Sincere Relationship.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-200 mb-10 max-w-2xl">
                            Delivering world-class civil and water engineering solutions across Nigeria and West Africa with an unwavering commitment to quality.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/services"
                                className="bg-white text-accent1 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg flex items-center"
                            >
                                Our Services <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-accent2 hover:bg-red-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors duration-300 shadow-lg text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-4 border-accent1 pl-4">
                                Internationally Certified Excellence
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                ROSEROCK LIMITED is an internationally certified member of the <strong>International Water Quality (IWQ)</strong> and the <strong>Nigeria Society of Engineers (NSE)</strong>.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We combine the latest technology with deep engineering expertise to meet international standards across all our projects, from civil engineering to comprehensive water treatment solutions.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-accent1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">Technical support from CHANG-SHIN (South Korea)</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-accent1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">Advanced drilling capacity up to 1,500 meters</span>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="absolute inset-0 bg-accent2 opacity-5 rounded-3xl transform rotate-3 scale-105"></div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <Award className="h-12 w-12 text-accent1 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Quality Assured</h3>
                                <p className="text-sm text-gray-500 leading-normal min-h-[2.5rem] flex items-center">Meeting international standards globally.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 mt-12">
                                <Target className="h-12 w-12 text-accent2 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Precision</h3>
                                <p className="text-sm text-gray-500 leading-normal min-h-[2.5rem] flex items-center">Meeting client specifications exactly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">Proven Track Record</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-5xl font-extrabold text-accent1 mb-4">1,000+</div>
                            <div className="text-xl font-semibold text-gray-800 mb-2">Projects Executed</div>
                            <p className="text-gray-500">Successfully completed around Nigeria and West Africa.</p>
                        </div>

                        <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow transform md:-translate-y-4">
                            <div className="text-5xl font-extrabold text-accent2 mb-4">100%</div>
                            <div className="text-xl font-semibold text-gray-800 mb-2">Nigerian Indigenous</div>
                            <p className="text-gray-500">Proudly founded and operating as an indigenous firm.</p>
                        </div>

                        <div className="p-8 border border-gray-100 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4"><div className="text-5xl font-extrabold text-accent1">24/7</div></div>
                            <div className="text-xl font-semibold text-gray-800 mb-2">24/7 Call Center</div>
                            <p className="text-gray-500">Committed to providing sustainable water solutions around the clock.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Clients Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-16">
                    <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Trusted over the years by leading brands</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                        <img src="/krones-logo.png" alt="Krones West Africa" className="h-10 md:h-12 object-contain hover:scale-105 transition-transform duration-300" />
                        <img src="/rite-logo.png" alt="Rite Foods" className="h-12 md:h-16 object-contain hover:scale-105 transition-transform duration-300" />
                        <img src="/honeywell-logo.png" alt="Honeywell Mills Plc" className="h-12 md:h-16 object-contain hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-accent1 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8">
                        <h2 className="text-3xl font-bold mb-4">Ready to start your next project?</h2>
                        <p className="text-gray-200 text-lg">Contact our 24-hour call center today for a consultation or emergency services.</p>
                    </div>
                    <Link
                        to="/contact"
                        className="bg-white text-accent1 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg whitespace-nowrap"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
