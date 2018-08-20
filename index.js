var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// создаем парсер для данных в формате json
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));


let result = {
  en: "Good",
  ru: "Хорошо",
}

app.post("/json", jsonParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.json(result);
});

app.get("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

app.listen(3000);