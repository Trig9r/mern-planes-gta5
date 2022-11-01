import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Loading } from '../../components/Loading';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Button } from '../../components/Button';
import { getPlane } from '../../redux/slices/planeSlice';

import styles from './Plane.module.css';

export const PlanePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { plane, isLoading } = useSelector((state) => state.plane);

  React.useEffect(() => {
    dispatch(getPlane(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    plane && (
      <ContentWrapper classes={styles.plane}>
        <div className={styles.desc__content}>
          <Button onClick={() => navigate(-1)} isBack={true}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}</div>
          <Button containerClass={styles.container_btn_buy} onClick={() => navigate('/order')}>
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles.img__content}>
          <img src={plane.planeImg} alt="planeImg" className={styles.image} />
        </div>
      </ContentWrapper>
    )
  );
};
