import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

const LoginButton = () =>
{
    return (
        <motion.div
            className="ml-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <NavLink
                to="/login"
                className="inline-flex items-center justify-center px-3 lg:px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                <UserPlus className=" text-center w-5 h-5 mr-2" />
                <span className='hidden lg:flex'>Login</span>
            </NavLink>
        </motion.div>
    );
};

export default LoginButton;