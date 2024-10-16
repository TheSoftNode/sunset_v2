// CongratulationsPage.js
import React from 'react';

const CongratulationsPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Congratulations!</h1>
        <p className="text-lg">You have completed the quiz successfully.</p>
      </div>
    </div>
  );
};

export default CongratulationsPage;
