import React from 'react';
import { useParams } from 'react-router-dom';
import './RecordDetail.css';

const RecordDetail = () => {
  const { date } = useParams();

  return (
    <div className="record-detail-container">
      <h2>{date}</h2>
      <div className="record-form">
        <div className="form-group">
          <label>몸상태</label>
          <div className="checkbox-group">
            <input type="checkbox" id="headache" />
            <label htmlFor="headache">두통</label>
            <input type="checkbox" id="backPain" />
            <label htmlFor="backPain">복통</label>
            <input type="checkbox" id="constipation" />
            <label htmlFor="constipation">변비</label>
            <input type="checkbox" id="digestiveIssues" />
            <label htmlFor="digestiveIssues">식욕부진</label>
            <input type="checkbox" id="vomiting" />
            <label htmlFor="vomiting">오한</label>
            <input type="checkbox" id="musclePain" />
            <label htmlFor="musclePain">근육통</label>
            <input type="checkbox" id="skinTrouble" />
            <label htmlFor="skinTrouble">피부트러블</label>
            <input type="checkbox" id="other" />
            <label htmlFor="other">기타</label>
          </div>
        </div>

        <div className="form-group">
          <label>기분상태</label>
          <div className="checkbox-group">
            <input type="checkbox" id="happy" />
            <label htmlFor="happy">행복</label>
            <input type="checkbox" id="anxiety" />
            <label htmlFor="anxiety">불안</label>
            <input type="checkbox" id="sensitive" />
            <label htmlFor="sensitive">예민</label>
            <input type="checkbox" id="depressed" />
            <label htmlFor="depressed">우울</label>
            <input type="checkbox" id="worry" />
            <label htmlFor="worry">걱정</label>
            <input type="checkbox" id="lethargic" />
            <label htmlFor="lethargic">무기력감</label>
          </div>
        </div>

        <div className="form-group">
          <label>수면기록</label>
          <input type="number" placeholder="시간" />
          <input type="number" placeholder="분" />
        </div>

        <div className="form-group">
          <label>수면의 질</label>
          <div className="radio-group">
            <input type="radio" id="good" name="sleepQuality" />
            <label htmlFor="good">좋음</label>
            <input type="radio" id="average" name="sleepQuality" />
            <label htmlFor="average">보통</label>
            <input type="radio" id="bad" name="sleepQuality" />
            <label htmlFor="bad">나쁨</label>
          </div>
        </div>

        <div className="form-group">
          <label>운동기록</label>
          <input type="number" placeholder="시간" />
          <input type="number" placeholder="분" />
        </div>

        <div className="form-group">
          <label>명상기록</label>
          <input type="number" placeholder="시간" />
          <input type="number" placeholder="분" />
        </div>

        <div className="form-group">
          <label>육아해결</label>
          <textarea placeholder="나의 반성"></textarea>
          <textarea placeholder="나의 해결방안"></textarea>
        </div>

        <div className="form-group">
          <label>나의 성취</label>
          <textarea></textarea>
        </div>

        <div className="form-buttons">
          <button className="edit-button">수정</button>
          <button className="save-button">저장</button>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
