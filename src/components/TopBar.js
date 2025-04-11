import React from 'react';
import './TopBar.css';
import { FaSearch } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="topbar-left">
          <img src="/Images/logo.png" alt="logo" className="logo" />
        </div>
        <div className="topbar-menu">
          <span>SEÇİM2024</span>
          <span>ÜRGÜP</span>
          <span>GENEL</span>
          <span>GÜNCEL</span>
          <span>TURİZM</span>
          <span>GÜNDEM</span>
          <span>SİZDEN GELENLER</span>
        </div>
        <div className="topbar-right">
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="topbar-bottom">
        <span>Yayınlanma: 11 Nisan 2025 - 06:51</span>
      </div>
    </div>
  );
};

export default TopBar;
