import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <Link to="/">Strona Główna</Link>
        <Link to="/categories">Kategorie</Link>
      </nav>
    </header>
  );
};

export default Header;
