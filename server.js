const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware для обработки JSON-данных из тела запроса
app.use(bodyParser.json());

// Сервирование статических файлов (HTML, CSS, JS и т.д.)
app.use(express.static("public"));

// Обработчик для сохранения данных из формы
app.post("/save-data-endpoint", (req, res) => {
  const userData = req.body;
  console.log("Полученные данные:", userData);
  res.send("Данные успешно получены."); // отправляем текстовый ответ, а не JSON
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает по адресу http://localhost:${port}`);
});
