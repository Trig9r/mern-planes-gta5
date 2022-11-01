import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { ContentWrapper } from '../../components/ContentWrapper';

import styles from './Order.module.css';

export const OrderPage = () => {
  const navigate = useNavigate();
  return (
    <ContentWrapper classes={styles.order}>
      <h1>Ваш заказ будет доставлен в ближайшее время</h1>
      <Button btnClass={styles.button} onClick={() => navigate('/')}>
        На главную
      </Button>
    </ContentWrapper>
  );
};
