import React from 'react';
import { motion } from 'framer-motion';
import Group1 from '../../assets/images/Hitotemp.jpg';
import Group2 from '../../assets/images/Hitohub.jpg';
import Group3 from '../../assets/images/Hitosun.jpg';

const SusnetComponent = () =>
{
  const cards = [
    {
      title: "Global Thermostat",
      description: "AI-powered, Wi-Fi-based thermostat revolutionizing energy management.",
      image: Group1,
      price: "199.99"
    },
    {
      title: "IoT Hub",
      description: "Stable, bidirectional data transmitter for network connectivity with closed-loop schema.",
      image: Group2,
      price: "149.99"
    },
    {
      title: "TRVs",
      description: "Wi-Fi-enabled Thermostatic Radiator Valves with AI for advanced energy management.",
      image: Group3,
      price: "79.99"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          variants={cardVariants}
          className="text-4xl sm:text-5xl font-bold text-center text-cyan-700 mb-4"
        >
          Susnet Products
        </motion.h1>
        <motion.p
          variants={cardVariants}
          className="text-xl text-center text-gray-600 mb-12"
        >
          Optimized performance with our subscription plan
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-gray-200"
            >
              <img className="w-full h-64 object-fit border" src={card.image} alt={card.title} />
              <div className="px-6 py-4">
                <h4 className="font-semibold text-xl mb-2 text-teal-600">{card.title}</h4>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="text-red-600 font-bold text-xl">
                  €{card.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SusnetComponent;