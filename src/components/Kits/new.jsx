import { useState } from "react";
import { CheckIcon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/16/solid';

const SelectKitsPlans = () => {
    const [isPlans, setIsPlans] = useState(false); // Initially false, showing the kit selection
    const [selectedKit, setSelectedKit] = useState(null); // Track the selected kit
    const [selectedPlan, setSelectedPlan] = useState(null); // Holds the selected plan
  
    // Function to handle kit selection
    const selectKit = (kitIndex) => {
      setSelectedKit(kitIndex); // Update the selected kit index
    };
    const handleSelectPlan = (plan) => {
      setSelectedPlan(plan); // Set the selected plan when user clicks on "Select"
    };
    const isSelected = (plan) => selectedPlan === plan; // Check if the plan is selected
  
    // Function to handle the "Next" button click
    const next = () => {
      if (selectedKit) {
        setIsPlans(true); // Show the plans page if a kit is selected
      } else {
        alert("Please select a kit first.");
      }
    };
    const update =()=>{
      if(selectedPlan){
        setSelectedPlan(true);
      }else{
        alert("Please Select plan")
      }
    }
  
    return (
      <>
        {isPlans ? (
          // Render the plans component or plan content when "Next" is clicked
          <div className="absolute mt-[2670px] w-full bg-cyan-800 h-auto overflow-x-hidden">
        <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-12 text-white">
          Please Select Plans
        </h2>
  
        <div className="grid lg:grid-cols-3 gap-0 mt-10 mr-10">
          {/* Basic Plan */}
          <div
            className={`w-[420px] rounded-md cursor-pointer pr-10 ${
              isSelected("Basic") ? "" : ""
            }`}
          >
            <div
              className={`bg-gray-200 shadow-xl border-solid border-1 border-gray-100 rounded-2xl transition ease-in-out delay-150 hover:border-gray-100 ml-20 hover:-translate-y-6 ${
                isSelected("Basic") ? "bg-gray-200" : "bg-white"
              }`}
            >
              <div className="px-1 py-3">
                <h1 className="text-4xl font-semibold px-4 font-serif ml-3">
                  Basic
                </h1>
                <p className="text-sm ml-10 mt-2 text-gray-400">
                  Entry Level Features
                </p>
                <span className="text-black text-4xl font-bold ml-10 pt-2">
                  €10 <span className="text-gray-400 text-sm font-normal">/month</span>
                </span>
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
                <button
                  className="bg-cyan-600 w-3/4 hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white"
                  onClick={() => handleSelectPlan("Basic")}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
  
          {/* Standard Plan */}
          <div
            className={`w-[420px] rounded-md cursor-pointer pr-10 ${
              isSelected("Standard") ? " " : ""
            }`}
          >
            <div
              className={`bg-gray-200 shadow-xl border-solid border-1 border-gray-100 rounded-2xl hover:border-gray-100 ml-20 hover:-translate-y-6 transition ease-in-out delay-150 ${
                isSelected("Standard") ? "bg-gray-200" : "bg-white"
              }`}
            >
              <button className="bg-cyan-800 w-full px-2 py-1 text-sm rounded-2xl text-white">
                Most Popular
              </button>
  
              <div className="px-1 py-3">
                <h1 className="text-4xl font-semibold px-4 font-serif ml-4">
                  Standard
                </h1>
                <p className="text-sm ml-10 mt-2 text-gray-400">
                  Essential Features
                </p>
                <span className="text-black ml-10 text-4xl font-bold">
                  €20 <span className="text-gray-400 text-sm font-normal">/month</span>
                </span>
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
                <button
                  className="bg-cyan-600 w-3/4 h-auto hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white"
                  onClick={() => handleSelectPlan("Standard")}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
  
          {/* Premium Plan */}
          <div className={`w-[420px] rounded-md cursor-pointer pr-10 ${
              isSelected("Premium") ? "" : ""
            }`}
          >
            <div
              className={`bg-gray-200 shadow-xl border-solid border-1 border-gray-100 rounded-2xl ml-20 transition ease-in-out delay-150 hover:-translate-y-6 ${
                isSelected("Premium") ? "bg-gray-200" : "bg-white"
              }`}
            >
              <div className="px-1 py-3">
                <h1 className="text-4xl font-semibold px-4 font-serif ml-2">
                  Premium
                </h1>
                <p className="text-sm ml-8 mt-2 text-gray-400">
                  Custom Premium Features
                </p>
                <span className="text-black font-bold text-4xl ml-10">
                  €30 <span className="text-gray-400 text-sm font-normal">/month</span>
                </span>
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
                <button className="bg-cyan-600 w-3/4 h-auto hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white"
                  onClick={() => handleSelectPlan("Premium")}
                > Select</button>
                </div>
    
    </div>
    </div>
    </div>
         
         {/* More plans can be added similarly */}
       
  
       <div className="flex ml-[500px] mt-8">
         <button
           className="bg-red-500 hover:bg-blue-500 mt-3  font-bold rounded-lg px-3 py-2 mb-2 text-white"
           onClick={() => setIsPlans(false)} // Go back to kit selection
         >
           Previous
         </button>
         <button className="bg-red-500 hover:bg-blue-500 mt-3 
         ml-10 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={update}>
           Next
         </button>
       </div>
     </div>
              
        ) : (
          // Initial kit selection UI
          <div className="absolute mt-[2670px] w-full bg-cyan-800 h-auto overflow-x-hidden">
            <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-4 text-white">
              Please Select Kits
            </h2>
  
            <div className="flex justify-between mt-14 px-2 mr-8 overflow-x-hidden">
              {/* Kit 1 */}
              <div
                className={`col-4 px-16 ml-4 rounded-md transition ease-in-out delay-150 ${
                  selectedKit === 1 ? "bg-blue-300" : "bg-white"
                } hover:-translate-x-2`}
              >
                <h4 className="font-bold text-center text-4xl text-cyan-600 hover:text-orange-600 font-serif mr-6 pr-6">
                  Kit 1
                </h4>
                <p className="text-sm font-bold text-center mt-3 font-sans">Ideal for Home and Small Business.</p>
                <p className="text-sm text-center mt-2 font-sans text-gray-500">1 Hub + 1 TRV + 1 Global Thermostat</p>
                <p className="mt-2">
                  <span className="font-bold text-lg ml-16 text-red-600">Price: €330</span>
                </p>
                <button className="bg-cyan-600 hover:bg-blue-500 mt-3 ml-20 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => selectKit(1)}>
                  Select
                </button>
              </div>
  
              {/* Kit 2 */}
              <div
                className={`col-4 px-16 ml-4 rounded-md transition ease-in-out delay-150 ${
                  selectedKit === 2 ? "bg-blue-300" : "bg-white"
                } hover:-translate-y-2`}
              >
                <h4 className="font-bold text-center text-4xl text-cyan-600 hover:text-orange-600 font-serif mr-6 pr-6">
                  Kit 2
                </h4>
                <p className="text-sm font-bold text-center mt-3 font-sans">Home and large Business.</p>
                <p className="text-sm text-center mt-2 font-sans text-gray-500">1 Hub + 10 TRV + 2 Global Thermostat</p>
                <p className="mt-2">
                  <span className="font-bold text-lg ml-16 text-red-600">Price: €750</span>
                </p>
                <button className="bg-cyan-600 hover:bg-blue-500 mt-3 ml-20 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => selectKit(2)}>
                  Select
                </button>
              </div>
  
              {/* Kit 3 */}
              <div
                className={`col-4 px-16 ml-4 rounded-md transition ease-in-out delay-150 ${
                  selectedKit === 3 ? "bg-blue-300" : "bg-white"
                } hover:-translate-x-2`}
              >
                <h4 className="font-bold text-center text-4xl text-cyan-600 hover:text-orange-600 font-serif mr-6 pr-6">
                  Kit 3
                </h4>
                <p className="text-sm font-bold text-center mt-3 font-sans">Custom kit for large companies.</p>
                <p className="text-sm text-center mt-2 font-sans text-gray-500">Customized for business and companies.</p>
                <p className="mt-2">
                  <span className="font-bold text-lg ml-16 text-red-600">Price: €900</span>
                </p>
                <button className="bg-cyan-600 hover:bg-blue-500 mt-3 ml-20 font-bold rounded-lg px-3 py-2 mb-2 text-white" onClick={() => selectKit(3)}>
                  Select
                </button>
              </div>
            </div>
  
            <button className="bg-red-500 hover:bg-red-700 text-white mt-6 ml-[600px] font-bold rounded-lg px-6 py-2 mb-2" onClick={next}>
              Next
            </button>
          </div>
        )}
      </>
    );
  };
  
  export default SelectKitsPlans;
  