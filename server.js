// include dependencies
const express = require("express");
const app = express();
const http = require("http");
let cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const {user} = require(process.cwd() + "/business/user");

app.use(cookieParser());

app.use(bodyParser.json({limit: "50mb"}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/hello", async (req, res, next) => {

  ////1. code level injection vulnerable code.
  let value = eval('obj.' + propName); // Sensitive
  let func = Function('obj' + propName); // Sensitive

  let result = await user.getDetails(req, res, next);

  ////8. Added XSS valnurable code.
  const taintedtest = req.query.name;
  res.send(taintedtest); // Noncompliant

});

app.get('/', function (req, res) {
  ////8. Added Security missconfigurations vulnerable code. Show x-powered-by header in response.
  res.send('hello');
});

var server = http.createServer(app);
server.listen(process.env.NODECODACY_PORT);


console.log("app listening on port: " + process.env.NODECODACY_PORT);

module.exports = server;
