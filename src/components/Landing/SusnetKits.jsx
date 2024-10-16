import React from 'react';
import susnetHub from "../../assets/images/susnet_hub.png";
import susnetKit from "../../assets/images/susnet_kit2.png";
import susnetImage from "../../assets/images/susnet_image.png";

const SusnetKits = () =>
{
  const renderKit = (title, description, contents, price) => (
    <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden relative w-full max-w-xs transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <h3 className="text-2xl font-bold text-center text-cyan-700 mb-4">
        {title}
      </h3>
      <p className="text-lg prose font-semibold text-center text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {contents.map((item, index) => (
          <li key={index} className="flex items-center text-sm bg-gray-50 px-2 py-0.5 rounded-lg transition-colors duration-200 ease-in-out hover:bg-gray-100">
            <img
              src={item.image}
              alt={`Icon for ${item.text}`}
              className="w-8 h-8 mr-3 object-cover"
            />
            <span className="font-semibold text-sm">{item.text}</span>
          </li>
        ))}
      </ul>
      <p className="text-center font-bold text-xl text-red-600">{price}</p>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-16 px-6">
      <h2 className="font-bold font-serif text-4xl text-center text-cyan-700 mb-12">
        Susnet Kits
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {renderKit("Kit 1", "Ideal for Homes", [
          { text: "1 x Hub", image: susnetHub },
          { text: "1 x Global Thermostat", image: susnetImage }
        ], "€330")}
        {renderKit("Kit 2", "Homes and Small Businesses", [
          { text: "1 x Hub", image: susnetHub },
          { text: "4 x TRVs", image: susnetKit },
          { text: "1 x Global Thermostat", image: susnetImage }
        ], "€750")}
        {renderKit("Kit 3", "Custom for Large Companies", [
          { text: "Customized # of Hub", image: susnetHub },
          { text: "Customized # of TRVs", image: susnetKit },
          { text: "Customized # of Global Thermostat", image: susnetImage }
        ], "€900")}
      </div>
    </div>
  );
};

export default SusnetKits;

