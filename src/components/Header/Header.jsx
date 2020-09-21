import React from 'react';
import styles from './Header.module.css';
import logo from '../../Assets/Logo2.png';
import useMedia from '../../Hooks/useMedia';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  // const { pathname } = useLocation();
  // useEffect(() => {
  //   setMobileMenu(false);
  // }, [pathname]);

  return (
    <header className={styles.header}>
      {/* <div className={styles.navL}> */}
        <a className={styles.navL} href="#">
        <img src={logo} className={styles.logo} />
        <h1 className={styles.title}>Afeto em Pedaços</h1>
        </a>
      {/* </div> */}

      <div className={styles.navR}>
        {mobile && (
          <button
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            aria-label="Menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <a className={styles.link} href="#Sobre">
            Sobre
          </a>
          <a className={styles.link} href="#brownies">
            Os Brownies
          </a>
          <a className={styles.link} href="#Menu">
            Menu
          </a>
          <a className={styles.link} href="#Encomendas">
            Encomendas e Entregas
          </a>
          <a className={styles.link} href="#">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
