import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setShowDatePicker(false);
  };

  const formattedDateRange = startDate && endDate ? `${format(startDate, 'PPP')} - ${format(endDate, 'PPP')}` : 'Jan 1 - Dec 2023';

  return (
    <div className="relative max-w-sm">
      <button
        type="button"
        className="text-[#383E49] border border-[#667185] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center space-x-2"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        <span>{formattedDateRange}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transform transition-transform ${showDatePicker ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </button>
      {showDatePicker && (
        <div className="absolute left-0 mt-12">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            initialFocus
           
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
