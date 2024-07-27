// src/components/common/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/image.png';
import searchIcon from '../../assets/images/search-icon.png'; // 돋보기 아이콘 이미지
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

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
        <form className="navbar-search" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="필요한 정보를 검색해보세요!" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-button">
            <img src={searchIcon} alt="Search" />
          </button>
        </form>
        <div className="navbar-profile">
          <Link to="/mypage">페이스 님</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
