import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecordDetail.css';

const RecordDetail = () => {
  const { date } = useParams();
  const [record, setRecord] = useState({
    bodyCondition: [],
    mood: [],
    sleepHours: '',
    sleepMinutes: '',
    sleepQuality: '',
    exerciseHours: '',
    exerciseMinutes: '',
    meditationHours: '',
    meditationMinutes: '',
    reflection: '',
    solution: '',
    achievement: ''
  });

  useEffect(() => {
    // 로컬 스토리지에서 기록 불러오기
    const savedRecord = localStorage.getItem(date);
    if (savedRecord) {
      setRecord(JSON.parse(savedRecord));
    }
  }, [date]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setRecord(prevRecord => {
        const updatedArray = checked
          ? [...prevRecord[name], value]
          : prevRecord[name].filter(item => item !== value);
        return { ...prevRecord, [name]: updatedArray };
      });
    } else if (type === 'radio') {
      setRecord(prevRecord => ({ ...prevRecord, [name]: value }));
    } else {
      setRecord(prevRecord => ({ ...prevRecord, [name]: value }));
    }
  };

  const handleSave = () => {
    // 로컬 스토리지에 기록 저장
    localStorage.setItem(date, JSON.stringify(record));
    alert('기록이 저장되었습니다.');
  };

  const handleEdit = () => {
    // 수정 모드로 전환
    alert('수정 모드입니다.');
  };

  return (
    <div className="record-detail-container">
      <h2>{date}</h2>
      <div className="record-form">
        <div className="form-group">
          <label>몸상태</label>
          <div className="checkbox-group">
            <input type="checkbox" id="headache" name="bodyCondition" value="두통" checked={record.bodyCondition.includes('두통')} onChange={handleChange} />
            <label htmlFor="headache">두통</label>
            <input type="checkbox" id="backPain" name="bodyCondition" value="복통" checked={record.bodyCondition.includes('복통')} onChange={handleChange} />
            <label htmlFor="backPain">복통</label>
            <input type="checkbox" id="constipation" name="bodyCondition" value="변비" checked={record.bodyCondition.includes('변비')} onChange={handleChange} />
            <label htmlFor="constipation">변비</label>
            <input type="checkbox" id="digestiveIssues" name="bodyCondition" value="식욕부진" checked={record.bodyCondition.includes('식욕부진')} onChange={handleChange} />
            <label htmlFor="digestiveIssues">식욕부진</label>
            <input type="checkbox" id="vomiting" name="bodyCondition" value="오한" checked={record.bodyCondition.includes('오한')} onChange={handleChange} />
            <label htmlFor="vomiting">오한</label>
            <input type="checkbox" id="musclePain" name="bodyCondition" value="근육통" checked={record.bodyCondition.includes('근육통')} onChange={handleChange} />
            <label htmlFor="musclePain">근육통</label>
            <input type="checkbox" id="skinTrouble" name="bodyCondition" value="피부트러블" checked={record.bodyCondition.includes('피부트러블')} onChange={handleChange} />
            <label htmlFor="skinTrouble">피부트러블</label>
            <input type="checkbox" id="other" name="bodyCondition" value="기타" checked={record.bodyCondition.includes('기타')} onChange={handleChange} />
            <label htmlFor="other">기타</label>
          </div>
        </div>

        <div className="form-group">
          <label>기분상태</label>
          <div className="checkbox-group">
            <input type="checkbox" id="happy" name="mood" value="행복" checked={record.mood.includes('행복')} onChange={handleChange} />
            <label htmlFor="happy">행복</label>
            <input type="checkbox" id="anxiety" name="mood" value="불안" checked={record.mood.includes('불안')} onChange={handleChange} />
            <label htmlFor="anxiety">불안</label>
            <input type="checkbox" id="sensitive" name="mood" value="예민" checked={record.mood.includes('예민')} onChange={handleChange} />
            <label htmlFor="sensitive">예민</label>
            <input type="checkbox" id="depressed" name="mood" value="우울" checked={record.mood.includes('우울')} onChange={handleChange} />
            <label htmlFor="depressed">우울</label>
            <input type="checkbox" id="worry" name="mood" value="걱정" checked={record.mood.includes('걱정')} onChange={handleChange} />
            <label htmlFor="worry">걱정</label>
            <input type="checkbox" id="lethargic" name="mood" value="무기력감" checked={record.mood.includes('무기력감')} onChange={handleChange} />
            <label htmlFor="lethargic">무기력감</label>
          </div>
        </div>

        <div className="form-group">
          <label>수면기록</label>
          <input type="number" name="sleepHours" placeholder="시간" value={record.sleepHours} onChange={handleChange} />
          <input type="number" name="sleepMinutes" placeholder="분" value={record.sleepMinutes} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>수면의 질</label>
          <div className="radio-group">
            <input type="radio" id="good" name="sleepQuality" value="좋음" checked={record.sleepQuality === '좋음'} onChange={handleChange} />
            <label htmlFor="good">좋음</label>
            <input type="radio" id="average" name="sleepQuality" value="보통" checked={record.sleepQuality === '보통'} onChange={handleChange} />
            <label htmlFor="average">보통</label>
            <input type="radio" id="bad" name="sleepQuality" value="나쁨" checked={record.sleepQuality === '나쁨'} onChange={handleChange} />
            <label htmlFor="bad">나쁨</label>
          </div>
        </div>

        <div className="form-group">
          <label>운동기록</label>
          <input type="number" name="exerciseHours" placeholder="시간" value={record.exerciseHours} onChange={handleChange} />
          <input type="number" name="exerciseMinutes" placeholder="분" value={record.exerciseMinutes} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>명상기록</label>
          <input type="number" name="meditationHours" placeholder="시간" value={record.meditationHours} onChange={handleChange} />
          <input type="number" name="meditationMinutes" placeholder="분" value={record.meditationMinutes} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>육아해결</label>
          <textarea name="reflection" placeholder="나의 반성" value={record.reflection} onChange={handleChange}></textarea>
          <textarea name="solution" placeholder="나의 해결방안" value={record.solution} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>나의 성취</label>
          <textarea name="achievement" value={record.achievement} onChange={handleChange}></textarea>
        </div>

        <div className="form-buttons">
          <button className="edit-button" onClick={handleEdit}>수정</button>
          <button className="save-button" onClick={handleSave}>저장</button>
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
