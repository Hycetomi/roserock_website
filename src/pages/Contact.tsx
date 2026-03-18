
import { MapPin, Phone, Mail, Clock, AlertCircle, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="bg-gray-900 text-white py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
                    <div className="w-24 h-1 bg-accent1 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Get in touch with us today for inquiries, quotes, or emergency services.
                    </p>
                </div>
            </div>

            <section className="py-20 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Information Cards */}
                        <div className="lg:col-span-1 space-y-6">

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
                                <div className="bg-blue-50 p-3 rounded-full mr-5 text-accent1 flex-shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Our Office</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        115, Iju Water Works Road,<br />
                                        Ifako - Agege,<br />
                                        Lagos State.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
                                <div className="bg-blue-50 p-3 rounded-full mr-5 text-accent1 flex-shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Lines</h3>
                                    <p className="text-gray-600 mb-1">08023130900</p>
                                    <p className="text-gray-600">08033242128</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
                                <div className="bg-blue-50 p-3 rounded-full mr-5 text-accent1 flex-shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                                    <p className="text-gray-600">roserockltd@gmail.com</p>
                                </div>
                            </div>

                            {/* Emergency Services Area */}
                            <div className="bg-accent2 text-white p-8 rounded-xl shadow-md border border-accent2">
                                <div className="flex items-center mb-4">
                                    <AlertCircle className="h-8 w-8 mr-3" />
                                    <h3 className="text-xl font-bold">Emergency Services</h3>
                                </div>
                                <p className="text-red-100 mb-4 font-medium italic">Available for registered clients.</p>
                                <div className="flex items-center text-sm font-semibold bg-white/20 p-3 rounded-lg">
                                    <Clock className="h-5 w-5 mr-3" />
                                    24-Hour Call Center Active
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 h-full">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Send Us a Message</h2>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-accent1 focus:ring-accent1 focus:ring-2 focus:ring-opacity-50 transition-colors shadow-sm"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-accent1 focus:ring-accent1 focus:ring-2 focus:ring-opacity-50 transition-colors shadow-sm"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-accent1 focus:ring-accent1 focus:ring-2 focus:ring-opacity-50 transition-colors shadow-sm"
                                            placeholder="Service Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-accent1 focus:ring-accent1 focus:ring-2 focus:ring-opacity-50 transition-colors shadow-sm resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto flex justify-center items-center px-8 py-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-accent1 hover:bg-accent1-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent1 transition-colors"
                                    >
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
