import React from 'react'
import phone from '../assests/Asset 4.png'
import image2 from '../assests/image2.webp'

const DataAnalytics = () => {
  return (
    
      
    <div className= ' bg-sky-500 w-full  h-[400px] flex mx-auto'>
      <div className='basis-[55%]'>
      <h1 className=' text-4xl px-32 pt-20 font-sans font-extrabold text-white'>
        Use SusNet as your AI-Enabled cost-cutting Software</h1>
         <p className='text-sm text-white pt-3 px-32'>Outdoor Building Data Analytics,
          <br/>Indoor Building Data Analytics.
  </p>
  <button className= 'bg-white p-2 rounded-lg font-bold text-lg text-sky-500 hover:bg-red-400 hover:text-white ml-36 mt-6'>
  Learn More..</button>
  </div>
  <div className='basis-[45%]'>
        <img className='w-[500px] h-[400px] pt-8 pr-20 'alt="phoneimg" src={phone}/>
    </div>
    </div>
    
    
    
    
  )
}

export default DataAnalytics