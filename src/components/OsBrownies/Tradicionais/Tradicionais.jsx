import React from 'react';
import styles from './Tradicionais.module.css';
import afeto from '../../../Assets/brownies/tradicionais/afeto.png';
import crocante from '../../../Assets/brownies/tradicionais/crocante1.png';
import bordinha from '../../../Assets/brownies/tradicionais/bordinha.png';

const Tradicionais = () => {
  return (
    <section className={styles.secBrownies}>
      <div className={styles.content}>
        <h1 className={styles.title1}>Tradicionais</h1>
        <h3 className={styles.subtitle}>
          o basiquinho <span className={styles.span}>nem tão básico</span> assim
        </h3>
        <div className={styles.tradicionais}>
          <div className={styles.polaroid}>
            <img className={styles.img} alt="brownie" src={afeto} />
            <div className={styles.middle}>
              <h1 className={styles.bName}>Brownie Afeto</h1>
              <p className={styles.bParagraph}>
                Chocolate meio amargo, mas no ponto certo para adoçar o seu dia
              </p>
            </div>
          </div>

          <div className={styles.polaroid1}>
            <img className={styles.img} alt="brownie" src={crocante} />
            <div className={styles.middle}>
              <h1 className={styles.bName}>Brownie Crocante</h1>
              <p className={styles.bParagraph}>
                O tradicional com um toque especial
              </p>
              <p className={styles.bParagraph}>
                Chocolate meio amargo, com muitos pedaços de castanha do pará
              </p>
            </div>
          </div>

          <div className={styles.polaroid}>
            <img className={styles.img} alt="brownie" src={bordinha} />
            <div className={styles.middle}>
              <h1 className={styles.bName}>Bordinha Crocante</h1>
              <p className={styles.bParagraph}>
                A melhor companhia para um café da tarde
              </p>
              <p className={styles.bParagraph}>
                Aquele snack que vai adoçar seu intervalo no trabalho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tradicionais;
