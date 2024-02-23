// TabButton.js
import React from 'react';

const TabButton = ({ label,  isActive, onClick }) => {
  return (
    <button
      className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${
        isActive ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-700 font-medium border-transparent'
      } sm:text-base font-medium whitespace-nowrap focus:outline-none cursor-pointer`}
      onClick={onClick}
    >
          {label}
          
    </button>
  );
};

export default TabButton;
