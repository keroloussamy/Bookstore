import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white flex pl-20 h-20 border-b">
      <h3 className="text-3xl font-bold my-auto text-sky-500">Bookstore CMS</h3>
      <ul className="my-auto ml-10 text-sm">
        <Link to="/">BOOKS</Link>
        <Link className="ml-10 text-gray-300" to="/categories">CATEGORIES</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
