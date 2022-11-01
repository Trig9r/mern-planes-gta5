const Plane = require('../modules/plane');
/**
 * Получить все самолёты
 * @param {*} req
 * @param {*} res
 */
const getPlanes = async (req, res) => {
  try {
    const planes = await Plane.find();

    res.status(200).json(planes);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось получить список самолётов, повторите попытку' });
    console.warn(err);
  }
};

const getPlaneById = async (req, res) => {
  try {
    const plane = await Plane.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (err) {
    res.status(400).json({ message: 'По этому id самолёт не найден, повторите попытку' });
    console.warn(err);
  }
};

/**
 * Создание нового самолёта
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createPlane = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: 'Ошибка! Укажите название самолёта' };
  }

  if (!req.body.price) {
    errors.price = { message: 'Ошибка! Укажите цену самолёта' };
  }

  if (!req.body.description) {
    errors.description = { message: 'Ошибка! Укажите описание самолёта' };
  }

  if (req.body.description && req.body.description.length > 700) {
    errors.description = { message: 'Ошибка! Слишком длинное описание самолёта' };
  }

  if (!req.body.capacity) {
    errors.capacity = { message: 'Ошибка! Укажите вместимость самолёта' };
  }

  if (req.body.capacity && req.body.capacity.length > 2) {
    errors.capacity = { message: 'Ошибка! Вместимость самолёта не может быть больше 99' };
  }

  if (!req.file) {
    errors.planeImg = { message: 'Ошибка! Необходимо загрузить фото' };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description, capacity } = req.body;

    const plane = await Plane.create({
      name,
      price,
      description,
      capacity,
      planeImg: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(201).json(plane);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось создать новый самолёт, повторите попытку' });
    console.warn(err);
  }
};

module.exports = {
  getPlanes,
  getPlaneById,
  createPlane,
};
