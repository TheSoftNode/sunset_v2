import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/solid"; // Make sure you're importing the icons

export const KitsPlans = () =>
{
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleSelect = (plan) =>
  {
    setSelectedPlan(plan);
  };

  return (
    <div className="w-full bg-cyan-800 h-auto overflow-x-hidden">
      <h2 className="font-bold font-serif text-3xl text-center ml-28 mt-12 text-white">
        Please Select Plans
      </h2>

      <div className="grid lg:grid-cols-3 gap-0 mt-20 mr-10">
        {/* Plan 1: Basic */}
        <div className="w-[420px] rounded-md cursor-pointer pr-10">
          <div
            className={`${selectedPlan === "Basic"
              ? "border-blue-500 shadow-2xl"
              : "border-gray-100"
              } bg-white shadow-2xl border-solid border-1 rounded-2xl transition ease-in-out delay-150 hover:border-gray-100 ml-20 hover:-translate-y-6`}
          >
            {/* {Card Header} */}
            <div className="px-1 py-3">
              <h1 className="text-4xl font-semibold px-4 font-serif ml-3">
                Basic
              </h1>
              <p className="text-sm ml-10 mt-2 text-gray-400">
                Entry Level Features
              </p>
              <div className="justify-center mt-8">
                <span className="ml-9 text-gray-400 text-lg font-normal w-60 h-36"></span>
                <span className="text-black text-4xl font-bold mr-14 pt-2">
                  €10{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    /month
                  </span>
                </span>
              </div>
            </div>

            {/* {Card Body} */}
            <div className="px-5 py-3">
              <ul className="space-y-2">
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-6 h-6 text-green-500" />
                  <p className="text-sm text-grey-600">1 IOT Hub + 1 Thermostat</p>
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
                className="bg-cyan-600 w-3/4 h-auto hover:bg-blue-500 mt-3 ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white"
                onClick={() => toggleSelect("Basic")}
              >
                {selectedPlan === "Basic" ? "Selected" : "Select"}
              </button>
            </div>
          </div>
        </div>

        {/* Plan 2: Standard */}
        <div className="w-[420px] rounded-md cursor-pointer pr-10">
          <div
            className={`${selectedPlan === "Standard"
              ? "border-blue-500 shadow-2xl"
              : "border-gray-100"
              } bg-white shadow-lg border-solid border-1 rounded-2xl hover:border-gray-100 ml-20 hover:-translate-y-6 transition ease-in-out delay-150`}
          >
            <button className="bg-cyan-800 w-full px-2 py-1 text-sm rounded-2xl text-white">
              Most Popular
            </button>

            {/* {Card Header} */}
            <div className="px-1 py-3">
              <h1 className="text-4xl font-semibold px-4 font-serif ml-4">
                Standard
              </h1>
              <p className="text-sm ml-10 mt-2 text-gray-400">
                Essential Features
              </p>
              <div className="ml-8 justify-center mt-4">
                <span className="text-black ml-2 text-4xl font-bold">
                  €20{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    /month
                  </span>
                </span>
              </div>
            </div>

            {/* {Card Body} */}
            <div className="px-5 py-3">
              <ul className="space-y-2">
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-6 h-6 text-green-500" />
                  <p className="text-sm text-grey-600">1 IOT Hub + 5 TRVs</p>
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
                onClick={() => toggleSelect("Standard")}
              >
                {selectedPlan === "Standard" ? "Selected" : "Select"}
              </button>
            </div>
          </div>
        </div>

        {/* Plan 3: Premium */}
        <div className="w-[420px] rounded-md cursor-pointer pr-10">
          <div className={`${selectedPlan === "Premium"
            ? "border-blue-500 shadow-2xl"
            : "border-gray-100"
            } bg-white shadow-lg border-solid border-1 rounded-2xl hover:border-gray-100 ml-20 transition ease-in-out delay-150 hover:-translate-y-6`}
          >
            {/* {Card Header} */}
            <div className="px-1 py-3">
              <h1 className="text-4xl font-semibold px-4 font-serif ml-2">
                Premium
              </h1>
              <p className="text-sm ml-8 mt-2 text-gray-400">
                Custom Premium Features
              </p>
              <div className="justify-center mt-4">
                <span className="text-black font-bold text-4xl ml-10">
                  €30{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    /month
                  </span>
                </span>
              </div>
            </div>

            {/* {Card Body} */}
            <div className="px-5 py-3">
              <ul className="space-y-2">
                <li className="flex items-center space-x-4">
                  <CheckIcon className="w-6 h-6 text-green-500" />
                  <p className="text-sm text-grey-600">2 IOT Hub + 10 TRVs</p>
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
              <button
                className="bg-cyan-600 w-3/4 h-auto hover:bg-blue-500 mt-3 
                ml-4 font-bold rounded-lg px-3 py-2 mb-2 text-white"
                onClick={() => toggleSelect("Premium")}
              >
                {selectedPlan === "Premium" ? "Selected" : "Select"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}