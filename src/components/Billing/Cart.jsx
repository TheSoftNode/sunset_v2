import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cart from '../../assets/images/cart2.png'
import { ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartComponent = ({ itemCount = 0 }) =>
{
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <motion.button
        className=" text-gray-700 hover:text-gray-900 "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleCart}
      >
        {/* <ShoppingCart className="w-6 h-6" /> */}
        {/* <Link to={"https://9a0ca6-25.myshopify.com/"}> */}
        <Link to={"https://onlinestore.hitoai.ai/ "}>
          <img src={cart} className="w-9 h-11" alt="" />
        </Link>
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {itemCount}
          </motion.span>
        )}
      </motion.button>

      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Your Cart</h3>
                <button
                  onClick={toggleCart}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              {itemCount > 0 ? (
                <p>You have {itemCount} item(s) in your cart.</p>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
            <div className="p-4 border-t">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                Checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default CartComponent;