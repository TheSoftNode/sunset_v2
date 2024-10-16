// import React, { useState } from 'react';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import Analytics from '../assets/images/Asset4.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Charts from '../components/Analytics/Charts';
// import analyticsHero from '../assets/images/analyticsHero.png'
// import analyticsImage from '../assets/images/analyticsImage.png'

// const EnvironmentalDataAnalytics = () =>
// {
//   const [eircode, setEircode] = useState('')
//   const [errorEircode, setErrorEircode] = useState('')
//   const [isEircodeValid, setIsEircodeValid] = useState(true)
//   const [popupMessage, setPopupMessage] = useState('')
//   const [showPopup, setShowPopup] = useState(false)
//   const [forecastDays, setForecastDays] = useState('7')
//   const [selectedVariables, setSelectedVariables] = useState([])
//   const [coordinates, setCoordinates] = useState(null)
//   const [analysisResult, setAnalysisResult] = useState(null)

//   const hourly_variables_1st_set = {
//     "temperature_2m": "Temperature (2 m)",
//     "relative_humidity_2m": "Relative Humidity (2 m)",
//     "dew_point_2m": "Dewpoint (2 m)",
//   }
//   const hourly_variables_2nd_set = {
//     "cloud_cover": "Cloud cover Total",
//     "wind_direction_10m": "Wind Direction (10 m)",
//     "wind_gusts_10m": "Wind Gusts (10 m)",
//   }

//   function handleEircode(value)
//   {
//     setEircode(value)
//     let remEircode = value.replace(/\s/g, "")
//     let length = remEircode.length
//     if (length != 7)
//     {
//       setErrorEircode("Eircode must be 7 characters long")
//       setIsEircodeValid(false)
//     } else
//     {
//       setErrorEircode('')
//       setIsEircodeValid(true)
//     }
//     console.log("eircode:", remEircode)

//   }

//   function handleForecastDays(value)
//   {
//     setForecastDays(value)
//     console.log("ForecastDays:", forecastDays)
//   }

//   function handleCheckboxChange(key, checked)
//   {
//     setSelectedVariables(prevSelected =>
//     {
//       if (prevSelected.includes(key))
//       {
//         return prevSelected.filter(item => item != key)
//       } else
//       {
//         return [...prevSelected, key]
//       }
//     })
//   }
//   console.log(selectedVariables, "variab les")


//   const handleAnalyseClick = async () =>
//   {
//     try
//     {
//       const response = await fetch(`https://susnet-backend-v3h7.onrender.com/api/environmental_analytics/coordinates/?eircode=${eircode}`)
//       if (response.status === 200)
//       {
//         const data = await response.json()
//         setCoordinates(data.coordinates)
//         setPopupMessage("Eircode validated. Press continue to analyse")
//         setShowPopup(true)
//       } else if (response.status === 404)
//       {
//         setPopupMessage("Not a valid eircode, Enter a valid eircode")
//         setShowPopup(true);
//         setTimeout(() => setShowPopup(false), 4000)
//       } else
//       {
//         setPopupMessage('Internal server error, please try again.');
//         setShowPopup(true);
//         setTimeout(() => setShowPopup(false), 4000);
//       }
//     } catch (error)
//     {
//       setPopupMessage('Internal server error, please try again.');
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 4000);
//     }
//   }

//   console.log("coordinates:", coordinates)

//   const handleContinueClick = async () =>
//   {
//     try
//     {
//       const postData = {
//         latitude: coordinates.latitude,
//         longitude: coordinates.longitude,
//         hourly: selectedVariables,
//         forecast_days: forecastDays
//       }

//       const response = await fetch('https://susnet-backend-v3h7.onrender.com/api/environmental_analytics/analytics/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//       })

//       if (response.status === 200)
//       {
//         const data = await response.json();
//         setAnalysisResult(data.data);
//         setPopupMessage('Analysis completed. See results below.');
//         setShowPopup(true);
//       } else if (response.status === 404)
//       {
//         setPopupMessage('Some problem happened, try again.');
//         setShowPopup(true);
//         setTimeout(() => setShowPopup(false), 3000);
//       }
//     }
//     catch (error)
//     {
//       setPopupMessage('Internal server error, please try again.');
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 3000);
//     }
//   }
//   console.log(analysisResult, "analysisResult")

//   return (
//     <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">

//       {/* <img src={analyticsHero} alt="" /> */}

//       {/* <div className="flex bg-[#1B1014] text-white h-[100%]">
//         <div className="w-1/2 p-12 flex flex-col justify-center">
//           <h1 className="text-6xl font-serif mb-4">Susnet</h1>
//           <h2 className="text-4xl font-serif mb-8">Environmental Forecasting Tool</h2>
//           <p className="text-2xl font-serif leading-relaxed">
//             Welcome to SusNet's AI-powered Weather Forecasting Tool. Gain localized and accurate weather data to optimize energy efficiency and sustainability.
//           </p>
//         </div>

//         <div className="w-1/2 relative p-4">
//           <img
//             src={analyticsImage}
//             alt="Laptop showing data analytics dashboard"
//             className="object-contain h-full w-full"
//           />
//         </div>
//       </div> */}

//       <div className="flex flex-col md:flex-row bg-[#1B1014] text-white h-[100%]">
//         {/* Left side content */}
//         <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
//           <h1 className="text-4xl md:text-6xl font-serif mb-4">Susnet</h1>
//           <h2 className="text-2xl md:text-4xl font-serif mb-8">Environmental Forecasting Tool</h2>
//           <p className="text-lg md:text-2xl font-serif leading-relaxed">
//             Welcome to SusNet's AI-powered Weather Forecasting Tool. Gain localized and accurate weather data to optimize energy efficiency and sustainability.
//           </p>
//         </div>

//         {/* Right side image */}
//         <div className="w-full md:w-1/2 relative p-4">
//           <img
//             src={analyticsImage}
//             alt="Laptop showing data analytics dashboard"
//             className="object-contain h-full w-full"
//           />
//         </div>
//       </div>

//       <main className="container mx-auto px-4 py-12">
//         <div className="grid gap-12">

//           {/* <section className="space-y-8">
//             <div>
//               <h2 className="xs:!text-3xl text-2xl font-bold hyphens-auto !text-black prose mb-4">Efficient and Accurate Environmental Data Analysis</h2>
//               <p className="text-lg prose text-justify text-gray-800 tracking-tight hyphens-auto">
//                 Welcome to SusNet's Environmental Data Analytics tool!
//                 Our AI-powered platform is designed to deliver precise environmental insights, helping you make informed decisions that optimize both energy efficiency and costs.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold mb-4 prose text-cyan-900">How it works:</h3>
//               <ul className="space-y-6">
//                 <li>
//                   <h4 className="text-xl prose text-black font-semibold">Enter Your Eircode:</h4>
//                   <p className='prose text-justify tracking-tighter sm:tracking-tight text-lg text-gray-800'>Start by providing the Eircode of your location in Ireland. This ensures accurate, localized weather data tailored to your area.</p>
//                 </li>
//                 <li>
//                   <h4 className="text-xl prose text-black font-semibold">Select Forecast Range:</h4>
//                   <p className='prose text-justify tracking-tighter  sm:tracking-tight text-lg text-gray-800'>Choose the forecast duration that suits your analysis needs—1, 3, 5, 7, 14, or 16 days. The flexibility allows you to plan ahead effectively.</p>
//                 </li>
//                 <li>
//                   <h4 className="text-xl prose text-black font-semibold">Pick Weather Variables:</h4>
//                   <p className='prose text-justify tracking-tighter sm:tracking-tight text-lg text-gray-800'>Customize your analysis by selecting the weather variables you need, such as temperature, humidity, wind speed, and more.</p>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-2xl prose text-cyan-900 font-semibold mb-2">Why Choose SusNet?</h3>
//               <p className="prose text-justify tracking-tighter sm:tracking-tight text-gray-800 text-lg">
//                 Our platform integrates both outdoor and indoor building data analytics, allowing you to leverage AI for cost-saving strategies that enhance sustainability and operational efficiency. SusNet is your trusted partner in driving smarter, data-driven decisions.
//               </p>
//             </div>
//           </section> */}

//           <section className="container mx-auto !w-[87%] px-8 py-8">
//             <h2 className="text-4xl font-bold text-center mb-8 prose">How It Works</h2>

//             <p className="text-xl mb-8 font-bold prose">Please enter the following</p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
//               <div className=" text-white  overflow-hidden">
//                 <div className="py-4 px-3 text-center bg-[#2A7E9B] rounded-t-[10px] border-3 border-[#1B1014]  font-semibold text-3xl">
//                   Eircode
//                 </div>
//                 <div className="px-4 pt-3 pb-4 h-[150px] text-lg hyphens-auto prose  bg-white rounded-b-[2rem] font-semibold border-b-[3px] border-r-[3px] border-l-[3px] border-[#2A7E9B]">
//                   Unique postal code (Eircode) to receive precise weather data specific to your location.
//                 </div>
//               </div>

//               <div className="text-white overflow-hidden">
//                 <div className="py-4 px-3 text-center bg-[#2A7E9B] rounded-t-[10px] border-3 border-[#1B1014] font-semibold text-3xl">
//                   Forecast Duration
//                 </div>
//                 <div className="px-4 pt-3 pb-4 h-[150px] text-lg hyphens-auto prose  bg-white rounded-b-[2rem] font-semibold  border-b-[3px] border-r-[3px] border-l-[3px] border-[#2A7E9B]">
//                   The duration of how far ahead you'd like to forecast—options range from 1 to 9 days.
//                 </div>
//               </div>

//               <div className="text-white overflow-hidden">
//                 <div className="py-4 px-3 text-center bg-[#2A7E9B] rounded-t-[10px] border-3 border-[#1B1014] font-semibold text-3xl">
//                   Weather Variables
//                 </div>
//                 <div className="px-4 pt-3 pb-4 h-[150px] font-semibold text-lg hyphens-auto prose bg-white rounded-b-[2rem] border-b-[3px] border-r-[3px] border-l-[3px] border-[#2A7E9B]">
//                   Specific weather factors you're interested in, such as temperature, humidity, wind speed, and more, to customize
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* <section className="bg-white shadow-xl rounded-lg md:p-8  p-4">
//             <h2 className="md:!Stext-3xl !text-xl xs:!text-2xl font-bold prose text-black xs:!mb-10 mb-4 text-center">Environmental Data Analysis</h2>

//             <div className="space-y-6 xs:space-y-10">
//               <div>
//                 <label htmlFor="eircode" className="block text-lg prose text-black font-medium mb-2">Enter Eircode</label>
//                 <input
//                   id='eircode'
//                   name='eircode'
//                   type='text'
//                   value={eircode}
//                   onChange={(e) => handleEircode(e.target.value)}
//                   placeholder="Eircode"
//                   aria-label='eircode'
//                   className={`w-full p-3 border ${!isEircodeValid ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
//                 />
//                 {!isEircodeValid && (
//                   <p className='text-red-500 text-sm mt-1'>{errorEircode}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="forecastDays" className="block prose text-black text-lg font-medium mb-2">Forecast Duration</label>
//                 <select
//                   id="forecastDays"
//                   name='forecastdays'
//                   value={forecastDays}
//                   onChange={(e) => handleForecastDays(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
//                 >
//                   <option value="1">1 Day</option>
//                   <option value="3">3 Days</option>
//                   <option value="5">5 Days</option>
//                   <option value="7">7 Days (default)</option>
//                   <option value="9">9 Days</option>
//                 </select>
//               </div>

//               <div>
//                 <h3 className="text-lg font-medium mb-3">Weather Variables</h3>
//                 <div className="grid xs:grid-cols-2 gap-4 xs:gap-8">
//                   <div>
//                     {Object.entries(hourly_variables_1st_set).map(([key, label]) => (
//                       <div key={key} className="flex items-center mb-3 xs:!mb-4">
//                         <input
//                           type="checkbox"
//                           id={`checkbox-${key}`}
//                           checked={selectedVariables.includes(key)}
//                           onChange={() => handleCheckboxChange(key)}
//                           className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
//                         />
//                         <label htmlFor={`checkbox-${key}`} className="ml-2  text-sm">{label}</label>
//                       </div>
//                     ))}
//                   </div>
//                   <div>
//                     {Object.entries(hourly_variables_2nd_set).map(([key, label]) => (
//                       <div key={key} className="flex items-center mb-3 xs:!mb-4">
//                         <input
//                           type="checkbox"
//                           id={`checkbox-${key}`}
//                           checked={selectedVariables.includes(key)}
//                           onChange={() => handleCheckboxChange(key)}
//                           className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
//                         />
//                         <label htmlFor={`checkbox-${key}`} className="ml-2 text-sm">{label}</label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="text-right">
//                 <button
//                   className="bg-cyan-600 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
//                   onClick={handleAnalyseClick}
//                 >
//                   Analyse
//                 </button>
//               </div>
//             </div>
//           </section> */}

//         </div>
//       </main>

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className={`bg-white rounded-lg shadow-2xl ${popupMessage.includes('Analysis completed') ? 'max-w-4xl w-full h-[90vh]' : 'max-w-md w-full'} p-8`}>
//             {!popupMessage.includes('Analysis completed') ? (
//               <>
//                 <p className="text-xl mb-4">{popupMessage}</p>
//                 {popupMessage.includes('Eircode validated') && (
//                   <button
//                     className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
//                     onClick={handleContinueClick}
//                   >
//                     Continue
//                   </button>
//                 )}
//               </>
//             ) : (
//               <div className="h-full flex flex-col">
//                 <div className="flex-grow overflow-y-auto">
//                   <Charts data={analysisResult} />
//                 </div>
//                 <button
//                   className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
//                   onClick={() => setShowPopup(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnvironmentalDataAnalytics;

import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Analytics from '../assets/images/Asset4.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from '../components/Analytics/Charts';
import analyticsHero from '../assets/images/analyticsHero.png'
import analyticsImage from '../assets/images/analyticsImage.png'

const EnvironmentalDataAnalytics = () =>
{
  const [eircode, setEircode] = useState('')
  const [errorEircode, setErrorEircode] = useState('')
  const [isEircodeValid, setIsEircodeValid] = useState(true)
  const [popupMessage, setPopupMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [forecastDays, setForecastDays] = useState('7')
  const [selectedVariables, setSelectedVariables] = useState([])
  const [coordinates, setCoordinates] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)

  const hourly_variables_1st_set = {
    "temperature_2m": "Temperature (2 m)",
    "relative_humidity_2m": "Relative Humidity (2 m)",
    "dew_point_2m": "Dewpoint (2 m)",
  }
  const hourly_variables_2nd_set = {
    "cloud_cover": "Cloud cover Total",
    "wind_direction_10m": "Wind Direction (10 m)",
    "wind_gusts_10m": "Wind Gusts (10 m)",
  }

  function handleEircode(value)
  {
    setEircode(value)
    let remEircode = value.replace(/\s/g, "")
    let length = remEircode.length
    if (length != 7)
    {
      setErrorEircode("Eircode must be 7 characters long")
      setIsEircodeValid(false)
    } else
    {
      setErrorEircode('')
      setIsEircodeValid(true)
    }
    console.log("eircode:", remEircode)
  }

  function handleForecastDays(value)
  {
    setForecastDays(value)
    console.log("ForecastDays:", forecastDays)
  }

  function handleCheckboxChange(key)
  {
    setSelectedVariables(prevSelected =>
    {
      if (prevSelected.includes(key))
      {
        return prevSelected.filter(item => item != key)
      } else
      {
        return [...prevSelected, key]
      }
    })
  }

  const handleAnalyseClick = async () =>
  {
    try
    {
      const response = await fetch(`https://susnet-backend-v3h7.onrender.com/api/environmental_analytics/coordinates/?eircode=${eircode}`)
      if (response.status === 200)
      {
        const data = await response.json()
        setCoordinates(data.coordinates)
        setPopupMessage("Eircode validated. Press continue to analyse")
        setShowPopup(true)
      } else if (response.status === 404)
      {
        setPopupMessage("Not a valid eircode, Enter a valid eircode")
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000)
      } else
      {
        setPopupMessage('Internal server error, please try again.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000);
      }
    } catch (error)
    {
      setPopupMessage('Internal server error, please try again.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    }
  }

  const handleContinueClick = async () =>
  {
    try
    {
      const postData = {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        hourly: selectedVariables,
        forecast_days: forecastDays
      }

      const response = await fetch('https://susnet-backend-v3h7.onrender.com/api/environmental_analytics/analytics/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })

      if (response.status === 200)
      {
        const data = await response.json();
        setAnalysisResult(data.data);
        setPopupMessage('Analysis completed. See results below.');
        setShowPopup(true);
      } else if (response.status === 404)
      {
        setPopupMessage('Some problem happened, try again.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    }
    catch (error)
    {
      setPopupMessage('Internal server error, please try again.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  }

  return (
    // <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
    <div className="bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#1B1014] text-white h-[100%]">
        <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Susnet</h1>
          <h2 className="text-2xl md:text-4xl font-serif mb-8">Environmental Forecasting Tool</h2>
          <p className="text-lg md:text-2xl font-serif leading-relaxed">
            Welcome to SusNet's AI-powered Weather Forecasting Tool. Gain localized and accurate weather data to optimize energy efficiency and sustainability.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative p-4">
          <img
            src={analyticsImage}
            alt="Laptop showing data analytics dashboard"
            className="object-contain h-full w-full"
          />
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-12">
          <section className="container mx-auto w-full lg:!w-[88%] lg:px-8 px-2 py-8">
            <h2 className="text-4xl font-bold text-center mb-8 prose">How It Works</h2>
            <p className="text-xl mb-8 font-bold prose">Please enter the following</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12">
              <div className=" text-white  overflow-hidden">
                <div className="py-4 px-3 text-center bg-[#2A7E9B] rounded-t-[10px] border-3 border-[#1B1014]  font-semibold text-2xl md:text-3xl">
                  Eircode
                </div>
                <div className="px-4 pt-3 pb-4 h-[150px] text-lg md:hyphens-auto prose  bg-white rounded-b-[2rem] font-semibold border-b-[3px] border-r-[3px] border-l-[3px] border-[#2A7E9B]">
                  Unique postal code (Eircode) to receive precise weather data specific to your location.
                </div>
              </div>
              <div className="text-white overflow-hidden">
                <div className="py-4 px-3 text-center bg-[#2A7E9B] rounded-t-[10px] border-3 border-[#1B1014] font-semibold text-2xl md:text-3xl">
                  Forecast Duration
                </div>
                <div className="px-4 pt-3 pb-4 h-[150px] text-lg md:hyphens-auto prose  bg-white rounded-b-[2rem] font-semibold  border-b-[3px] border-r-[3px] border-l-[3px] border-[#2A7E9B]">
                  The duration of how far ahead you'd like to forecast—options range from 1 to 9 days.
                </div>
              </div>
              <div className="text-white overflow-hidden">
                <div className="py-4 px-3 text-center bg-[#2A7E9B] rounded-t-[10px] border-3 border-[#1B1014] font-semibold text-2xl md:text-3xl">
                  Weather Variables
                </div>
                <div className="px-4 pt-3 pb-4 h-[168px] lg:h-[150px] font-semibold text-lg md:hyphens-auto prose bg-white rounded-b-[2rem] border-b-[3px] border-r-[3px] border-l-[3px] border-[#2A7E9B]">
                  Specific weather factors you're interested in, such as temperature, humidity, wind speed, and more, to customize
                </div>
              </div>
            </div>
          </section>

          <div className="bg-white p-6 border-2 border-teal-700 w-full md:w-[88%] mx-auto">
            <h2 className="text-2xl font-bold text-center !mb-10">Environmental Data Analysis</h2>
            <div className="flex w-full flex-wrap gap-12">
              <div className='w-full md:w-[40%] xl:w-[25%]'>
                <h3 className="font-semibold mb-2 bg-gray-200 p-2">Enter Eircode</h3>
                <input
                  type="text"
                  value={eircode}
                  onChange={(e) => handleEircode(e.target.value)}
                  placeholder="Eircode"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {!isEircodeValid && (
                  <p className='text-red-500 text-sm mt-1'>{errorEircode}</p>
                )}
              </div>
              <div className='w-full md:w-[40%] xl:w-[25%]'>
                <h3 className="font-semibold mb-2 bg-gray-200 p-2">Select Forecast Duration</h3>
                <div className="space-y-2">
                  {[1, 3, 5, 7, 9].map(days => (
                    <button
                      key={days}
                      onClick={() => handleForecastDays(days.toString())}
                      className={`w-full p-2 border border-gray-300 text-sm rounded transition-colors ${forecastDays === days.toString() ? 'bg-blue-500 text-white' : 'bg-white hover:!text-white hover:!bg-gray-200'
                        }`}
                    >
                      {days} Day{days > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>
              <div className='w-full xl:w-[40%]'>
                <h3 className="font-semibold mb-2 bg-gray-200 p-2">Weather Variables</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {Object.entries({ ...hourly_variables_1st_set, ...hourly_variables_2nd_set }).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => handleCheckboxChange(key)}
                      className={`p-2 rounded border border-gray-300 text-sm transition-colors ${selectedVariables.includes(key) ? 'bg-blue-500 text-white' : 'bg-white hover:!bg-gray-200'
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={handleAnalyseClick}
                className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors"
              >
                Analyze
              </button>
            </div>
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-white rounded-lg shadow-2xl ${popupMessage.includes('Analysis completed') ? 'max-w-4xl w-full h-[90vh]' : 'max-w-md w-full'} p-8`}>
            {!popupMessage.includes('Analysis completed') ? (
              <>
                <p className="text-xl mb-4">{popupMessage}</p>
                {popupMessage.includes('Eircode validated') && (
                  <button
                    className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
                    onClick={handleContinueClick}
                  >
                    Continue
                  </button>
                )}
              </>
            ) : (
              <div className="h-full flex flex-col">
                <div className="flex-grow overflow-y-auto">
                  <Charts data={analysisResult} />
                </div>
                <button
                  className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnvironmentalDataAnalytics;