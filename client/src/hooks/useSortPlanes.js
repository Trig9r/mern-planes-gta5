import React from 'react';
import PropTypes from 'prop-types';

export const useSortPlane = (planes) => {
  const [isDescSort, setIsDescSort] = React.useState(false);

  const sortedPlanes = React.useMemo(() => {
    const sorteblePlanes = [...planes];

    sorteblePlanes.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1;
      if (+a.price > +b.price) return isDescSort ? -1 : 1;

      return 0;
    });
    return sorteblePlanes;
  }, [isDescSort, planes]);
  return {
    isDescSort,
    setIsDescSort,
    sortedPlanes,
  };
};

useSortPlane.propTypes = {
  planes: PropTypes.array,
};
