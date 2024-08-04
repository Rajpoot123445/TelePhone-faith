import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>Phone Numbers</li>
          <li>Number Features</li>
          <li>Solutions</li>
          <li>Partners</li>
          <li>Help Center</li>
          <li>Team Tamar</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button className={styles.accountButton}>My Account</button>
    </header>
  );
}

export default Header