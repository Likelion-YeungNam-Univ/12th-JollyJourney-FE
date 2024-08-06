import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './RecordPage.css';

const RecordPage = () => {
  const navigate = useNavigate();
  const [writtenDates, setWrittenDates] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 글이 작성된 날짜를 가져옵니다.
    const dates = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        dates.push(key);
      }
    }
    setWrittenDates(dates);
  }, []);

  const handleDateClick = (date) => {
    const [yyyy, mm, dd] = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0')
    ];
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    navigate(`/diary/${formattedDate}`);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const today = new Date();
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      if (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
      ) {
        return 'react-calendar__tile--today';
      }
      if (writtenDates.includes(formattedDate)) {
        return 'react-calendar__tile--written';
      }
    }
    return null;
  };

  return (
    <div className="record-page-container">
      <h1>나의 기록</h1>
      <Calendar
        onClickDay={handleDateClick}
        locale="en-US"
        formatDay={(locale, date) => date.getDate()}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default RecordPage;
