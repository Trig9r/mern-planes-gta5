import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.module.css';

export const Button = ({ containerClass, btnClass, onClick, children, isBack = false }) => {
  return (
    <div className={containerClass}>
      <span className={cn(isBack ? styles.backBtn : styles.btn, btnClass)} onClick={onClick}>
        {children}
      </span>
    </div>
  );
};

Button.propTypes = {
  containerClass: PropTypes.string,
  btnClass: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  isBack: PropTypes.bool,
};
