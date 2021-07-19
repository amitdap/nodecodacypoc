// include dependencies
const express = require("express");
const app = express();
const http = require("http");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(cookieParser());

app.use(bodyParser.json({limit: "50mb"}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

var server = http.createServer(app);
server.listen(process.env.NODECODACY_PORT);


console.log("app listening on port: " + process.env.NODECODACY_PORT);

module.exports = server;
