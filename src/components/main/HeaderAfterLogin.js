import React, { useState } from 'react';
import './HeaderAfterLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/image.png';
import searchIcon from '../../assets/images/search-icon.png';

const HeaderAfterLogin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // 검색 동작 수행, 예: 검색 페이지로 이동
    navigate(`/search?query=${searchTerm}`);
  };
 
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <nav className="nav">
        <ul>
        <li><Link to="/info"><button className="nav-button">육아 스트레스 정보</button></Link></li>
          <li><Link to="/diary"><button className="nav-button">나의 기록</button></Link></li>
        </ul>
      </nav>
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
      <div className="user-menu">
        <button className="user-name-button" onClick={toggleDropdown}>페이스 님 <span>&#9660;</span></button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/logout">
            <button className="dropdown-item">로그아웃</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderAfterLogin;