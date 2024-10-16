import React from 'react';

const Support = () => {
  return (
    <div className='px-20 bg-sky-500 w-full h-96'>
      <h1 className='text-4xl text-center text-white font-extrabold pt-10'>
        How Can We Help You?
      </h1>
      <div className='text-center text-white mt-8'>
        <p className='text-xl'>We are available 24/7 to assist you.</p>
        <p className='text-lg mt-4'>
          <strong>Email:</strong> <a href='mailto:info@hitoai.ai' className='underline'>info@hitoai.ai</a>
        </p>
        <p className='text-lg mt-2'>
          <strong>WhatsApp:</strong> <a href='https://wa.me/1234567890' className='underline'>+353899832147</a>
        </p>
        <div className='mt-6'>
          <button
            onClick={() => window.location.href = 'mailto:info@hitoai.ai'}
            className='bg-white text-sky-500 font-bold py-2 px-6 rounded'
          >
            Send an Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
