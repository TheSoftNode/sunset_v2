import susnetHub from "./images/susnet_hub.png"
import susnetKit from "./images/susnet_kit2.png"
import susnetImage from "./images/susnet_image.png"
import Group1 from './images/Hitotemp.jpg';
import Group2 from './images/Hitohub.jpg';
import Group3 from './images/Hitosun.jpg';


export const Data = [
    {
        question: "How many floors are in your space?",
        option1: "A) 1 floor",
        option2: "B) 2 floors",
        option3: "C) 3 floors",
        option4: "D) 4 floors",
        option5: "E) 5+ floors"
    },
    {
        question: "How many rooms do you want to control independently on each floor?",
        option1: "A) 1 room",
        option2: "B) 2 rooms",
        option3: "C) 3 rooms",
        option4: "D) 4 rooms",
        option5: "E) 5+ rooms"
    },
    {
        question: "Would you like real-time control and data on your energy usage?",
        option1: "A) No, I don't need it",
        option2: "B) Yes, I want control and advanced data analytics",
        option3: "",
        option4: ""
    },
    {
        question: "Do you need automated local or global optimization to reduce energy costs?",
        option1: "A) No optimization needed",
        option2: "B) I want local optimization",
        option3: "C) I want both local and global optimization",
        option4: ""
    },
    {
        question: "Is 24/7 customer support important to you?",
        option1: "A) No",
        option2: "B) Yes",
        option3: "",
        option4: ""
    }
];


export const planDetails = {
    Basic: {
        name: 'Basic',
        description: 'Entry Level Features',
        price: '€10/Month',
        yearlyPrice: '€100/Year (Save €20)',
        features: ['Connect to 1 Global Thermostat + up to 5 TRVs'],
        extras: ['No Dashboard', 'No 24/7 Customer Service']
    },
    Standard: {
        name: 'Standard',
        description: 'Essential Features',
        price: '€20/Month',
        yearlyPrice: '€200/Year (Save €40)',
        features: ['Connect to 1 Global Thermostat + up to 10 TRVs', 'Hardware integration with local AI optimization', 'Dashboard', '24/7 Customer Service'],
        // extras: [''],
    },
    Premium: {
        name: 'Premium',
        description: 'Premium Features',
        price: '€30/Month',
        yearlyPrice: '€300/Year (Save €60)',
        features: ['Connect to 1 Global Thermostat + up to 20 TRVs', 'Full Optimization (Local/Global)', 'Dashboard', '24/7 Customer Service'],
        // extras: [''],
    }
};

export const productData = {
    1: {
        title: "Global Thermostat",
        description: "AI-powered, Wi-Fi-based thermostat revolutionizing energy management.",
        image: Group1,
        sumImage: susnetImage,
        price: "199.99"
    },
    2: {
        title: "IoT Hub",
        description: "Stable, bidirectional data transmitter for network connectivity with closed-loop schema.",
        image: Group2,
        sumImage: susnetHub,
        price: "149.99"
    },
    3: {
        title: "TRVs",
        description: "Wi-Fi-enabled Thermostatic Radiator Valves with AI for advanced energy management.",
        image: Group3,
        sumImage: susnetKit,
        price: "79.99"
    }
};