import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <span>Video Galeri</span>
        <span>Foto Galeri</span>
        <span>Yazarlar</span>
        <span>Üye Paneli</span>
      </div>
    </nav>
  );
};

export default Navbar;
