import React from 'react';
import cn from 'classnames';

import styles from './ContentWrapper.module.css';

export const ContentWrapper = ({ children, classes = '' }) => {
  return <div className={cn(styles.content__wrapper, classes)}>{children}</div>;
};
