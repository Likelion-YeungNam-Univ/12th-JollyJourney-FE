import React, { useState } from 'react';
import './HeaderAfterLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/image.png';

const HeaderAfterLogin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
      <div className="user-menu">
        <button className="user-name-button" onClick={toggleDropdown}>페이스 님 <span>&#9660;</span></button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item">마이페이지</button>
            <button className="dropdown-item">로그아웃</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderAfterLogin;
