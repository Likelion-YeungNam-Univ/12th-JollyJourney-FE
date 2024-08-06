// src/components/record/RecordDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RecordDetail.css';
import backButton from '../../assets/images/back-button.png'; // 이미지 경로에 맞게 수정

const RecordDetail = () => {
  const { userDId } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // userDId가 undefined인지 확인
    if (!userDId) {
      setError('Invalid userDId');
      setLoading(false);
      return;
    }

    // API를 통해 특정 일기 조회
    const fetchRecordDetail = async () => {
      try {
        const response = await axios.get(`http://13.125.25.162:8080/diary/2`);
        setRecord(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch record detail:', error);
        setError('Failed to fetch record detail. Please try again later.');
        setLoading(false);
      }
    };

    fetchRecordDetail();
  }, [userDId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord(prevRecord => ({ ...prevRecord, [name]: value }));
  };

  const handleSave = () => {
    // 로컬 스토리지에 기록 저장
    localStorage.setItem(userDId, JSON.stringify(record));
    alert('기록이 저장되었습니다.');
  };

  const handleDelete = () => {
    // 로컬 스토리지에서 기록 삭제
    localStorage.removeItem(userDId);
    alert('기록이 삭제되었습니다.');
    navigate('/diary');
  };

  const handleEdit = () => {
    // 수정 모드로 전환
    alert('수정 모드입니다.');
  };

  const handleBack = () => {
    navigate('/diary');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!record) {
    return <p>No record found.</p>;
  }

  return (
    <div className="record-detail-container">
      <span className="record-header">
        <img src={backButton} alt="뒤로가기" className="back-button" onClick={handleBack} />
        <h2 className="record-date">{record.createDate ? record.createDate.split('T')[0] : '날짜 없음'}</h2>
        <span className="form-buttons">
          <button className="edit-button" onClick={handleEdit}>수정</button>
          <button className="delete-button" onClick={handleDelete}>삭제</button>
          <button className="save-button" onClick={handleSave}>저장</button>
        </span>
      </span>
      <div className="record-form">
        <div className="form-group">
          <label>명상 기록</label>
          <textarea name="meditationReport" value={record.meditationReport} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>감사한 일</label>
          <textarea name="thanksReport" value={record.thanksReport} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>운동 기록</label>
          <textarea name="exerciseReport" value={record.exerciseReport} onChange={handleChange}></textarea>
          <input type="text" name="exerciseTime" placeholder="운동 시간" value={record.exerciseTime} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>수면 시간</label>
          <input type="text" name="sleepTime" placeholder="수면 시간" value={record.sleepTime} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>수면의 질</label>
          <div className="button-group">
            {['좋음', '보통', '나쁨'].map(quality => (
              <button
                key={quality}
                className={`condition-button ${record.sleepQuality === quality ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: 'sleepQuality', value: quality } })}
              >
                {quality}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>육아 기록</label>
          <textarea name="kidReport" value={record.kidReport} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>몸 상태</label>
          <input type="text" name="bodyStatus" placeholder="몸 상태" value={record.bodyStatus} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>감정 상태</label>
          <input type="text" name="emotionStatus" placeholder="감정 상태" value={record.emotionStatus} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default RecordDetail;
