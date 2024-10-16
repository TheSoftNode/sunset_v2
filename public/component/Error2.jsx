import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div className='font-bold text-center mt-24'>
        <h1 className='text-2xl'>Oops!!!</h1>
    <h2>Something went wrong!!</h2>
    <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error