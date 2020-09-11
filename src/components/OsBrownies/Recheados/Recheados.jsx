import React from 'react';
import styles from './Recheados.module.css';
import brigadeiro from '../../../Assets/brownies/recheados/brigadeiro.png';
import leite from '../../../Assets/brownies/recheados/leite.png';
import coco from '../../../Assets/brownies/recheados/coco.png';

// 2718 x 3264

const Recheados = () => {
  return (
    <section className={styles.secBrownies}>
      <div className={styles.content}>
        <h1 className={styles.title1}>Recheados</h1>
        <h3 className={styles.subtitle}>
          porque o basiquinho pode ficar{' '}
          <span className={styles.span}>ainda melhor</span>
        </h3>
        <div className={styles.tradicionais}>
          <div className={styles.polaroid}>
            <img className={styles.img} alt="brownie" src={brigadeiro} />
            <div className={styles.middle}>
              <h1 className={styles.bName}>Recheadinho de Brigadeiro</h1>
              <p className={styles.bParagraph}>
                Chocolate meio amargo, com muuuuuito recheio de brigadeiro
              </p>
            </div>
          </div>

          <div className={styles.polaroid1}>
            <img className={styles.img} alt="brownie" src={leite} />
            <div className={styles.middle}>
              <h1 className={styles.bName}>Recheadinho de Doce de Leite</h1>
              <p className={styles.bParagraph}>
                Chocolate meio amargo, com muuuuuito recheio de doce de leite
              </p>
            </div>
          </div>

          <div className={styles.polaroid}>
            <img className={styles.img} alt="brownie" src={coco} />
            <div className={styles.middle}>
              <h1 className={styles.bName}>Recheadinho de Beijinho</h1>
              <p className={styles.bParagraph}>
                Chocolate meio amargo, com muuuuuito recheio de beijinho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recheados;
