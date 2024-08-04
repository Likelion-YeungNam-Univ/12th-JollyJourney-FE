import React from 'react';
import './HeaderBeforeLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/image.png';

const HeaderBeforeLogin = () => {
  return (
    <header className="header">
      <div className="logo">JOLLY JOURNEY</div>
      <nav className="nav">
      <ul className="navbar-menu">
          <li><Link to="/info">육아 스트레스 정보</Link></li>
          <li><Link to="/record">나의 기록</Link></li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="필요한 정보를 검색해보세요!" className="search-input" />
        <button className="search-button"><span role="img" aria-label="search">🔍</span></button>
      </div>
      <div className="auth-buttons">
        <button className="login-button">로그인</button>
        <button className="signup-button">회원가입</button>
      </div>
    </header>
  );
};

export default HeaderBeforeLogin;
