import React from 'react'
//import phone from '../assests/Asset 4.png'
//import image2 from '../assests/image2.webp'
import susnet from '../assests/susnet.png'
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import img04 from '../assests/img04.png'


const Homepage = () => {
  return (
    <>
      <div className='w-full bg-slate-100'>
    <img className='absolute w-full  h-[450px] ' alt="background" src={susnet} />
     
      <h1 className='relative text-3xl px-32 pt-20 ml-14 font-serif font-bold text-black '>
        Use SusNet as your AI-Enabled <br/>cost-cutting Software</h1>
         
          <button className= 'bg-white p-2  absolute rounded-lg font-bold ml-48 text-lg mt-6'>
               Explore plans</button>
                 </div>

<div className='mt-56 absolute bg-slate-100 w-full '>
        <h1 className='relative font-bold text-4xl mt-14 font-serif text-black  text-center'>Why us ?</h1>
         <p className='text-center  font-medium mt-4'>Susnet being the best solution to reduce on your electricity bill</p>
        
    <div className='flex justify-between mt-12  px-20 ml-20 overflow-x-hidden'>
      <div className='col-2'>
<img className='w-32 h-28' src={img1}/>
      </div>
      <div className='col-2'>
      <img className='w-32 h-28' src={img2}/>
      </div>
      <div className='col-2'>
      <img className='w-32 h-28' src={img3}/>
      </div>
      <div className=' col-2'>
        <img className='w-32 h-28' src={img04}/>
      </div>
    </div>
    <button title="assistance" class="fixed z-90 bottom-10 right-8 bg-orange-600 w-12 h-12 rounded-full drop-shadow-lg flex justify-center 
    items-center text-white text-xl hover:bg-blue-700 hover:drop-shadow-2xl 
    hover:animate-bounce duration-300" > ✨ </button>
    </div>

    </>
  )
}

    
  

export default Homepage