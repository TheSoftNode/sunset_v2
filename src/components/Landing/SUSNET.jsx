import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';
import susnet from '../../assets/images/susnet.png';

const SUSNET = () =>
{
  const benefits = [
    { text: "The POC of <span class='font-bold text-orange-400'>50-60%</span> bill cutting is validated." },
    { text: "Highly correlational features <span class='font-bold text-orange-400'> (greater than 90%)</span> with various IoT components." },
    { text: "Ability to process comprehensive online data into final decisions in seconds." },
    { text: "Hassle-free and easy to use." }
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
    <motion.div
      className="bg-gradient-to-br from-teal-800 via-cyan-900 to-teal-900 relative w-full py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-[45%] mb-10 lg:mb-0 relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={susnet}
              alt="Susnet"
              className="w-full h-auto rounded-xl shadow-2xl object-cover relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="lg:w-[50%]"
            variants={itemVariants}
          >
            <motion.h1
              className="font-bold text-5xl sm:text-6xl prose text-orange-400  mb-4 leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Susnet
            </motion.h1>
            <motion.h2
              className="font-semibold text-lg xs:text-2xl text-justify sm:text-start tracking-tighter sm:tracking-wide prose sm:text-3xl text-teal-100 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower Your Energy Efficiency With SusNet
            </motion.h2>
            <motion.p
              className="text-gray-300 text-sm tracking-tight xs:!text-lg prose text-justify sm:!tracking-tighter leading-relaxed mb-8"
              variants={itemVariants}
            >
              SusNet is HitoAI's flagship product, an AI-powered sustainable energy management system engineered to optimize energy usage.
              As the global sustainable energy management market expands and artificial intelligence technology advances, HitoAI Limited
              stands at the industry's forefront.
            </motion.p>
            <motion.h3
              className="font-semibold text-2xl text-orange-300 mb-6"
              variants={itemVariants}
            >
              Benefits
            </motion.h3>
            <motion.ul className="space-y-4" variants={containerVariants}>
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <CheckIcon className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1 mr-3" />
                  <p
                    className="text-gray-300 text-sm leading-relaxed sm:!text-lg"
                    dangerouslySetInnerHTML={{ __html: benefit.text }}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('path/to/pattern.svg')] opacity-5 z-0" />
    </motion.div>
  );
};

export default SUSNET;