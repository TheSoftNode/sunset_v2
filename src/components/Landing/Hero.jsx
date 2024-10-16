import { motion } from "framer-motion";
import ButtonMagic from "../ui/ButtonMagic";

const Hero = () =>
{
  return (
    <section className=".hero-section relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Designer.jpeg')"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-transparent"></div>
      </motion.div>

      {/* Content (Text and Buttons) */}
      <div className="relative gap-y-7  sm:gap-y-8 z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-Enabled Energy Solutions with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Susnet
          </span>
        </motion.h1>
        <motion.p
          className="text-lg prose  sm:text-2xl lg:text-3xl max-w-3xl mb-10 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform the way you manage energy with intelligent insights, predictive analytics, and AI-driven automation for smarter, greener living.
        </motion.p>

        <div className="flex space-x-4">
          <ButtonMagic
            title="Register Building"
            otherClasses="text-white font-semibold prose"
            gradientFrom="from-blue-500"
            gradientTo="to-indigo-600"
            gradientHoverFrom="hover:from-blue-600"
            gradientHoverTo="hover:to-indigo-700"
            animated={true}
          />
          <ButtonMagic
            title="Explore our plans"
            otherClasses="prose bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            animated={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
