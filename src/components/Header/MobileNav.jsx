import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlignJustify, X } from "lucide-react";
import Nav from "./Nav";
import logo from "../../assets/images/logo_3.png";

const MobileNav = () =>
{
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () =>
  {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} className="h-screen">
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AlignJustify className="cursor-pointer text-gray-600 hover:text-teal-600 focus:text-teal-600 transition-colors" />
        </motion.div>
      </SheetTrigger>
      <SheetContent
        className="bg-gradient-to-br from-teal-50 to-gray-100 border-l-4 border-teal-500"
        aria-describedby="mobile-nav-description"
      >
        <motion.div
          className="h-full"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="flex justify-center items-center mb-4">
            <SheetTitle className="text-3xl font-bold text-teal-600 text-center">
              Sunset
            </SheetTitle>

          </div>
          <p id="mobile-nav-description" className="sr-only">
            The navbar for mobile display
          </p>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-12 w-full">
              <motion.img
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                src={logo}
                alt="Sunset logo"
                className="w-20 h-20 transition-all duration-300 ease-in-out"
              />
              <Nav
                containerStyles="flex flex-col items-center gap-y-6 w-full"
                linkStyles="text-sm prose font-medium text-gray-700 hover:text-teal-600 focus:text-teal-600 transition-colors duration-300 w-full text-center py-2 px-4 rounded-lg hover:text-blue-500 focus:text-teal-600 focus:outline-none"
                onLinkClick={handleNavClick}
              />
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center text-sm text-gray-500"
            >
              © 2024 Sunset. All rights reserved.
            </motion.div>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;


