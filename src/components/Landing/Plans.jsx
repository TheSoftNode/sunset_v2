import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';
import specialOfferImage from "../../assets/images/special3.png";

const PricingPlans = () =>
{
  const [isHome, setIsHome] = useState(true);

  const homePlans = [
    {
      name: 'Basic',
      description: 'Entry Level Features',
      monthlyPrice: '€10/Month',
      yearlyPrice: '€100/Year (Save €20)',
      features: ['Connect to 1 Global Thermostat + up to 5 TRVs'],
      extras: ['No Dashboard', 'No 24/7 Customer Service'],
      color: 'bg-cyan-700',
    },
    {
      name: 'Standard',
      description: 'Essential Features',
      monthlyPrice: '€20/Month',
      yearlyPrice: '€200/Year (Save €40)',
      features: [
        'Connect to 1 Global Thermostat + up to 10 TRVs',
        'Hardware integration with local AI optimization',
        'Dashboard',
        '24/7 Customer Service'
      ],
      extras: [],
      color: 'bg-cyan-700',
    },
    {
      name: 'Premium',
      description: 'Premium Features',
      monthlyPrice: '€30/Month',
      yearlyPrice: '€300/Year (Save €60)',
      features: [
        'Connect to 1 Global Thermostat + up to 20 TRVs',
        'Full Optimization (Local/Global)',
        'Dashboard',
        '24/7 Customer Service'
      ],
      extras: [],
      color: 'bg-cyan-700',
    },
  ];

  const businessPlans = [
    {
      name: 'Standard',
      description: 'Advanced Level Features',
      monthlyPrice: '€10/Month',
      yearlyPrice: '€100/Year (Save €20)',
      features: ['Connect to 1 Global Thermostat + up to 5 TRVs'],
      extras: ['No Dashboard', 'No 24/7 Customer Service'],
      color: 'bg-cyan-700',
    },
    {
      name: 'Premium',
      description: 'Essential Features',
      monthlyPrice: '€20/Month',
      yearlyPrice: '€200/Year (Save €40)',
      features: [
        'Connect to 1 Global Thermostat + up to 10 TRVs',
        'Hardware integration with local AI optimization',
        'Dashboard',
        '24/7 Customer Service'
      ],
      extras: [],
      color: 'bg-cyan-700',
    },
    {
      name: 'Special',
      description: 'Premium Features',
      monthlyPrice: '€30/Month',
      yearlyPrice: '€300/Year (Save €60)',
      features: [
        'Connect to 1 Global Thermostat + up to 20 TRVs',
        'Full Optimization (Local/Global)',
        'Dashboard',
        '24/7 Customer Service'
      ],
      extras: [],
      color: 'bg-cyan-700',
    },
  ];

  const plans = isHome ? homePlans : businessPlans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const SpecialOffer = () => (
    <div className="absolute -top-6 -right-7 w-24 h-24 rotate-12">
      <img src={specialOfferImage} alt="Special Offer" />
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-teal-50 gap-y-6 px-3 flex flex-col items-center justify-center pt-10 pb-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 -z-10"
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0694A2" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0 0 Q 50 50 100 0 Q 50 50 0 100 Z" fill="url(#bg-gradient)" />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-2 prose text-center text-cyan-700"
      >
        Choose Your Perfect Plan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-sm font-bold prose text-gray-700 max-w-2xl mx-auto text-center"
      >
        Tailored solutions for home and business. Flexible, powerful, and designed to grow with you.
      </motion.p>


      <div className="flex justify-center items-center mb-12">
        <span className={`mr-4 text-lg ${isHome ? 'font-semibold text-cyan-700' : 'text-gray-500'}`}>Home</span>
        <motion.div
          onClick={() => setIsHome(!isHome)}
          className="relative inline-flex items-center h-8 w-16 rounded-full cursor-pointer bg-cyan-600"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30
            }}
            className="absolute inline-block w-6 h-6 bg-white rounded-full shadow-lg"
            animate={{
              left: isHome ? '2px' : 'calc(100% - 26px)',
            }}
          />
        </motion.div>
        <span className={`ml-4 text-lg ${!isHome ? 'font-semibold text-cyan-700' : 'text-gray-500'}`}>Business</span>
      </div>


      {/* Pricing Cards */}
      <motion.div
        className="flex flex-wrap gap-12 w-full max-w-6xl px-4 justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg min-w-[250px] p-6 shadow-lg flex-1 bg-white border border-teal-200 relative flex flex-col max-w-sm w-full"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                borderColor: "rgba(6, 182, 212, 0.5)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <SpecialOffer />
              <div className="flex flex-col h-full">
                <motion.div
                  className={`${plan.color} w-24 mx-auto text-white text-center text-sm font-semibold rounded-full px-2 py-1 mb-3 inline-block`}
                  whileHover={{ scale: 1.05 }}
                >
                  {plan.name}
                </motion.div>
                <h3 className="text-lg text-center font-semibold text-gray-800 mb-2">{plan.description}</h3>
                <div className="mb-4 flex flex-col justify-center items-center">
                  <p className="font-bold text-red-600 text-2xl">{plan.monthlyPrice}</p>
                  <p className="text-sm font-medium text-gray-600">or</p>
                  <p className="text-sm font-bold text-green-600">{plan.yearlyPrice}</p>
                </div>
                <ul className="space-y-2 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm font-medium text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                  {plan.extras.map((extra, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm font-medium text-gray-500"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (plan.features.length + i) * 0.1 }}
                    >
                      <XMarkIcon className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                      <span>{extra}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PricingPlans;