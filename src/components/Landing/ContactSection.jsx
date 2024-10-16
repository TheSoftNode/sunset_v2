import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () =>
{
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-700"
                        variants={itemVariants}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Have questions about Susnet? We're here to help you optimize your energy usage and contribute to a sustainable future.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Mail, title: 'Email Us', content: 'support@susnet.com' },
                            { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567' },
                            { icon: MapPin, title: 'Visit Us', content: '123 Eco Street, Green City, 12345' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-blue-500 hover:shadow-xl"
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="bg-teal-100 rounded-full p-3">
                                        <item.icon className="w-8 h-8 text-teal-600" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-center">{item.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;