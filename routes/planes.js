const express = require('express');
const router = express.Router();
const { getPlanes, createPlane, getPlaneById } = require('../controllers/plane');
const path = require('path');
const multer = require('multer');

// Показываем, где хранить загруженные картинки
const storage = multer.diskStorage({
  destination: './assets',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// @route GET /api/planes
// @des Получить все самолёты
router.get('/', getPlanes);

// @route GET /api/planes/:id
// @des Получить конкретный самолёт по id
router.get('/:id', getPlaneById);

// @route POST /api/planes
// @des Создать новый самолёт
router.post('/', upload.single('planeImg'), createPlane);

module.exports = router;
