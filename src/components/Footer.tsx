
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <img src="/company-logo.png" alt="ROSEROCK LIMITED" className="h-16 w-16 object-contain rounded bg-white p-1" />
                            <h2 className="text-2xl font-bold tracking-widest text-white mt-1">ROSEROCK</h2>
                        </div>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                            Internationally certified engineering company dedicated to providing sincere services and making clean water available to all.
                        </p>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-accent1 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">115, Iju Water Works Road, Ifako - Agege, Lagos State.</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-accent1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">08023130900, 08033242128</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-accent1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">roserockltd@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-200 hover:text-accent1 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-200 hover:text-accent1 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-200 hover:text-accent1 transition-colors">Our Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-200 hover:text-accent1 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Core Services</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-200">Civil Engineering</li>
                            <li className="text-gray-200">Borehole Drilling</li>
                            <li className="text-gray-200">Water Treatment Plants</li>
                            <li className="text-gray-200">Consultancy & Laboratory</li>
                            <li className="text-gray-200">Tanks Tower Installation</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} ROSEROCK LIMITED (RC 1354631). All rights reserved.
                    </p>
                    <div className="text-red-300 text-sm font-semibold">
                        Service built on sincere relationship.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
