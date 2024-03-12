import React, { useState, useRef, useEffect } from 'react';

const DropdownButton = ({items}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        data-dropdown-toggle="dropdown"
        className="text-[#383E49] border border-[#667185] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        All Campaign
        <svg
          className={`w-2.5 h-2.5 ms-3 text-[#383E49] ${isDropdownOpen ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdown"
          ref={dropdownRef}
          className="z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 p-2 "
        >
          <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center  cursor-pointer text-center hover:text-teal-500"
               
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

export default DropdownButton;
