import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Record.css';

const Record = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const today = new Date();
      if (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
      ) {
        return 'react-calendar__tile--today';
      }
    }
    return null;
  };
  
  return (
    <div className="record-container">
      <h1 className="record-header">나의 기록</h1>
      <Calendar onChange={onChange} value={date} />
      <div className="record-details">
        <h2>{date.toDateString()}</h2>
        <p>해당 날짜의 기록을 여기에 표시합니다.</p>
      </div>
    </div>
  );
};

export default Record;
