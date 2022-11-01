import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PlaneItem.module.css';

export const PlaneItem = ({ _id, name, price, planeImg, capacity }) => {
  return (
    <Link to={`plane/${_id}`} className={styles.plane__item}>
      <div className={styles.plane__capacity}>{capacity}</div>
      {planeImg && <img className={styles.plane__img} src={planeImg} alt="planeImg" />}
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>{price}</span>
      </div>
    </Link>
  );
};

PlaneItem.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  planeImg: PropTypes.string,
  capacity: PropTypes.string,
};
