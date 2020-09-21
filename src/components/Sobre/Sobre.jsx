import React from 'react';
import styles from './Sobre.module.css';

// import bg from '../../Assets/sobreBG.jpg';

const Sobre = () => {
  return (
    <section className={styles.section} id="Sobre">
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre a Afeto...</h1>
        <p className={styles.par}>
          A Afeto surgiu durante um período conturbado para todos... Um período
          de lutas, tristezas, abdicações e muitas superações. Nosso intuito
          aqui nada mais é do que levar um pouco de doçura, um pouco de afeto
          para a vida de cada um durante esse período de difuldade ou em
          qualquer ocasião. Afinal, quando é que um brownie feito com muito
          afeto não é bem vindo?
        </p>
      </div>
    </section>
  );
};

export default Sobre;
