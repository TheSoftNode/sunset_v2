import React from 'react'
import Aboutus from '../assests/Aboutus.png'

const Company = () => {
  return (
   
    <div className='px-20 bg-sky-500 w-full h-96 flex max-auto'>
       <div className='basis-[55%]'>
      <h1 className='text-4xl  text-white font-extrabold pt-10 '>About SusNet</h1>
      <p className='text-white text-sm pt-10'><span className='font-bold'>SusNet</span>  is a fully automated energy management network led by AI techniques. The POC of 50-65% bill cutting is validated.</p>
      <p className='text-white text-sm pt-10'><span className='font-bold'>SusNet</span> is enabled with global and local optimisation for energy consumption via specific and highly correlational features greater than 90% with various  IOT components </p>
      <p className='text-white text-sm pt-10'><span className='font-bold'>SusNet</span>  is designed with the close-loop structure to process comprehensive online data into a final decision and automatically act back on local and global components in seconds. </p>
      <p className='text-white text-sm pt-10'><span className='font-bold'>SusNet</span> is easy and simple to install without any technical knowledge, simple UI to sign up and that is really it! </p> 
      </div> 
      <div className='basis-[45%]'>
      <img className='w-96 h-[400px] pl-32' src={Aboutus}/>
      </div>
      
    </div>
    
    
  )
}

export default Company