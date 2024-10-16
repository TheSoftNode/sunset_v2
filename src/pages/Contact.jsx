import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () =>
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="p-8 sm:p-12">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-600">Contact Us</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            We're here to help and answer any question you might have. We look forward to hearing from you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:border focus:ring-teal-500 focus:outline-none transition duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition duration-200"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition duration-200"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-teal-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                                    type="submit"
                                >
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </motion.button>
                            </div>
                        </form>

                        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {[
                                { icon: Mail, title: 'Email', content: 'info@hitoai.com' },
                                { icon: Phone, title: 'Phone', content: '+353 899832147' },
                                { icon: MapPin, title: 'Address', content: 'HITOAI Limited Sandyford, Dublin 18 Dublin, Ireland' }
                            ].map((item) => (
                                <div key={item.title} className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-100 text-teal-600">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-gray-600">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;