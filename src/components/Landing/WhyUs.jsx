import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import efficiency from '../../assets/images/efficiency.png';
import convenience from '../../assets/images/convenience.png';
import sustainable from '../../assets/images/sustainable.png';
import savings from '../../assets/images/savings.png';

const WhyUs = () =>
{
    const features = [
        { image: efficiency, title: 'Efficiency', description: 'Optimize your energy usage effortlessly.' },
        { image: sustainable, title: 'Sustainable', description: 'Contribute to a greener planet with intelligent energy management.' },
        { image: convenience, title: 'Convenience', description: 'Enjoy a fully automated system that requires minimal intervention.' },
        { image: savings, title: 'Cost Saving', description: 'Reduce your energy costs by up to 60%' },
    ];

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
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-100">
            <div className="container sm:px-8 md:px-4 mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-700"
                        variants={itemVariants}
                    >
                        Why Choose Susnet?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Susnet offers the best solution to reduce your electricity bill while promoting sustainability.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-blue-500 hover:shadow-xl"
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="relative mb-8 group">
                                    <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-12 transition-transform group-hover:rotate-0 duration-300"></div>
                                    <motion.img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-24 h-24 mx-auto relative z-10 transition-all duration-300 ease-in-out group-hover:scale-110"
                                        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-center mb-6">{feature.description}</p>
                                <motion.div
                                    className="flex justify-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <button className="flex items-center bg-gradient-to-r from-teal-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out">
                                        Learn More
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;

