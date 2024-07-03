import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={`${styles.row} d-flex align-items-center`}>
            <div className="col-lg-6 text-lg-left text-center">
              <div className={styles.copyright}>
                &copy; Copyright <strong>Zigma Bank</strong>. All Rights Reserved
              </div>
              <div className={styles.credits}>
                Designed by <a href="https://www.zigmabank.com">Zigma Bank</a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className={`${styles.footerLinks} text-lg-right text-center pt-2 pt-lg-0`}>
                <a href="#intro" className="scrollto">Home</a>
                <a href="#about" className="scrollto">About</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-use">Terms of Use</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
