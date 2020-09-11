import React from 'react';
import styles from './Header.module.css';
import logo from '../../Assets/Logo2.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} width="80px" />
    </div>
    <nav className={styles.nav}>
      <a className={styles.link} href="#brownies">
        os brownies
      </a>
      <a className={styles.link} href="#">
        menu
      </a>
      <a className={styles.link} href="#">
        encomendas
      </a>
      <a className={styles.link} href="#">
        contato
      </a>
    </nav>
  </header>
);

export default Header;
