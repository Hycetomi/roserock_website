
import { ShieldCheck, Target, HeartHandshake, Zap } from 'lucide-react';

const executedProjects = [
    { client: "Krones West Africa", type: "Borehole & WTP", location: "Ikeja, Lagos State" },
    { client: "Mamuda Beverages", type: "Borehole & WTP", location: "Ogun State" },
    { client: "Rite Foods", type: "Borehole & WTP", location: "Ososa, Ogun State" },
    { client: "Honeywell Mills Plc.", type: "Borehole & WTP", location: "Apapa, Lagos State" },
    { client: "Learn Africa Plc.", type: "Borehole & WTP", location: "Ikeja, Lagos State" },
    { client: "Boulos", type: "Borehole & WTP", location: "Ikeja, Lagos State" },
    { client: "Nigerite", type: "Borehole & WTP", location: "Ikeja, Lagos State" },
    { client: "AB10 Hospital", type: "Borehole & WTP", location: "Ogba, Lagos State" },
    { client: "Ifako Int. Sec. School", type: "Borehole & WTP", location: "Ifako, Lagos State" },
    { client: "Es-Say Holding (Fototek)", type: "Borehole & WTP", location: "Ososa, Ogun State" }
];

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Page Header */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">About Us</h1>
                    <div className="w-24 h-1 bg-accent1 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Discover the story, mission, and leadership behind ROSEROCK LIMITED.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Company Introduction */}
                    <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">A 100% Nigerian Indigenous Company</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong className="text-gray-900">ROSEROCK LIMITED (RC 1354631)</strong> represents the pinnacle of engineering excellence in Nigeria. Founded by visionary <strong className="text-accent1">Engr. Ayodeji Olubode</strong>, we take pride in our roots as a wholly indigenous company that delivers projects to international standards.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                With a track record of over 1,000 executed jobs around the country and West Africa, we have grown to become a trusted name in Civil Engineering, Water Resources, and Consultancy Services.
                            </p>

                            <div className="flex items-center space-x-4 mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <ShieldCheck className="h-10 w-10 text-accent2 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900">RC Certification</h4>
                                    <p className="text-gray-500">Registered Company: RC 1354631</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-accent1 transform translate-x-4 translate-y-4 rounded-xl opacity-20"></div>
                            <div className="bg-gray-100 aspect-[4/5] rounded-xl relative z-10 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden group">
                                <img
                                    src="/ceo.jpeg"
                                    alt="Engr. Ayodeji Olubode, CEO of ROSEROCK LIMITED"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statements */}
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 border-t-4 border-t-accent1">
                        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Our Mission Statements</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex items-start">
                                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-accent1 group-hover:text-white transition-colors duration-300">
                                    <Target className="h-6 w-6 text-accent1 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Foremost Engineering</h3>
                                    <p className="text-gray-600">To be the foremost engineering company in Nigeria, leading through innovation and excellence.</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex items-start">
                                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-accent1 group-hover:text-white transition-colors duration-300">
                                    <HeartHandshake className="h-6 w-6 text-accent1 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Friendly</h3>
                                    <p className="text-gray-600">To meet client's specifications and deadlines with a customer-friendly approach built on sincere relationship.</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex items-start">
                                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-accent1 group-hover:text-white transition-colors duration-300">
                                    <svg className="h-6 w-6 text-accent1 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Water Access</h3>
                                    <p className="text-gray-600">To make clean water available for all people through sustainable borehole and treatment plant solutions.</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex items-start">
                                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-accent1 group-hover:text-white transition-colors duration-300">
                                    <Zap className="h-6 w-6 text-accent1 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Technology</h3>
                                    <p className="text-gray-600">To provide services with the latest technology that meet strict International Standards.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Projects Executed Section */}
                    <div className="mt-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects Executed</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We have successfully executed over 1,000 jobs around the country and West Africa sub regions.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse whitespace-nowrap">
                                    <thead>
                                        <tr className="bg-accent1 text-white border-b border-gray-200">
                                            <th className="py-4 px-6 font-semibold tracking-wide">Client</th>
                                            <th className="py-4 px-6 font-semibold tracking-wide">Type of Job</th>
                                            <th className="py-4 px-6 font-semibold tracking-wide">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {executedProjects.map((project, index) => (
                                            <tr key={index} className="hover:bg-blue-50 transition-colors">
                                                <td className="py-4 px-6 text-gray-900 font-medium">{project.client}</td>
                                                <td className="py-4 px-6 text-gray-600">{project.type}</td>
                                                <td className="py-4 px-6 text-gray-500">{project.location}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
