import React from 'react';
import { useParams } from 'react-router-dom';
import './RecordDetail.css';

const RecordDetail = () => {
  const { date } = useParams();

  return (
    <div className="record-detail-container">
      <h1>{date}</h1>
      <div className="record-form">
        <div className="form-group">
          <label>몸상태</label>
          <div className="checkbox-group">
            <input type="checkbox" id="headache" />
            <label htmlFor="headache">두통</label>
            {/* 다른 체크박스들도 추가 */}
          </div>
        </div>
        {/* 다른 폼 그룹들도 추가 */}
        <div className="form-buttons">
          <button className="save-button">저장</button>
          <button className="edit-button">수정</button>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
