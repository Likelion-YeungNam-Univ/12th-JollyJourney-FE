// src/components/common/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/image.png';
import searchIcon from '../../assets/images/search-icon.png';
import arrowIcon from '../../assets/images/arrow-icon.png';
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
          <li><Link to="/record">나의 기록</Link></li>
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
          페이스 님
          <img src={arrowIcon} alt="Arrow" />
          <div className="dropdown-menu">
            <Link to="/logout">로그아웃</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
