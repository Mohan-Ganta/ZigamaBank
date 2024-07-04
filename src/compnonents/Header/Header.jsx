import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faEnvelope, faCog, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  const accountHolderData = JSON.parse(
    localStorage.getItem("accountholder")
  );
  return (
    <div>
      <header className={styles.header}>
        <h2>Welcome, {`${accountHolderData.FirstName} ${accountHolderData.LastName} `}</h2>
        <div className={styles.searchBarContainer}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input 
            type="text" 
            className={styles.searchBar} 
            placeholder="Search..." 
          />
        </div>
        <div className={styles.topIcons}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.topIcon} />
          <FontAwesomeIcon icon={faCog} className={styles.topIcon} />
          <FontAwesomeIcon icon={faQuestionCircle} className={styles.topIcon} />
          <FontAwesomeIcon icon={faSignOutAlt} className={styles.topIcon} />
        </div>
      </header>
    </div>
  )
}

export default Header;
