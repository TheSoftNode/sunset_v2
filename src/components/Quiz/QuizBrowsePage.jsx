// import React, { useState, useEffect } from 'react';
// import { productData, Data } from '../../assets/Data';
// import robot3 from '../../assets/images/robot3.jpeg';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, RotateCcw, X } from 'lucide-react';
// import QuizSection from '../Landing/QuizSection';
// import ProductSummaryComponent from '../products/ProductSummaryComponent';
// import { determineRecommendation } from './productRecommendationSystem';


// const QuizBrowsePage = () =>
// {
//   const [index, setIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState(Array(Data.length).fill(null));
//   const [close, setClose] = useState(false);
//   const [notSelected, setNotSelected] = useState(false);
//   const [showQuizSection, setShowQuizSection] = useState(false);
//   const [showProductSummary, setShowProductSummary] = useState(false);
//   const [recommendedProducts, setRecommendedProducts] = useState({});

//   const data = Data;



//   useEffect(() =>
//   {
//     const answeredQuestions = selectedOptions.filter(option => option !== null).length;
//     setProgress((answeredQuestions / data.length) * 100);
//   }, [selectedOptions, data.length]);


//   const next = () =>
//   {
//     if (selectedOptions[index] === null)
//     {

//       if (index === data.length - 1)
//       {
//         setNotSelected(true);
//         toast.error('Please answer the final question before submitting.');
//       } else
//       {
//         setNotSelected(true);
//         toast.error('Please select an option before moving to the next question.');
//       }
//       return;
//     }

//     if (index < data.length - 1)
//     {
//       setIndex(index + 1);
//     } else
//     {
//       const productRecommendation = determineRecommendation(selectedOptions);
//       setRecommendedProducts(productRecommendation);
//       setShowProductSummary(true);
//       toast.success("Congratulations! You have completed the quiz.");
//     }
//   };


//   const back = () =>
//   {
//     if (index > 0)
//     {
//       setIndex(index - 1);
//       // Deselect the option for the previous question
//       setSelectedOptions(prevOptions =>
//       {
//         const newOptions = [...prevOptions];
//         newOptions[index - 1] = null;
//         return newOptions;
//       });
//     } else
//     {
//       setShowQuizSection(true);
//     }
//   };

//   const handleButtonReset = () =>
//   {
//     setIndex(0);
//     setSelectedOptions(Array(Data.length).fill(null));
//     setNotSelected(false)
//   };

//   const toggleOption = (optionNumber) =>
//   {
//     setNotSelected(false)
//     setSelectedOptions(prevOptions =>
//     {
//       const newOptions = [...prevOptions];
//       newOptions[index] = newOptions[index] === optionNumber ? null : optionNumber;
//       return newOptions;
//     });
//   };

//   const getColor = () =>
//   {
//     if (progress < 40) return 'bg-red-600';
//     else if (progress < 60) return 'bg-yellow-500';
//     else return 'bg-green-500';
//   };

//   const getOptionCount = () =>
//   {
//     let count = 0;
//     for (let i = 1; i <= 5; i++)
//     {
//       if (data[index][`option${i}`]) count++;
//     }
//     return count;
//   };

//   const handleClose = () =>
//   {
//     setClose(true);
//   };

//   if (showProductSummary)
//   {
//     return <ProductSummaryComponent
//       recommendedProducts={recommendedProducts}
//       selectedOptions={selectedOptions}
//       productData={productData}
//       onBack={() => setShowProductSummary(false)}
//     />;
//   }


//   if (showQuizSection || close)
//   {
//     return <QuizSection />;
//   }

//   return (
//     <div className="flex justify-center items-center bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 h-[500px] py-2 px-3">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white max-w-xl w-full pt-4 px-4 pb-1 shadow-xl rounded-lg h-[29rem]"
//       >
//         {/* Close button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="absolute top-2 right-2 bg-gray-200 hover:bg-red-400 hover:text-white text-gray-700 rounded-full p-1 transition duration-200"
//           onClick={handleClose}
//         >
//           <X size={20} />
//         </motion.button>

//         <div className="flex gap-3 mt-1  items-center mb-2.5">
//           <img className='w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-teal-500 ' src={robot3} alt="Robot" />
//           <h1 className='text-sm prose sm:text-xl font-bold text-teal-700 text-center sm:text-left'>Customize Your Kits and Plans</h1>
//         </div>

//         <div className='mb-3'>
//           <div className='bg-gray-200 rounded-full h-2 overflow-hidden'>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: `${progress}%` }}
//               transition={{ duration: 0.5 }}
//               className={`h-full ${getColor()} rounded-full`}
//             ></motion.div>
//           </div>
//           <div className='text-right font-semibold text-xs mt-1 text-gray-600'>{`Question ${index + 1} of ${data.length}`}</div>
//         </div>

//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3 }}
//           className='mb-3 w-full'
//         >
//           <h2 className="bg-teal-50 text-teal-800 rounded-lg px-3 py-2 shadow-md mb-3 text-sm prose text-justify !tracking-tight w-full font-semibold">
//             {data[index].question}
//           </h2>

//           <div className="flex flex-col h-full justify-between">
//             {[...Array(getOptionCount())].map((_, i) =>
//             {
//               const optionNumber = i + 1;
//               return (
//                 <motion.button
//                   key={optionNumber}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full text-left flex bg-white border rounded-lg p-1.5 prose transition-all duration-200 text-xs md:text-sm ${selectedOptions[index] === optionNumber
//                     ? 'border-teal-500 bg-teal-50 text-teal-700'
//                     : 'border-gray-200 hover:border-teal-300 text-gray-700'
//                     } ${getOptionCount() <= 2 ? 'mt-3 mb-6' : getOptionCount() >= 4 ? 'mb-2.5' : 'mt-2 mb-4'} ${notSelected === true && "border border-red-500"}`}
//                   onClick={() => toggleOption(optionNumber)}
//                 >
//                   {data[index][`option${optionNumber}`]}
//                 </motion.button>
//               );
//             })}
//           </div>


//         </motion.div>

//         <div className='flex justify-between gap-2 mt-auto'>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
//             onClick={back}
//           >
//             <ChevronLeft size={16} className="mr-1" />
//             Back
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
//             onClick={handleButtonReset}
//           >
//             <RotateCcw size={16} className="mr-1" />
//             Reset
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
//             onClick={next}
//           >
//             {index < data?.length - 1 ? (
//               <>
//                 Next
//                 <ChevronRight size={16} className="ml-1" />
//               </>
//             ) : "Submit"}
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizBrowsePage;


import React, { useState, useEffect } from 'react';
import { productData, Data } from '../../assets/Data';
import robot3 from '../../assets/images/robot3.jpeg';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, X } from 'lucide-react';
import QuizSection from '../Landing/QuizSection';
import ProductSummaryComponent from '../products/ProductSummaryComponent';
import { determineRecommendation } from '../products/productRecommendationSystem';

const QuizBrowsePage = () =>
{
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(Data.length).fill(null));
  const [close, setClose] = useState(false);
  const [notSelected, setNotSelected] = useState(false);
  const [showQuizSection, setShowQuizSection] = useState(false);

  const [showProductSummary, setShowProductSummary] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState({});
  const [recommendedPlan, setRecommendedPlan] = useState('');


  useEffect(() =>
  {
    const answeredQuestions = selectedOptions.filter(option => option !== null).length;
    setProgress((answeredQuestions / Data.length) * 100);
  }, [selectedOptions, Data.length]);

  console.log(selectedOptions)

  const next = () =>
  {
    if (selectedOptions[index] === null)
    {
      setNotSelected(true);
      if (index === Data.length - 1)
      {
        toast.error('Please answer the final question before submitting.');
      } else
      {
        toast.error('Please select an option before moving to the next question.');
      }
      return;
    }

    if (index < Data.length - 1)
    {
      setIndex(index + 1);
    } else
    {
      const recommendation = determineRecommendation(selectedOptions);
      setRecommendedProducts(recommendation.products);
      setRecommendedPlan(recommendation.plan);
      setShowProductSummary(true);
      toast.success("Congratulations! You have completed the quiz.");
    }
  };

  const back = () =>
  {
    if (index > 0)
    {
      setIndex(index - 1);
      // Deselect the option for the previous question
      setSelectedOptions(prevOptions =>
      {
        const newOptions = [...prevOptions];
        newOptions[index - 1] = null;
        return newOptions;
      });
    } else
    {
      setShowQuizSection(true);
    }
  };

  const handleButtonReset = () =>
  {
    setIndex(0);
    setSelectedOptions(Array(Data.length).fill(null));
    setNotSelected(false)
  };

  const toggleOption = (optionNumber) =>
  {
    setNotSelected(false)
    setSelectedOptions(prevOptions =>
    {
      const newOptions = [...prevOptions];
      newOptions[index] = newOptions[index] === optionNumber ? null : optionNumber;
      return newOptions;
    });
  };

  const getColor = () =>
  {
    if (progress < 40) return 'bg-red-600';
    else if (progress < 60) return 'bg-yellow-500';
    else return 'bg-green-500';
  };

  const getOptionCount = () =>
  {
    let count = 0;
    for (let i = 1; i <= 5; i++)
    {
      if (Data[index][`option${i}`]) count++;
    }
    return count;
  };

  const handleClose = () =>
  {
    setClose(true);
  };

  if (showQuizSection || close)
  {
    return <QuizSection />;
  }

  if (showProductSummary)
  {
    return <ProductSummaryComponent
      recommendedProducts={recommendedProducts}
      recommendedPlan={recommendedPlan}
      selectedOptions={selectedOptions}
      productData={productData}
      onBack={() => setShowProductSummary(false)}
    />;
  }


  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 h-[500px] py-2 px-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-xl w-full pt-4 px-4 pb-1 shadow-xl rounded-lg h-[29rem]"
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-red-400 hover:text-white text-gray-700 rounded-full p-1 transition duration-200"
          onClick={handleClose}
        >
          <X size={20} />
        </motion.button>

        <div className="flex gap-3 mt-1  items-center mb-2.5">
          <img className='w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-teal-500 ' src={robot3} alt="Robot" />
          <h1 className='text-sm prose sm:text-xl font-bold text-teal-700 text-center sm:text-left'>Customize Your Kits and Plans</h1>
        </div>

        <div className='mb-3'>
          <div className='bg-gray-200 rounded-full h-2 overflow-hidden'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className={`h-full ${getColor()} rounded-full`}
            ></motion.div>
          </div>
          <div className='text-right font-semibold text-xs mt-1 text-gray-600'>{`Question ${index + 1} of ${Data.length}`}</div>
        </div>

        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className='mb-3 w-full'
        >
          <h2 className="bg-teal-50 text-teal-800 rounded-lg px-3 py-2 shadow-md mb-3 text-sm prose text-justify !tracking-tight w-full font-semibold">
            {Data[index].question}
          </h2>

          <div className="flex flex-col h-full justify-between">
            {[...Array(getOptionCount())].map((_, i) =>
            {
              const optionNumber = i + 1;
              return (
                <motion.button
                  key={optionNumber}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left flex bg-white border rounded-lg p-1.5 prose transition-all duration-200 text-xs md:text-sm ${selectedOptions[index] === optionNumber
                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                    : 'border-gray-200 hover:border-teal-300 text-gray-700'
                    } ${getOptionCount() <= 2 ? 'mt-3 mb-6' : getOptionCount() >= 4 ? 'mb-2.5' : 'mt-2 mb-4'} ${notSelected === true && "border border-red-500"}`}
                  onClick={() => toggleOption(optionNumber)}
                >
                  {Data[index][`option${optionNumber}`]}
                </motion.button>
              );
            })}
          </div>


        </motion.div>

        <div className='flex justify-between gap-2 mt-auto'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
            onClick={back}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
            onClick={handleButtonReset}
          >
            <RotateCcw size={16} className="mr-1" />
            Reset
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
            onClick={next}
          >
            {index < Data?.length - 1 ? (
              <>
                Next
                <ChevronRight size={16} className="ml-1" />
              </>
            ) : "Submit"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizBrowsePage;
