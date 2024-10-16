import React, { useState } from 'react';
import QuizBrowsePage from '../Quiz/QuizBrowsePage';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import SelectedKitsPlans from '../SelectKits/SelectedKitsPlans';

const QuizSection = () =>
{
  const [showModel, setShowModel] = useState(false);
  const [isProductsAndPlans, setIsProductsAndPlans] = useState(false); // State for Products and plans
  const [isQuizPage, setIsQuizPage] = useState(false); // State for quiz page

  // Modal component for Quiz
  const MyModel = () =>
  {
    // Toggles quiz page on 'YES' button click
    const toggleQuizPage = () =>
    {
      setIsQuizPage(!isQuizPage);
    };

    // Toggles Products and plans section on 'NO' button click
    const togglePage = () =>
    {
      setIsProductsAndPlans(true); // Set this to true to display Products and plans
    };

    return (
      <>
        {isQuizPage ? (
          <QuizBrowsePage />
        ) : (
          <div className="relative shadow-lg w-full max-w-md mx-auto my-4 bg-gradient-to-r from-cyan-700 to-cyan-800 rounded-lg p-3">

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-2 right-2 cursor-pointer bg-gray-200 hover:bg-red-400 hover:text-white text-gray-700 rounded-full p-1 transition duration-200"
              onClick={() => setShowModel(false)}
            >
              <X size={20} />
            </motion.button>

            <h1 className="sm:text-xl text-lg  font-semibold text-white text-center mt-3 mb-3">
              Need help selecting Products and plans?
            </h1>
            <div className="flex justify-center space-x-6 mb-2">
              <button
                className="py-2 px-5 bg-green-600 text-sm font-bold text-white rounded-lg shadow-md transition duration-200 hover:bg-green-500 hover:shadow-lg"
                onClick={toggleQuizPage}
              >
                YES
              </button>
              <button
                className="py-1 px-5 bg-red-500 text-sm font-bold text-white rounded-lg shadow-md transition duration-200 hover:bg-red-400 hover:shadow-lg"
                onClick={togglePage} // Clicking NO shows Products and plans
              >
                NO
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {isProductsAndPlans ? ( // Render Products and plans when NO is clicked
        <SelectedKitsPlans />
      ) : isQuizPage ? (
        <QuizBrowsePage />
      ) : (
        <div id='quizStart' className="bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 w-full flex flex-col items-center py-3  justify-center gap-y-10 h-[28rem] px-4">
          <p className="text-center text-xl sm:text-2xl font-bold text-white prose">
            Let's start selecting your Susnet Products or plans of your choice.
          </p>

          <button
            className="bg-pink-600 text-white prose w-full max-w-md px-3 py-2 font-bold text-xl rounded-lg mx-auto shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 block"
            onClick={() => setShowModel(true)}
          >
            Get Started
          </button>
          {showModel && <MyModel />}
        </div>
      )}
    </>
  );
};

export default QuizSection;

