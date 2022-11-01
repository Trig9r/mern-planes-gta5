import React from 'react';
import cn from 'classnames';

import loaderWhite from './img/loader-white.svg';

import styles from './Loading.module.css';

export const Loading = ({ isShadow = true }) => {
  const [loaderIcon, setLoaderIcon] = React.useState('');

  React.useEffect(() => {
    setLoaderIcon(loaderWhite);
  }, []);

  return (
    <img className={cn(styles.loader, isShadow && styles.shadow)} src={loaderIcon} alt="loader" />
  );
};
