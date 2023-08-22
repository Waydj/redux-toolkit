const express = require("express");
const {
  getPlanes,
  createPlane,
  getPlaneById,
} = require("../controllers/planes");
const multer = require("multer");

const router = express.Router();

// куда сохранять файлы
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// @route GET /api/planes
// @des Получить все самолеты
router.get("/", getPlanes);

// @route GET /api/planes/:id
// @des Получить самолет по id
router.get("/:id", getPlaneById);

// @route POST /api/planes
// @des  Создать самолет
router.post("/", upload.single("planeImage"), createPlane);

module.exports = router;
