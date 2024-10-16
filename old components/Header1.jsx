import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assests/logo.png';
import cart from '../assests/cart.jpeg'



const Header = () =>
{
  return (

    <div className=' nav fixed top-0 right-0 z-10 bg-gray-50 w-full h-28 shadow-2xl pl-10' >
      <img className='w-24 h-20 mt-6 px-6 mr-32' src={logo} />
      <ul className=' md:flex p-4 m-2  font-sans  '>
        <li className=' text:semibold   md:px-3 p-2  font-semibold '><NavLink to="/">Home</NavLink></li><li className='mt-2'>|</li>
        <li className=' px-3 p-2 font-semibold hover:text-blue-500'><NavLink to="/documentation">Instructions</NavLink></li><li className='mt-2'>|</li>

        <li className='px-3  p-2 font-semibold  hover:text-blue-500 '><NavLink to="/environmentalDataAnalytics">Environmental Data Analysis </NavLink></li> <li className='mt-2'>|</li>

        <li className='px-3  p-2 font-semibold  hover:text-blue-500 '><NavLink to="/energybill"> Saved Energy/Bill</NavLink></li>


        <li className='px-3  py-2 border-1 font-semibold ml-2  text-blue-500 hover:bg-orange-500 hover:text-white
 border-blue-500 rounded-lg shadow-lg'>
          <NavLink to="https://susnet.hitoai.ai/login">Register Building</NavLink></li>
        <li className='px-3 py-2  ml-8 font-semibold transition ease-in-out delay-150
 bg-blue-500  text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-2xl '>
          <NavLink to="/login">Login</NavLink></li>




      </ul>
      <img className='w-10 h-10 mt-8 ' src={cart} /><NavLink to="/cart"></NavLink>
    </div>





  )
}

export default Header;

