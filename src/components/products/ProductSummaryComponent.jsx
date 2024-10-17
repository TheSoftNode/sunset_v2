import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowLeftIcon, XMarkIcon } from '@heroicons/react/16/solid';
import special from "../../assets/images/special3.png"
import QuizSection from '../Landing/QuizSection';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductSummaryComponent = ({
    recommendedProducts,
    recommendedPlan,
    selectedProducts,
    selectedPlan,
    productData,
    planDetails,
    onBack
}) =>
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

    const isFromQuiz = recommendedProducts && recommendedPlan;
    const products = isFromQuiz ? recommendedProducts : selectedProducts;
    const plan = isFromQuiz ? recommendedPlan : selectedPlan;

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
        <div className="absolute top-4 left-0  w-28 z-28 h-32 rotate-12">
            <img src={special} alt="" />
        </div>
    );

    const calculateTotalPrice = () =>
    {
        let total = 0;
        Object.entries(products).forEach(([id, count]) =>
        {
            if (count > 0)
            {
                total += productData[id].price * count;
            }
        });
        return total.toFixed(2);
    };

    return (
        <motion.div
            className="w-full relative bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
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

            <motion.div className="w-full max-w-4xl flex sm:gap-28 gap-5 lg:gap-40 items-center mb-8" variants={cardVariants}>
                <motion.button
                    onClick={onBack}
                    className="flex items-center text-xs sm:text-sm font-bold prose border border-purple-950 py-1 px-3 
                    rounded-full bg-pink-600 text-white hover:text-cyan-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeftIcon className="w-5 h-5 mr-2 " />
                    Back
                </motion.button>
                <h2 className="font-bold text-lg sm:text-xl prose lg:text-3xl text-white">Your Selection Summary</h2>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-8 w-full sm:max-w-3xl">
                <motion.div
                    className="flex-1 bg-white rounded-xl p-6 shadow-lg overflow-hidden relative"
                    variants={cardVariants}
                    whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <h3 className="text-2xl prose font-bold text-center text-cyan-700 mb-4">
                        Selected Products
                    </h3>
                    <ul className="space-y-3 mb-6">
                        {Object.entries(products).map(([id, count]) =>
                        {
                            if (count > 0)
                            {
                                const product = productData[id];
                                return (
                                    <li key={id} className="flex items-center justify-between text-sm bg-gray-50 px-2 py-2 rounded-lg">
                                        <div className="flex items-center">
                                            <img
                                                src={product.sumImage}
                                                alt={product.title}
                                                className="w-8 h-8 mr-3 object-cover"
                                            />
                                            <span className="font-semibold prose text-sm">{product.title}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-bold text-gray-600 mr-4">x{count}</span>
                                            <span className="font-bold text-cyan-600">€{(product.price * count).toFixed(2)}</span>
                                        </div>
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-right font-bold text-lg text-red-600">Total: €{calculateTotalPrice()}</p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 bg-white rounded-xl p-4 shadow-lg overflow-hidden relative"
                    variants={cardVariants}
                    whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <SpecialOffer />
                    <div className='pl-8'>
                        <h3 className="text-xl font-bold text-center prose text-cyan-700 mb-2">
                            {planDetails[plan].name} Plan
                        </h3>
                        <p className="text-sm text-center font-semibold prose text-gray-600 mb-1">{planDetails[plan].description}</p>
                        <p className="text-center font-bold text-sm prose text-red-600">{planDetails[plan].price}</p>
                        <p className="text-sm prose font-bold text-center">or</p>
                        <p className="text-xs prose font-semibold text-center text-green-600 mb-4">{planDetails[plan].yearlyPrice}</p>
                    </div>

                    <ul className="space-y-3">
                        {planDetails[plan].features.map((feature, index) => (
                            <li key={index} className="flex items-center text-xs prose font-bold bg-gray-50 py-1 px-2 rounded-lg">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                        {planDetails[plan].extras && planDetails[plan].extras.map((extra, index) => (
                            <li key={index} className="flex items-center text-xs prose font-bold bg-gray-50 py-1 px-2 rounded-lg">
                                <XMarkIcon className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                                <span>{extra}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.button
                className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg"
                variants={cardVariants}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Link to={"https://onlinestore.hitoai.ai/"}>
                    Proceed to Checkout
                </Link>
            </motion.button>
        </motion.div>
    );
};

export default ProductSummaryComponent;