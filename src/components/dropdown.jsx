// DropdownMenu.js
import React from 'react';

const DropdownMenu = ({ isOpen, closeDropdown, options }) => {
  return (
    <div
      className={`absolute  mt-2 bg-white w-40 rounded-md shadow-lg ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {options.map((option) => (
        <button
          key={option.id}
          className="block px-4 py-2 text-sm text-gray-700 "
          onClick={() => {
            // Handle the option click
            option.onClick();
            closeDropdown();
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default DropdownMenu;
