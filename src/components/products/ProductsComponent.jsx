import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, X } from 'lucide-react';
import QuizSection from '../Landing/QuizSection';
import { productData } from '../../assets/Data';

const ProductsComponent = ({ selectProducts, selectedProducts, goBack, next }) =>
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

    const handleProductChange = (productId, change) =>
    {
        const currentCount = selectedProducts[productId] || 0;
        const newCount = Math.max(0, currentCount + change);
        selectProducts({ ...selectedProducts, [productId]: newCount });
    };

    const renderProduct = (productId, title, description, image, price) =>
    {
        const quantity = selectedProducts[productId] || 0;
        const totalPrice = (parseFloat(price) * quantity).toFixed(2);

        return (
            <motion.div
                key={productId}
                whileHover={{ scale: 1.05 }}
                className="w-full xs:w-1/2 md:w-1/3 lg:w-[22%] rounded-lg shadow-lg bg-white text-gray-900 flex flex-col overflow-hidden"
            >
                <img src={image} alt={title} className="w-full h-48 object-fit" />
                <div className="flex flex-col justify-between h-full px-4 py-3">
                    <div>
                        <h4 className="font-bold text-center text-lg prose text-cyan-700 mb-1.5">
                            {title}
                        </h4>
                        <p className="text-sm font-medium text-center prose text-gray-700 mb-3">
                            {description}
                        </p>
                    </div>
                    <div className="mt-auto">
                        <div className="mb-2">
                            <span className="font-bold text-sm prose block text-center text-red-600">
                                Price: €{price} / unit
                            </span>
                            <span className="font-bold text-sm prose block text-center text-green-600 mt-1">
                                Total: €{totalPrice}
                            </span>
                        </div>
                        <div className="flex justify-between items-center px-7 mt-2">
                            <button
                                className="bg-cyan-600 hover:bg-blue-600 rounded-full p-1 text-white transition duration-200"
                                onClick={() => handleProductChange(productId, -1)}
                            >
                                <Minus size={20} />
                            </button>
                            <span className="font-bold text-lg">{quantity}</span>
                            <button
                                className="bg-cyan-600 hover:bg-blue-600 rounded-full p-1 text-white transition duration-200"
                                onClick={() => handleProductChange(productId, 1)}
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="w-full relative bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 py-12 px-6 flex gap-y-8 lg:gap-y-6 flex-col">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute md:right-24 md:top-10 right-2 top-2 bg-gray-300 hover:bg-red-400 hover:text-white text-gray-700 rounded-full p-1 transition duration-200"
                onClick={handleClose}
            >
                <X size={20} />
            </motion.button>

            <h2 className="font-bold text-[2rem] leading-[2.2rem] mb-2 prose text-center text-white">
                Please Select Products
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(productData).map(([id, product]) => (
                    renderProduct(id, product.title, product.description, product.image, product.price)
                )

                )}
            </div>

            <div className="flex justify-between lg:px-48 ">
                <button
                    onClick={goBack}
                    className="bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 hover:from-green-600 hover:via-orange-600 hover:to-blue-600 text-white font-bold rounded-lg px-4 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Back
                </button>
                <button
                    className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-teal-600 hover:via-cyan-500 hover:to-purple-600 text-white font-bold rounded-lg px-4 py-1 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={next}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsComponent;