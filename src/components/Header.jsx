import React from 'react';
import styles from '../styles/header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <img src="/logo.png" alt="Valorant logo" className={styles.logo} />
      <img src="/valorant.png" alt="Valorant logo" className={styles.name} />
    </div>
  );
}

export default Header;
