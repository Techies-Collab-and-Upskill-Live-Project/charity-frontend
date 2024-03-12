import React, { useState } from 'react';
import { IoFilterOutline } from "react-icons/io5";
const FilterDropdown = ({ items }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 

  return (
    <div className="relative">
      <button
        id="filterDropdownButton"
        onClick={toggleDropdown}
        data-dropdown-toggle="filterDropdown"
        className="w-full md:w-auto flex items-center justify-center space-x-4 py-2 px-4 text-sm font-medium text-[#667185] focus:outline-none"
        type="button"
      >
        <IoFilterOutline className="text-[#667185] w-4 h-4" />
        Filter
      </button>
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="filterDropdown"
          className="z-10 absolute top-full left-0 w-32 p-3 bg-white rounded-lg shadow"
        >
          <h6 className="mb-3 text-xs font-medium text-gray-900">Choose Donation</h6>
          <ul className="space-y-2  text-sm" aria-labelledby="filterDropdownButton">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center cursor-pointer text-center hover:text-teal-500"
               
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
