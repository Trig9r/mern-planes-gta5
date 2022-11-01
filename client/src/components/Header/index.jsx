import React from 'react';

import { ContentWrapper } from '../ContentWrapper';

import waveImg from './img/wave.svg';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper classes={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n Комфортом`}</h1>
        <p className={styles.desc}>
          {`С нашей компанией вы забудете обо всём, кроме\n высокого уровня путешествий`}
        </p>
      </ContentWrapper>
      <img className={styles.header__img} src={waveImg} alt="waveImg" />
    </div>
  );
};
