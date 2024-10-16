import React from 'react'
import Asset6 from '../assests/Asset 6.png'
import image2 from '../assests/image2.webp'

const Documentations = () => {
  return (
    
      
    <div className= ' bg-sky-500 w-full  h-[450px] flex mx-auto'>
      <div className='basis-[60%]'>
      <h1 className=' text-4xl px-32 pt-32 font-sans font-extrabold text-white'>
        Use SusNet as your AI-Enabled cost-cutting Software</h1>
         <p className='text-sm text-white pt-3 px-32'>Outdoor Building Data Analytics,
         <br/>Indoor Building Data Analytics.
  </p>
  </div>
  <div className='basis-[40%]'>
        <img className='w-[750px] h-[450px] pt-8 pr-28 'alt="phoneimg" src={Asset6}/>
    </div>
    </div>
    
    
    
    
  )
}

export default Documentations;