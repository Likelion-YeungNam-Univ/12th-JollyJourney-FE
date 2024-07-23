// src/components/common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/image.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/info">육아 스트레스 정보</Link></li>
          <li><Link to="/growth">아이 성장일기</Link></li>
          <li><Link to="/record">나의 기록</Link></li>
          <li><Link to="/community">커뮤니티</Link></li>
        </ul>
        <div className="navbar-profile">
          <Link to="/mypage">페이스 님</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
