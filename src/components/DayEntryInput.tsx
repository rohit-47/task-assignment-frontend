import React from 'react';
import '../styling/DayEntryInput.css';

function DayEntryInput({ placeholder }) {
  return (
    <input
      type="text"
      className="note-input"
      placeholder={placeholder}
    />
  );
}

export default DayEntryInput;
