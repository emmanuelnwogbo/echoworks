require("dotenv").config();
import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(express.static('public'));
app.use(express.static('_app'));

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/images', express.static('images'));

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/brand', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/html/moneypigeon.html'));
});

app.get('/moneypigeon', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/html/moneypigeon.html'));
});

app.get('/oraimo', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/html/oraimo.html'));
});

app.get('/oraimowaye', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/html/oraimowaye.html'));
});

app.get('/pernodricard', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/html/pernodricard.html'));
});

app.get('/images/:imageName', function(req, res) {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, 'webp', imageName);

 // console.log(imageName, imagePath)

  res.sendFile(imagePath);
})

server.listen(PORT, async (error) => {
    if (error) {
      return error;
    }
  
    return console.log(`server started on port here ${PORT}`);
});