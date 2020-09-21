import React from 'react';
import styles from './Encomendas.module.css';
import encomendas from '../../Assets/encomendas.png';
import entregas from '../../Assets/entregas.png';

// import bg from '../../Assets/sobreBG.jpg';

const Encomendas = () => {
  return (
    <section className={styles.section} id="Encomendas">
      <div className={styles.left}>
        <div className={styles.upper}>
          <img className={styles.logo} src={encomendas} alt="encomendas logo" />
          <h1 className={styles.titleL}>ENCOMENDAS</h1>
        </div>

        <div className={styles.down}>
          <h1 className={styles.titleLL}>Como fazer seu pedido:</h1>

          <div className={styles.aaa}>
            <div className={styles.number}>
              <h1 className={styles.numberin}>1</h1>
            </div>
            <p className={styles.par}>
              Toda nossa produção é artesanal, por isso, trabalhamos sob
              encomendas
            </p>
          </div>

          <div className={styles.aaa}>
            <div className={styles.number}>
              <h1 className={styles.numberin}>2</h1>
            </div>
            <p className={styles.par}>
              Através do menu, escolha nossos produtos que deseja encomendar
            </p>
          </div>

          <div className={styles.aaa}>
            <div className={styles.number}>
              <h1 className={styles.numberin}>3</h1>
            </div>
            <p className={styles.par}>
              Clique no link do whatsapp disponível na aba de contatos e entre
              em contato conosco!
            </p>
          </div>

          <div className={styles.aaa}>
            <div className={styles.number}>
              <h1 className={styles.numberin}>4</h1>
            </div>
            <p className={styles.par}>
              Informe seu pedido, a data de entrega, se deseja retirar ou
              receber por delivery e qual será a forma de pagamento{' '}
            </p>
          </div>
        </div>

        <div className={styles.down}>
          <h1 className={styles.titleLL}>Formas de Pagamento:</h1>

          <p className={styles.par}>
            Você pode pagar em <span className={styles.forma}>dinheiro</span>,{' '}
            <span className={styles.forma}>transferência</span>,{' '}
            <span className={styles.forma}>PIC PAY</span>, ou{' '}
            <span className={styles.forma}>boleto</span> (a partir de R$20,00).
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.upper}>
          <img className={styles.logo} src={entregas} alt="encomendas logo" />
          <h1 className={styles.titleR}>ENTREGAS</h1>
        </div>

        <div className={styles.down}>
          <h1 className={styles.titleRR}>
            Nossas entregas funcionam de duas formas:
          </h1>
        </div>

        <div className={styles.down}>
          <h1 className={styles.titleRR}>RETIRADA:</h1>

          <p className={styles.par}>
            Você pode retirar seu pedido no centro de BH, pertinho do Shopping
            Cidade!
          </p>
          <p className={styles.par}>Basta combinar dia e horário. </p>
        </div>

        <div className={styles.down}>
          <h1 className={styles.titleRR}>DELIVERY:</h1>

          <p className={styles.par}>
            Entregamos às sextas a partir das 18H e aos sábados! (situações
            especiais podem ser combinadas).
          </p>
          <p className={styles.par}>
            O preço varia de acordo com o tamanho do pedido e do bairro.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Encomendas;
