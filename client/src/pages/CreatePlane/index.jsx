import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ContentWrapper } from '../../components/ContentWrapper';
import { createPlane, resetPlaneErrors } from '../../redux/slices/planeSlice';

import styles from './CreatePlane.module.css';

export const CreatePlanePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [capacity, setCapacity] = React.useState('');
  const [planeImg, setPlaneImg] = React.useState(null);

  const { errors } = useSelector((state) => state.plane);

  const handleCreatePlane = React.useCallback(() => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('capacity', capacity);
    formData.append('planeImg', planeImg);

    dispatch(createPlane(formData)).then((res) => {
      if (!res.error) {
        navigate(`/plane/${res.payload._id}`, { replace: true });
      }
    });
  }, [capacity, description, dispatch, name, navigate, planeImg, price]);

  React.useEffect(() => () => dispatch(resetPlaneErrors()), [dispatch]);

  return (
    <ContentWrapper classes={styles.create_plane}>
      <Button
        classes={styles}
        onClick={() => navigate(-1)}
        isBack={true}
        btnClass={styles.container__backbtn}>
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолёт</h1>
        <Input
          name="name"
          placeholder="Название самолёта"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Стоимость"
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          name="capacity"
          placeholder="Вместимость"
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          name="planeImg"
          type="file"
          placeholder="Вместимость"
          error={errors && errors.planeImg && errors.planeImg.message}
          onChange={(e) => setPlaneImg(e.target.files[0])}
        />
        <Button containerClass={styles.container__button} onClick={handleCreatePlane}>
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};
