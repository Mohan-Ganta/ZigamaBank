import React from "react";
import Vesa from "../Images/Visaatm.png";
import MasterCard from "../Images/mastercardatm.png";
import Rupycard from "../Images/rupyatm.png";
import Back from "../Images/atmback.png";
import styles from "./AtmCards.module.css";

export default function AtmCards() {
  return (
    <div>
      <h1 className={styles.subHedCard}>Cards Available Here</h1>
      <div>
        <div className={styles.cardGroup}>
          <article className={styles.card}>
            <div className={styles.productImage}>
              <img src={Vesa} alt="Visa Card" />
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.productImage}>
              <img src={MasterCard} alt="Master Card" />
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.productImage}>
              <img src={Rupycard} alt="Rupy Card" />
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.productImage}>
              <img src={Back} alt="ATM Back" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
