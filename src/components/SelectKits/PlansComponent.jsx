import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import special from "../../assets/images/special3.png";
import QuizSection from '../Landing/QuizSection';
import { useState } from 'react';
import { X } from 'lucide-react';

const PlansComponent = ({ handleSelectPlan, isSelected, goBack, update }) =>
{

    const [close, setClose] = useState(false);

    const handleClose = () =>
    {
        setClose(true);
    };

    if (close)
    {
        return <QuizSection />;
    }

    const SpecialOffer = () => (
        <div className="absolute -top-6 -right-7 w-24 h-24 rotate-12">
            <img src={special} alt="" />
        </div>
    );

    const handleCardClick = (planName) =>
    {
        if (isSelected(planName))
        {
            handleSelectPlan(null); // Deselect if already selected
        } else
        {
            handleSelectPlan(planName); // Select if not already selected
        }
    };

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

    return (
        <motion.div
            className="w-full bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 gap-y-6 px-3 flex flex-col items-center justify-center py-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Close button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-2 right-2 md:top-10 md:right-24 bg-gray-300 hover:bg-red-400 hover:text-white text-gray-700 rounded-full p-1 transition duration-200"
                onClick={handleClose}
            >
                <X size={20} />
            </motion.button>

            <motion.h2
                className="font-bold text-xl lg:text-2xl xs:mt-0 mt-2 prose text-white text-center mb-4"
                variants={cardVariants}
            >
                Please Select a Subscription Plan
            </motion.h2>
            <motion.div
                className="flex flex-col flex-wrap sm:flex-row gap-10 sm:gap-8 w-full  md:max-w-[60rem] px-4"
                variants={containerVariants}
            >
                {[
                    {
                        name: 'Basic',
                        description: 'Entry Level Features',
                        price: '€10/Month',
                        yearlyPrice: '€100/Year (Save €20)',
                        features: ['Connect to 1 Global Thermostat + up to 5 TRVs'],
                        extras: ['No Dashboard', 'No 24/7 Customer Service'],
                        isSelected: isSelected('Basic')
                    },
                    {
                        name: 'Standard',
                        description: 'Essential Features',
                        price: '€20/Month',
                        yearlyPrice: '€200/Year (Save €40)',
                        features: ['Connect to 1 Global Thermostat + up to 10 TRVs', 'Hardware integration with local AI optimization', 'Dashboard', '24/7 Customer Service'],
                        // extras: ['24/7 Customer Service'],
                        isSelected: isSelected('Standard')
                    },
                    {
                        name: 'Premium',
                        description: 'Premium Features',
                        price: '€30/Month',
                        yearlyPrice: '€300/Year (Save €60)',
                        features: ['Connect to 1 Global Thermostat + up to 20 TRVs', 'Full Optimization (Local/Global)', 'Dashboard', '24/7 Customer Service'],
                        // extras: ['24/7 Customer Service'],
                        isSelected: isSelected('Premium')
                    }
                ].map((plan, idx) => (

                    <motion.div
                        key={idx}
                        className={`rounded-lg p-4 shadow-lg flex-1 cursor-pointer ${plan.isSelected ? 'bg-white' : 'bg-gray-100'} border border-gray-200 relative flex flex-col`}
                        onClick={() => handleCardClick(plan.name)}
                        variants={cardVariants}
                        whileHover={{
                            y: -5,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                            borderColor: "rgba(59, 130, 246, 0.5)",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <SpecialOffer />
                        <div className="flex-grow">
                            <motion.div
                                className="bg-cyan-700 w-24 mx-auto text-white text-center text-sm prose font-semibold rounded-full px-2 py-1 mb-2 inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                {plan.name}
                            </motion.div>
                            <h3 className="text-sm text-center font-semibold prose mb-1">{plan.description}</h3>
                            <div className="mb-2 flex flex-col justify-center items-center">
                                <p className="font-bold prose text-red-600 text-sm">{plan.price}</p>
                                <p className="text-sm prose font-bold">or</p>
                                <p className="text-xs mb-1 prose font-bold text-green-600">{plan.yearlyPrice}</p>
                            </div>
                            <ul className="text-sm mb-3">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center mb-1 prose text-xs font-semibold"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <CheckIcon className="w-4 h-4 text-green-800 mr-1 mb-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                                {plan?.extras?.map((extra, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center mb-2 prose text-xs font-semibold"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (plan.features.length + i) * 0.1 }}
                                    >
                                        <XMarkIcon className="w-4 h-4 text-red-500 mr-1 flex-shrink-0" />
                                        <span>{extra}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <motion.button
                            className={`w-full py-1 rounded-lg mt-auto text-white font-bold text-xs ${plan.isSelected ? 'bg-cyan-600' : 'bg-blue-500'}`}
                            onClick={(e) =>
                            {
                                e.stopPropagation(); // Prevent the card click event from firing
                                handleCardClick(plan.name);
                            }}
                            whileHover={{
                                scale: 1.03,
                                backgroundColor: plan.isSelected ? '#0891b2' : '#3b82f6',
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {plan.isSelected ? 'Selected' : 'Select'}
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                className="flex justify-between w-full max-w-3xl px-4"
                variants={cardVariants}
            >
                <motion.button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold"
                    onClick={goBack}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#ef4444",
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Back
                </motion.button>
                <motion.button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold"
                    onClick={update}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#22c55e",
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Next
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default PlansComponent;