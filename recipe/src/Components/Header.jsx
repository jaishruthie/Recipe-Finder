import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Recipe Finder</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signup">Sign-up</Link></li>
            <li><Link to="/login">Log-in</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
