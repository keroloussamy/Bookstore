import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h3>BookStore CMS</h3>
      <ul>
        <Link to="/">Books |</Link>
        <Link to="/categories">Categories</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
