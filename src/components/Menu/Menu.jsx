import React from 'react';
import styles from './Menu.module.css';
import menu from '../../Assets/menu1.png';

// import bg from '../../Assets/sobreBG.jpg';

const Menu = () => {
  return (
    <section className={styles.section} id="Menu">
      <div className={styles.upper}>
        <img src={menu} alt="menu" className={styles.logo} />
        <h1 className={styles.title}>Menu</h1>
      </div>

      <div className={styles.menu}>
        <div className={styles.submenu}>
          <h1 className={styles.subTitle}>Tradicionais</h1>

          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BROWNIE AFETO...........
              <span className={styles.price}>R$4,00</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo.
            </p>
          </div>
          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BROWNIE CROCANTE...........
              <span className={styles.price}>R$5,00</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico incrementado com castanhas do pará.
            </p>
          </div>
          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BORDINHA CROCANTE...........
              <span className={styles.price}>R$3,00</span>
            </h1>
            <p className={styles.descricao}>
              Para quem gosta da parte mais sequinha, um pacote só de bordinhas.
            </p>
          </div>
        </div>

        <div className={styles.submenu}>
          <h1 className={styles.subTitle}>Recheadinhos</h1>

          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BRIGADEIRO CREMOSO...........
              <span className={styles.price}>R$6,00</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo e muuuuito
              bem recheado com brigadeiro.
            </p>
          </div>
          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BEIJINHO DE CÔCO...........
              <span className={styles.price}>R$6,00</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo e muuuuito
              bem recheado com beijinho de côco.
            </p>
          </div>
          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              DOCE DE LEITE...........
              <span className={styles.price}>R$6,00</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo e muuuuito
              bem recheado com doce de leite.
            </p>
          </div>
        </div>

        <div className={styles.submenu}>
          <h1 className={styles.subTitle}>Brownelícia</h1>

          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BRIGADEIRO CREMOSO...........
              <span className={styles.price}>R$8,50</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo com uma
              super cobertura de brigadeiro.
            </p>
          </div>
          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              BEIJINHO DE CÔCO...........
              <span className={styles.price}>R$8,50</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo com uma
              super cobertura de beijinho de côco.
            </p>
          </div>
          <div className={styles.brownie}>
            <h1 className={styles.nome}>
              DOCE DE LEITE...........
              <span className={styles.price}>R$8,50</span>
            </h1>
            <p className={styles.descricao}>
              Nosso Brownie clássico feito com chocolate meio amargo com uma
              super cobertura de doce de leite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
