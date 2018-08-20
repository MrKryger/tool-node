var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// создаем парсер для данных в формате json
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

let en = {
  ok: "Good"
};
let ru = {
  ok: "Хорошо"
};
let result = {
  en,
  ru,
}

app.post('/json', jsonParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  
  console.log(request.params)
  console.log(request.body)
  
  response.set('Content-Type', 'application/json');
  response.set("Access-Control-Allow-Origin", "*");
  
  // response.set({
  //   'content-type': 'application/json',
  //   'content-length': '100',
  // });
  
  response.json(result);
});

app.get("/", function(request, response){
  response.send("<h1>Главная страница</h1>");
});

app.listen(3000);