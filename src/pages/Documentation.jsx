import React from 'react';
import { motion } from 'framer-motion';
import Group1 from '../assets/images/Group1.png';
import Group2 from '../assets/images/Group2.png';
import Group3 from '../assets/images/Group3.png';

import { DownloadCloud, Wifi, Battery, Power, Zap, Box, PlusCircle, Link, QrCode, CheckCircle, Smartphone, MapPin } from 'lucide-react';

const Documentation = () =>
{
    const steps = [
        {
            title: "Before You Begin",
            content: [
                { text: "Download the Tuya app", icon: <DownloadCloud className="w-6 h-6 text-cyan-600" /> },
                { text: "Link to Tuya App for Apple/Android phones", icon: <Smartphone className="w-6 h-6 text-cyan-600" /> }
            ]
        },
        {
            title: "Hub Setup",
            description: "Place the Hub close to the TRVs & Thermostat (usually one on every floor).",
            content: [
                { text: "Unpack the Hub", icon: <Box className="w-6 h-6 text-cyan-600" /> },
                { text: "Place the battery in the Hub", icon: <Battery className="w-6 h-6 text-cyan-600" /> },
                { text: "Turn the Hub on", icon: <Power className="w-6 h-6 text-cyan-600" /> },
                { text: "Connect the Hub to the internet", icon: <Wifi className="w-6 h-6 text-cyan-600" /> },
                { text: "Put the Hub in Pairing Mode", icon: <Zap className="w-6 h-6 text-cyan-600" /> },
                { text: "Open the Tuya App", icon: <Smartphone className="w-6 h-6 text-cyan-600" /> },
                { text: "Press the '+' icon in the top right corner to add a device", icon: <PlusCircle className="w-6 h-6 text-cyan-600" /> },
                { text: "Select and add the Hub", icon: <CheckCircle className="w-6 h-6 text-cyan-600" /> }
            ],
            image: Group2
        },
        {
            title: "Thermostat Setup",
            description: "Place the Thermostat not far from the Hub (usually one on every floor).",
            content: [
                { text: "Unpack the Thermostat", icon: <Box className="w-6 h-6 text-cyan-600" /> },
                { text: "Place the battery in the Thermostat", icon: <Battery className="w-6 h-6 text-cyan-600" /> },
                { text: "Turn on the Thermostat", icon: <Power className="w-6 h-6 text-cyan-600" /> },
                { text: "Connect the Thermostat to the internet", icon: <Wifi className="w-6 h-6 text-cyan-600" /> },
                { text: "Put the Thermostat in pairing mode", icon: <Zap className="w-6 h-6 text-cyan-600" /> }
            ],
            image: Group1
        },
        {
            title: "TRV Setup",
            description: "Place each TRV with the radiator valve (one TRV for each radiator)",
            content: [
                { text: "Unpack the TRV", icon: <Box className="w-6 h-6 text-cyan-600" /> },
                { text: "Place the battery in the TRV", icon: <Battery className="w-6 h-6 text-cyan-600" /> },
                { text: "Turn on the TRV", icon: <Power className="w-6 h-6 text-cyan-600" /> }
            ],
            image: Group3
        },
        {
            title: "Connect TRV to Hub",
            content: [
                { text: "Open the Tuya App", icon: <Smartphone className="w-6 h-6 text-cyan-600" /> },
                { text: "Select the Hub", icon: <MapPin className="w-6 h-6 text-cyan-600" /> },
                { text: "Add your TRV as a sub-device", icon: <PlusCircle className="w-6 h-6 text-cyan-600" /> }
            ]
        },
        {
            title: "Connect Devices to Susnet",
            content: [
                { text: "Scan Susnet QR code using the Tuya App", icon: <QrCode className="w-6 h-6 text-cyan-600" /> },
                { text: "Your devices will automatically connect", icon: <CheckCircle className="w-6 h-6 text-cyan-600" /> }
            ]
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-cyan-700 mb-8"
                >
                    Detailed Step-by-Step Instructions
                </motion.h1>

                {steps.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-md p-6 mb-8"
                    >
                        <h2 className="text-2xl font-semibold text-cyan-600 mb-4">{section.title}</h2>
                        {section.description && (
                            <p className="text-gray-700 font-semibold text-sm mb-4 italic">{section.description}</p>
                        )}
                        <div className="flex flex-col lg:flex-row items-start justify-between">
                            <div className="w-full lg:w-3/5 pr-0 lg:pr-8">
                                <ul className="space-y-3">
                                    {section.content.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center">
                                            {item.icon}
                                            <span className="ml-3 text-gray-700">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {section.image && (
                                <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex justify-center items-center">
                                    <motion.img
                                        src={section.image}
                                        alt={`${section.title} illustration`}
                                        className="max-w-full h-auto object-contain rounded-lg shadow-sm"
                                        style={{ maxHeight: '200px' }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: steps.length * 0.1 }}
                    className="text-center text-gray-600 mt-8"
                >
                    For more detailed instructions or support, please contact our customer service.
                </motion.p>
            </div>
        </div>
    );
};

export default Documentation;