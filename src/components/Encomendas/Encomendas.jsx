import React from 'react';
import styles from './Encomendas.module.css';
import encomendas from '../../Assets/encomendas.png';
import entregas from '../../Assets/entregas.png';

// import bg from '../../Assets/sobreBG.jpg';

const Encomendas = () => {
  return (
    <section className={styles.section} id="Encomendas">
      <div className={styles.left}>
        <div className={styles.first}>
          <div className={styles.upper}>
            <img
              className={styles.logo}
              src={encomendas}
              alt="encomendas logo"
            />

            <h1 className={styles.titleL}>ENCOMENDAS</h1>
          </div>
          <div className={styles.down}>
            <p className={styles.pp}>
              Toda nossa produção é artesanal, por isso, trabalhamos sob
              encomendas!
            </p>

            <p className={styles.pp}>
              Para fazer a sua, basta escolher os produtos que deseja
              encomendar, informar a forma de pagamento (trabalhamos com
              dinheiro, transferência, PIC PAY, ou boleto a partir de R$20,00),
              e nos dizer se deseja retirar no local ou se deseja a opção de
              delivery.{' '}
            </p>
          </div>
        </div>

        <div className={styles.first}>
          <div className={styles.upper}>
            <img className={styles.logo} src={entregas} alt="entregas logo" />

            <h1 className={styles.titleL}>ENTREGAS</h1>
          </div>
          <div className={styles.down}>
            <p className={styles.pp}>
              Nossas entregas funcionam de duas formas:
            </p>

            <h3 className={styles.entrega}>Retirada:</h3>
            <p className={styles.pp}>
              Você pode retirar seu pedido no centro de BH, pertinho do Shopping
              Cidade! Basta combinar dia e horário.
            </p>
            <h3 className={styles.entrega}>Delivery:</h3>
            <p className={styles.pp}>
              Entregamos às sextas a partir das 18H e aos sábados! (situações
              especiais podem ser combinadas).
            </p>
            <p className={styles.pp}>
              O preço varia de acordo com o tamanho do pedido e do bairro.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.rtitle}>E aí, gostou?</h1>
        <p className={styles.rp}>
          Para realizar seu pedido é fácil! Basta clicar no botão abaixo para
          entrar em contato conosco e trazer um pouco mais de afeto para o seu
          dia!
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5531997737633"
          target="_blank"
        >
          <button className={styles.btn}>EU QUERO AFETO</button>
        </a>
      </div>
    </section>
  );
};

export default Encomendas;
