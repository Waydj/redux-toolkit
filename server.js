const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
// cors политика
app.use(cors());
// для обработки json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// путь к папке с файлами
app.use("/static", express.static(__dirname + "/assets"));
// редирект
app.use("/api/planes", require("./routes/planes"));

mongoose.connect("Ваш адрес DataBase").then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
});
