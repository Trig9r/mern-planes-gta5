import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

export const Input = ({ type = 'text', name, containerClass, placeholder, onChange, error }) => {
  return (
    <div className={cn(styles.container, containerClass)}>
      <input
        type={type}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  containerClass: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
