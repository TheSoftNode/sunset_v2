import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Analytics from '../assests/Asset 4.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from './Charts';

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

  function handleCheckboxChange(key, checked)
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
  console.log(selectedVariables, "variab les")


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

  console.log("coordinates:", coordinates)

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
  console.log(analysisResult, "analysisResult")

  return (
    <>
      <div className='flex flex-col'>
        {/* <div className='p-2 bg-sky-500 w-full h-[400px] flex mx-auto'>
          <div className='basis-[55%]'>
            <h1 className='text-4xl px-32 pt-32 font-sans font-extrabold text-white'>
              Use SusNet as your AI-Enabled cost-cutting Software
            </h1>
            <p className='text-sm text-white pt-6 px-32'>
              Outdoor Building Data Analytics
              <br />
              Indoor Building Data Analytics
            </p>
          </div>
          <div className='basis-[25%]'>
            <img className='w-98 h-[300px] pt-14' src={Analytics} alt="Analytics" />
          </div>
        </div> */}

        <div className="flex bg-gray-900 text-white h-screen">
          {/* Left side content */}
          <div className="w-1/2 p-12 flex flex-col justify-center">
            <h1 className="text-6xl font-serif mb-4">Susnet</h1>
            <h2 className="text-2xl font-light mb-6">Environmental Forecasting Tool</h2>
            <p className="text-lg leading-relaxed">
              Welcome to SusNet's AI-powered Weather Forecasting Tool. Gain localized and accurate weather data to optimize energy efficiency and sustainability.
            </p>
          </div>

          {/* Right side image */}
          <div className="w-1/2 relative">
            <img
              src={Analytics}
              alt="Laptop showing data analytics dashboard"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className='p-5 flex flex-row mb-3'>
          <div className='basis-1/3 mb-3 p-3 flex flex-col'>
            <div>
              <h1 className='font-sans text-3xl antialiased font-semibold'>Efficient and Accurate Environmental Data Analysis</h1>
            </div>
            <div>
              <p className='pt-3 text-base font-sans'>
                Welcome to SusNet's Environmental Data Analytics tool!
                Our AI-powered platform is designed to deliver precise environmental insights, helping you make informed decisions that optimize both energy efficiency and costs.
              </p>
            </div>
            <div >
              <h1 className='mt-3 font-sans text-lg antialiased font-semibold'>
                How its work:
              </h1>
              <div className='p-2'>
                <ul>
                  <li className='mt-3'>
                    <h2 className='font-sans'>
                      Enter Your Eircode:
                    </h2>
                    <p className='font-sans p-2 text-base'>
                      Start by providing the Eircode of your location in Ireland. This ensures accurate, localized weather data tailored to your area.
                    </p>
                  </li>
                  <li className='mt-3'>
                    <h2 className='font-sans'>
                      Select Forecast Range:
                    </h2>
                    <p className='font-sans p-2 text-base'>
                      Choose the forecast duration that suits your analysis needs—1, 3, 5, 7, 14, or 16 days. The flexibility allows you to plan ahead effectively.
                    </p>
                  </li>
                  <li className='mt-3'>
                    <h2 className='font-sans'>
                      Pick Weather Variables:
                    </h2>
                    <p className='font-sans p-2 text-base'>
                      Customize your analysis by selecting the weather variables you need, such as temperature, humidity, wind speed, and more.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-2'>
              <h1 className='font-sans text-lg antialiased font-semibold'>Why Choose SusNet?</h1>
            </div>
            <div>
              <p className='pt-3 font-sans text-base'>
                Our platform integrates both outdoor and indoor building data analytics, allowing you to leverage AI for cost-saving strategies that enhance sustainability and operational efficiency. SusNet is your trusted partner in driving smarter, data-driven decisions.
              </p>
            </div>

          </div>
          <div className='basis-2/3 mb-3 p-3'>
            <div className='p-5 '>
              <h1 className='font-sans text-2xl antialiased font-semibold'>Enter Eircode</h1>
            </div>
            <div className='pl-12'>
              <input
                id='eircode'
                name='eircode'
                type='text'
                value={eircode}
                onChange={(e) => handleEircode(e.target.value)}
                placeholder="eircode"
                aria-label='eircode'
                className={`block w-full py-3 px-3 text-gray-600 bg-white border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-0 appearance-none rounded-lg transition-colors duration-300`}
              />
              {!isEircodeValid && (
                <p className='ml-3 text-red-500 text-sm mt-1'>{errorEircode}</p>
              )}
            </div>
            <div className='p-5 '>
              <h1 className='font-sans text-2xl antialiased font-semibold'>Forecast Duration</h1>
            </div>
            <div className="relative w-full lg:max-w-sm pl-12">
              <select
                name='forecastdays'
                value={forecastDays}
                onChange={(e) => handleForecastDays(e.target.value)}
                className=" w-60 block  py-3 px-3 text-gray-600 bg-white border border-gray-400 focus:border-blue-400 focus:outline-none focus:ring-0 appearance-none rounded-lg transition-colors duration-300">
                <option value="1">1 Day</option>
                <option value="3">3 Days</option>
                <option value="3">5 Days</option>
                <option value="7">7 Days (default)</option>
                <option value="9">9 Days</option>
              </select>
            </div>
            <div className='p-5'>
              <h1 className='font-sans text-2xl antialiased font-semibold'>Weather Variables</h1>
            </div>
            <div className='pl-5 flex flex-row mb-3'>
              <div className='basis-2/4 p-3'>
                {Object.keys(hourly_variables_1st_set).map((key, index) => (
                  <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor={`checkboxd-${key}`}>
                      {hourly_variables_1st_set[key]}
                    </label>
                    <input
                      className="relative float-right -ml-[1.5rem] h-6 w-4 rounded"
                      type="checkbox"
                      id={`checkbox-${key}`}
                      checked={selectedVariables.includes(key)}
                      onChange={() => handleCheckboxChange(key)}
                    />
                  </div>
                )
                )}


              </div>

              <div className='basis-2/4 p-3 '>
                {Object.keys(hourly_variables_2nd_set).map((key, index) => (
                  <div key={index} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor={`checkbox-${key}`}>
                      {hourly_variables_2nd_set[key]}
                    </label>
                    <input
                      className="relative float-right -ml-[1.5rem] h-6 w-4 rounded"
                      type="checkbox"
                      id={`checkbox-${key}`}
                      checked={selectedVariables.includes(key)}
                      onChange={() => handleCheckboxChange(key)}
                    />
                  </div>
                )
                )}

              </div>
            </div>
            <div className='text-end'>
              <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300'
                onClick={handleAnalyseClick}>
                Analyse
              </button>
            </div>

            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                {/* Common popup container */}
                <div className={`bg-white p-4 rounded shadow-lg text-center ${popupMessage.includes('Analysis completed') ? 'max-w-screen-lg w-full h-[90vh]' : 'max-w-lg w-full'}`}>

                  {/* First popup (small size) */}
                  {!popupMessage.includes('Analysis completed') && (
                    <>
                      <p>{popupMessage}</p>
                      {popupMessage.includes('Eircode validated') && (
                        <button
                          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                          onClick={handleContinueClick}
                        >
                          Continue
                        </button>
                      )}
                    </>
                  )}

                  {/* Second popup (large, for analysis result) */}
                  {popupMessage.includes('Analysis completed') && (
                    <div className="flex flex-col justify-center items-center w-full h-full">
                      <div className="w-full h-full bg-white p-4 overflow-y-auto">
                        <Charts data={analysisResult} />
                      </div>

                      <button
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
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
        </div>
      </div>
    </>
  );
};

export default EnvironmentalDataAnalytics;
