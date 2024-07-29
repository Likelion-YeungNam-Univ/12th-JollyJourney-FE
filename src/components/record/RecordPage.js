import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './RecordPage.css';

const RecordPage = () => {
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
    navigate(`/record/${formattedDate}`);
  };

  return (
    <div className="record-page-container">
      <h1>나의 기록</h1>
      <Calendar onClickDay={handleDateClick} />
    </div>
  );
};

export default RecordPage;