import React, { useState } from 'react';


import './SignIn.css';

const SignIn = () => {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email !== 'test@example.com' || password !== 'password') {
      setError('이메일 또는 비밀번호가 일치하지 않습니다.');
    } else {
      setError('');
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

