import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", name: "Home" },
  { path: "/documentation", name: "Instructions" },
  { path: "/environmentalDataAnalytics", name: "SusNet Weather Forecast Tool" },
  { path: "/energybill", name: "Saved Energy/Bill" },
  { path: "/contact", name: "Contact Us" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) =>
{
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) =>
      {
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={link.path}
              className={`capitalize ${linkStyles} relative overflow-hidden group`}
              onClick={onLinkClick}
            >
              {link.name}
              <motion.span
                className={`${underlineStyles} absolute bottom-0 left-0 w-full transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100`}
                initial={false}
                animate={link.path === currentPath ? { scaleX: 1 } : { scaleX: 0 }}
              />
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Nav;