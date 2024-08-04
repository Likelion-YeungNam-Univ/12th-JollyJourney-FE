import React from 'react';
import './HeaderBeforeLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/image.png';

const HeaderBeforeLogin = () => {
  return (
    <header className="header">
      <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
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
        <li>
          <Link to="/signin">
          <button className="login-button">로그인</button>
          </Link>
          </li>
        <li>  
          <Link to="/signup">
        <button className="signup-button">회원가입</button>
          </Link>
          </li>
      </div>
    </header>
  );
};

export default HeaderBeforeLogin;
