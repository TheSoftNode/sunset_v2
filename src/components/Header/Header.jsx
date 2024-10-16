import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo_3.png";
import Nav from "./Nav";
import ThemeToggler from "../../Theme/ThemeToggler";
import MobileNav from "./MobileNav";
import LoginButton from "./LoginButton";
import CartComponent from "../Billing/Cart";

const Header = () =>
{
  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`
        ${header
          ? "py-2 bg-gray-50 shadow-lg dark:bg-accent"
          : "py-3 dark:bg-transparent bg-gray-50"}
        sticky top-0 z-30 transition-all bg-gray-50 duration-300 ease-in-out px-2 lg:px-4
        ${location.pathname === "/" && ""}
      `}
    >
      <div className=" w-full mx-auto px-4 sm:!pl-8 sm:!pr-2">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <motion.img
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt="Sunset logo"
              className="w-16 h-16 transition-all duration-300 ease-in-out"
            />
          </Link>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-x-3 lg:gap-x-6"
          >
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-blue-500 transition-all duration-300 ease-in-out font-semibold text-dark dark:text-gray-400 prose text-sm"
              underlineStyles="absolute left-0 top-full h-[2px] bg-orange-500 w-full"
            />

            <motion.div variants={itemVariants} className="mr-1">
              <LoginButton />
            </motion.div>

            <motion.div variants={itemVariants} className="mr-1">
              <CartComponent />
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="hidden xs:flex mr-3"
            >
              {/* <ThemeToggler /> */}
            </motion.div>

            <motion.div variants={itemVariants} className="lg:hidden">
              <MobileNav />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;