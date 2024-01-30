// DropdownMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
const DropdownMenu = ({ isOpen, closeDropdown, options }) => {
  return (
    <div
      className={`absolute  mt-2 bg-white w-40 rounded-md shadow-lg ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {options.map((option) => (
        <Link
          key={option.id}
          className="block px-4 py-2 text-sm text-gray-700 "
          onClick={() => {
            // Handle the option click
            option.onClick();
            closeDropdown();
          }}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
