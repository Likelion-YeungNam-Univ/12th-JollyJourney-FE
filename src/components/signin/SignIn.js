import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './SignIn.css';

const SignIn = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      // API 요청
      const response = await axios.post('http://13.125.25.162:8080/auth/signin', {  
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // 로그인 성공 시 처리
        console.log('로그인 성공:', response.data);
        setError('');
        navigate('/main'); // 메인 페이지로 리다이렉트
      } else {
        // 로그인 실패 시 처리
        setError('로그인에 실패했습니다.');
      }
    } catch (error) {
      console.log('로그인 오류:', error);
      setError('서버 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <div className="signin-container">
        <h2 className="welcome-message">Jolly Journey 에 오신 걸 환영해요!</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="signin-button">로그인</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className="signup-link">
          <span>계정이 없으신가요? </span>
          <button className="signup-button">회원가입</button>
        </div>
        <div className="divider">OR</div>
        <div className="kakao-login">
          <button className="kakao-button">카카오 계정으로 3초만에 시작하기</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
