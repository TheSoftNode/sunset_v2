import React from 'react'
import phone from '../assests/Asset 6.png'
import image2 from '../assests/image2.webp'

const Body = () => {
  return (
    
      
    <div className= ' bg-sky-500 w-full  h-[400px] flex mx-auto'>
      <div className='basis-[55%]'>
      <h1 className=' text-4xl px-32 pt-32 font-sans font-extrabold text-white'>
        Use SusNet as your AI-Enabled cost-cutting Software</h1>
         <p className='text-2xl text-white pt-10 px-32'>Outdoor Building Data Analytics,
         <br/>Indoor Building Data Analytics.
  </p>
  </div>
  <div className='basis-[45%]'>
        <img className='w-[550px] h-[450px] pt-14 pr-20 'alt="phoneimg" src={phone}/>
    </div>
    </div>
    
    
    
    
  )
}

export default Body