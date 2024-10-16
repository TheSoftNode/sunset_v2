import { useState } from "react";

import { CheckIcon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { toast } from "react-toastify";
import QuizSection from "../Landing/QuizSection";
import { planDetails } from "../../assets/Data";
import { kitDetails } from "../../assets/Data";



const SelectKitsPlans = () =>
{
  const [isPlans, setIsPlans] = useState(false); // Initially false, showing the kit selection
  const [isSummary, setIsSummary] = useState(false); // Shows summary when true
  const [selectedKit, setSelectedKit] = useState(null); // Track the selected kit
  const [selectedPlan, setSelectedPlan] = useState(null); // Holds the selected plan
  const [hasSelected, setHasSelected] = useState(false)
  const [back, setBack] = useState(false)


  // // Define plan details
  // const planDetails = {
  //   Basic: {
  //     name: "Basic",
  //     price: "€10 / month",
  //     features: [
  //       "1 IOT Hub + 1 Thermostat",
  //       "Connect up to 5 Devices",
  //       "No Data Dashboard",
  //       "No Customer Support"
  //     ]
  //   },
  //   Standard: {
  //     name: "Standard",
  //     price: "€20 / month",
  //     features: [
  //       "1 IOT Hub + 5 TRVs",
  //       "Connect up to 20 Devices",
  //       "Access Dashboard",
  //       "24/7 Customer Support"
  //     ]
  //   },
  //   Premium: {
  //     name: "Premium",
  //     price: "€30 / month",
  //     features: [
  //       "2 IOT Hubs + 10 TRVs",
  //       "Connect up to 30 Devices",
  //       "Access Dashboard",
  //       "24/7 Customer Support"
  //     ]
  //   }
  // };


  // Function to handle kit selection
  const selectKit = (kitIndex) =>
  {
    setHasSelected(!hasSelected);

    setSelectedKit(kitIndex);

  };

  const handleSelectPlan = (plan) =>
  {
    // setHasSelected(!hasSelected);
    setSelectedPlan(plan); // Set the selected plan when user clicks on "Select"
  };

  const isSelected = (plan) => selectedPlan === plan; // Check if the plan is selected


  // Function to handle the "Next" button click after kit selection
  const next = () =>
  {
    if (selectedKit)
    {
      setIsPlans(true); // Show the plans page if a kit is selected
    } else
    {
      toast.error("Please select a kit first.");
    }
  };

  const goBack = () =>
  {
    setBack(true)
  };

  // Function to handle "Next" button click after plan selection
  const update = () =>
  {
    if (selectedPlan)
    {
      setIsSummary(true); // Go to the summary page
    } else
    {
      alert("Please select a plan.");
    }
  };

  // const kitDetails = {
  //   1: {
  //     name: "Kit 1",
  //     description: "Ideal for Home and Small Business.",
  //     contents: "1 Hub + 1 TRV + 1 Global Thermostat",
  //     price: "€330"
  //   },
  //   2: {
  //     name: "Kit 2",
  //     description: "Home and large Business.",
  //     contents: "1 Hub + 10 TRVs + 2 Global Thermostats",
  //     price: "€750"
  //   },
  //   3: {
  //     name: "Kit 3",
  //     description: "Custom kit for large companies.",
  //     contents: "Customized for business and companies.",
  //     price: "€900"
  //   }
  // };



  return (

    <>
      {isSummary ? (
        // Summary page to show the selected kit and plan
        <div className="w-full bg-cyan-800 h-auto overflow-x-hidden">
          <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-12 text-white">
            Your Selected Kits and Plans
          </h2>
          <div className="flex mt-4">
            <div className="text-white text-center  border-1 w-48 ml-[420px] h-auto shadow-xl p-4">
              {/* Display selected kit details */}
              <p className="text-xl font-bold ">
                Selected Kit {kitDetails[selectedKit].name}
              </p>
              <p className="text-sm mt-4">{kitDetails[selectedKit].description}</p>
              <p className="text-sm mt-2">{kitDetails[selectedKit].contents}</p>
              <p className="mt-2">
                <span className="font-bold text-lg text-red-600">
                  Price: {kitDetails[selectedKit].price}
                </span>
              </p>
            </div>
            <div className="text-white text-center  border-1 w-48 ml-[100px] h-auto shadow-xl p-4 ">
              {/* Display selected plan details */}
              <p className="text-xl font-bold ">
                Selected Plan {planDetails[selectedPlan].name}
              </p>
              <p className="text-sm mt-4">
                Price: {planDetails[selectedPlan].price}
              </p>
              <ul className="text-sm mt-2">
                {planDetails[selectedPlan].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-red-500 hover:bg-blue-500 font-bold rounded-lg px-3 py-2 mb-2 ml-10 text-white">
              Proceed
            </button>
          </div>
        </div>

      ) : isPlans ? (
        // Render the plans component or plan content when "Next" is clicked after selecting kit
        <div className="w-full bg-cyan-800 h-auto overflow-x-hidden">
          <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-12 text-white">
            Please Select Plans
          </h2>
          <div className="grid lg:grid-cols-3 gap-0 mt-10 mr-10">
            {/* Basic Plan */}
            <div className={`w-[420px] rounded-md cursor-pointer pr-10`}>
              <div className={`bg-gray-200 shadow-xl rounded-2xl ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${isSelected("Basic") ? "bg-gray-200" : "bg-white"}`}>
                <div className="px-1 py-3">
                  <h1 className="text-4xl font-semibold px-4 font-serif ml-3">Basic</h1>
                  <p className="text-sm ml-10 mt-2 text-gray-400">Entry Level Features</p>
                  <span className="text-black text-4xl font-bold ml-10 pt-2">€10 <span className="text-gray-400 text-sm font-normal">/month</span></span>
                </div>
                <div className="px-5 py-3">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">1 IOT Hub +1 Thermostat</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">Connect Upto 5 Devices</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <XMarkIcon className="w-6 h-6 text-red-500" />
                      <p className="text-sm text-grey-600">No Data Dashboard</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <XMarkIcon className="w-6 h-6 text-red-500" />
                      <p className="text-sm text-grey-600">No Customer Support</p>
                    </li>
                  </ul>
                  <button className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => handleSelectPlan("Basic")}>
                    Select
                  </button>
                </div>
              </div>
            </div>

            {/* Standard Plan */}
            <div className={`w-[420px] rounded-md cursor-pointer pr-10`}>
              <div className={`bg-gray-200 shadow-xl rounded-2xl ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${isSelected("Standard") ? "bg-gray-200" : "bg-white"}`}>
                <button className="bg-cyan-800 w-full px-2 py-1 text-sm rounded-2xl text-white">Most Popular</button>
                <div className="px-1 py-3">
                  <h1 className="text-4xl font-semibold px-4 font-serif ml-4">Standard</h1>
                  <span className="text-black ml-10 text-4xl font-bold">€20 <span className="text-gray-400 text-sm font-normal">/month</span></span>
                </div>
                <div className="px-5 py-3">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">1 IOT Hub +5 TRVs</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">Connect Upto 20 Devices</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">Access Dashboard</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">24/7 Customer Support</p>
                    </li>
                  </ul>

                  <button className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => handleSelectPlan("Standard")}>
                    Select
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className={`w-[420px] rounded-md cursor-pointer pr-10`}>
              <div className={`bg-gray-200 shadow-xl rounded-2xl ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${isSelected("Premium") ? "bg-gray-200" : "bg-white"}`}>
                <div className="px-1 py-3">
                  <h1 className="text-4xl font-semibold px-4 font-serif ml-2">Premium</h1>
                  <span className="text-black font-bold text-4xl ml-10">€30 <span className="text-gray-400 text-sm font-normal">/month</span></span>
                </div>
                <div className="px-5 py-3">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">2 IOT Hub +10 TRVs</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">Connect Upto 30 Devices</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <XMarkIcon className="w-6 h-6 text-red-500" />
                      <p className="text-sm text-grey-600">No Data Dashboard</p>
                    </li>
                    <li className="flex items-center space-x-4">
                      <CheckIcon className="w-6 h-6 text-green-500" />
                      <p className="text-sm text-grey-600">24/7 Customer Support</p>
                    </li>
                  </ul>
                  <button className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => handleSelectPlan("Premium")}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex ml-[550px] mt-8">
            <button className="bg-red-500 hover:bg-blue-500 mt-3 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => setIsPlans(false)}>Back</button>
            <button className="bg-red-500 hover:bg-blue-500 mt-3 ml-10 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={update}>Next</button>
          </div>
        </div>
      ) : (

        <>
          {back ? (<QuizSection />) : (
            <div className="w-full bg-gradient-to-br from-cyan-700 to-cyan-900 py-16 px-6 flex gap-y-10 flex-col">
              <h2 className="font-bold font-serif text-4xl text-center text-white">
                Please Select Kits
              </h2>

              <div className="flex flex-wrap justify-center gap-8">
                {/* Kit 1 */}
                <div
                  onClick={() => selectKit(1)}
                  className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${selectedKit === 1 && hasSelected ? "bg-blue-600 scale-105 text-white" : "bg-white text-gray-900"
                    } hover:scale-105`}
                >
                  <h4
                    className={`font-bold text-center text-3xl ${selectedKit === 1 && hasSelected ? "text-white" : "text-cyan-700 hover:text-orange-500"
                      }`}
                  >
                    Kit 1
                  </h4>
                  <p className={`text-sm font-bold text-center mt-3 ${selectedKit === 1 && hasSelected ? "text-white" : "text-gray-800"}`}>
                    Ideal for Home and Small Business.
                  </p>
                  <p className={`text-sm text-center mt-2 ${selectedKit === 1 && hasSelected ? "text-white/80" : "text-gray-600"}`}>
                    1 Hub + 10 TRV + 1 Global Thermostat
                  </p>
                  <p className="mt-2">
                    <span className={`font-bold text-xl block text-center ${selectedKit === 1 && hasSelected ? "text-white" : "text-red-600"}`}>
                      Price: €330
                    </span>
                  </p>
                  <button
                    className={`${selectedKit === 1 && hasSelected && "hover:bg-cyan-800"}  bg-cyan-600 hover:bg-blue-600 mt-4 w-full font-bold rounded-full px-4 py-2 text-white transition duration-200`}
                    onClick={() => selectKit(1)}
                  >
                    Select
                  </button>
                </div>

                {/* Kit 2 */}
                <div
                  onClick={() => selectKit(2)}
                  className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${selectedKit === 2 && hasSelected ? "bg-blue-600 scale-105 text-white" : "bg-white text-gray-900"
                    } hover:scale-105`}
                >
                  <h4
                    className={`font-bold text-center text-3xl ${selectedKit === 2 && hasSelected ? "text-white" : "text-cyan-700 hover:text-orange-500"
                      }`}
                  >
                    Kit 2
                  </h4>
                  <p className={`text-sm font-bold text-center mt-3 ${selectedKit === 2 && hasSelected ? "text-white" : "text-gray-800"}`}>
                    Home and Large Business.
                  </p>
                  <p className={`text-sm text-center mt-2 ${selectedKit === 2 && hasSelected ? "text-white/80" : "text-gray-600"}`}>
                    1 Hub + 10 TRV + 2 Global Thermostat
                  </p>
                  <p className="mt-2">
                    <span className={`font-bold text-xl block text-center ${selectedKit === 2 && hasSelected ? "text-white" : "text-red-600"}`}>
                      Price: €750
                    </span>
                  </p>
                  <button
                    className={`${selectedKit === 2 && hasSelected && "hover:bg-cyan-800"} bg-cyan-600 hover:bg-blue-600 mt-4 w-full font-bold rounded-full px-4 py-2 text-white transition duration-200`}
                    onClick={() => selectKit(2)}
                  >
                    Select
                  </button>
                </div>

                {/* Kit 3 */}
                <div
                  onClick={() => selectKit(3)}
                  className={`cursor-pointer w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${selectedKit === 3 && hasSelected ? "bg-blue-600 scale-105 text-white" : "bg-white text-gray-900"
                    } hover:scale-105`}
                >
                  <h4
                    className={`font-bold text-center text-3xl ${selectedKit === 3 && hasSelected ? "text-white" : "text-cyan-700 hover:text-orange-500"
                      }`}
                  >
                    Kit 3
                  </h4>
                  <p className={`text-sm font-bold text-center mt-3 ${selectedKit === 3 && hasSelected ? "text-white" : "text-gray-800"}`}>
                    Custom Kit for Large Companies.
                  </p>
                  <p className={`text-sm text-center mt-2 ${selectedKit === 3 && hasSelected ? "text-white/80" : "text-gray-600"}`}>
                    Customized for Business and Companies.
                  </p>
                  <p className="mt-2">
                    <span className={`font-bold text-xl block text-center ${selectedKit === 3 && hasSelected ? "text-white" : "text-red-600"}`}>
                      Price: €900
                    </span>
                  </p>
                  <button
                    className={`${selectedKit === 3 && hasSelected && "hover:bg-cyan-800"} bg-cyan-600 hover:bg-blue-600 mt-4 w-full font-bold rounded-full px-4 py-2 text-white transition duration-200`}
                    onClick={() => selectKit(3)}
                  >
                    Select
                  </button>
                </div>


              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-16 mt-8">
                {/* Back Button */}
                <button
                  onClick={goBack}
                  className="bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 hover:from-green-600 hover:via-orange-600 hover:to-blue-600 text-white font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Back
                </button>

                {/* Next Button */}
                <button
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-teal-600 hover:via-cyan-500 hover:to-purple-600 text-white font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={next}
                >
                  Next
                </button>
              </div>

            </div>
          )}
        </>

      )}
    </>
  );
};

export default SelectKitsPlans;

