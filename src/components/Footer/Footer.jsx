import React from 'react';
import logo from '../../assets/images/logo_3.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Twitter from '../../assets/images/twiter2.png';
import Facebook from '../../assets/images/fb.png';
import Instagram from '../../assets/images/insta2.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () =>
{
  return (
    <footer className="bg-cyan-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="w-full flex gap-x-6 sm:gap-x-8 md:w-1/3 mb-6 md:mb-0">
            <img src={logo} alt="HitoAI Logo" className="h-12 mb-2" />
            <p className="text-sm font-semibold prose text-gray-400 mt-2 md:mt-3">
              Empowering AI Solutions for Your Future
            </p>
          </div>

          {/* Contact Information */}
          <div className="w-full flex flex-wrap gap-8 justify-center items-center md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2 text-gray-400" />
              <span className="text-sm prose text-gray-400">+353 899832147</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-gray-400" />
              <span className="text-sm prose text-gray-400">info@hitoai.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img src={LinkedIn} alt="LinkedIn" className="h-6 mx-2" />
            <img src={Twitter} alt="Twitter" className="h-6 mx-2" />
            <img src={Facebook} alt="Facebook" className="h-6 mx-2" />
            <img src={Instagram} alt="Instagram" className="h-6 mx-2" />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HitoAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;