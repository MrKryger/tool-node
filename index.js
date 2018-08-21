var express = require("express");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false });

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(bodyParser.json({ type: 'application/*+json' }))


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
app.all('/lang',  (req, res)  => {
  if (!req.body) return res.sendStatus(400)
  res.set('Content-Type', 'application/json');
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  if (req.body.lang === 'ru') {
    res.json(result);
  } else {
    res.json(result);
  
  }
  console.log(req.headers)
  console.log(req.body)
  
})

app.post('/json', function (request, response) {
  if(!request.body) return response.sendStatus(400);
  
  console.log(request.params)
  console.log(request.body)
  
  response.set('Content-Type', 'application/json');
  // response.set('Content-Type', 'multipart/form-data');
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

app.listen(3000, () => console.log('http://127.0.0.1:3000/'));