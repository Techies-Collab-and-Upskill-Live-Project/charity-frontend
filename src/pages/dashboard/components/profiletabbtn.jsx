// TabButton.js
import React from 'react';

const TabButton = ({ label,  isActive, onClick }) => {
  return (
    <button
      className={`inline-flex items-center py-1 px-4 -mb-px text-sm text-center ${
        isActive ? 'text-white bg-teal-600 border-b-2 border-teal-500 rounded-2xl' : 'text-black font-medium'
      } sm:text-base font-medium whitespace-nowrap focus:outline-none cursor-pointer`}
      onClick={onClick}
    >
          {label}
          
    </button>
  );
};

export default TabButton;
