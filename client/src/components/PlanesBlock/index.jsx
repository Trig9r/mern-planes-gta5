import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ContentWrapper } from '../ContentWrapper';
import { getPlanes } from '../../redux/slices/planesSlice';
import { Loading } from '../Loading';
import { PlaneItem } from '../PlaneItem';

import styles from './PlanesBlock.module.css';
import { Button } from '../Button';
import { useSortPlane } from '../../hooks/useSortPlanes';

export const PlanesBlock = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlane(planes || []);

  React.useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.sort}>
        <ContentWrapper classes={styles.planes__operation}>
          <Button btnClass={styles.sort__button} onClick={() => setIsDescSort(!isDescSort)}>
            Сортировать по {`${isDescSort ? 'возрастанию' : 'убыванию'}`} цены
          </Button>
          <Link to="/create-plane" className={styles.create_plane_btn}>
            Добавить новый самолёт
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper classes={styles.planes__grid}>
        {sortedPlanes && sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} />)}
      </ContentWrapper>
    </div>
  );
};
