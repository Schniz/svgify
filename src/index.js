const uuid = require("uuid");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const svgify = require("./svgify");

const writeFile = (fileName, contents) =>
  new Promise((resolve, reject) => {
    fs.writeFile(fileName, contents, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });

const app = express();

app.post("/", bodyParser.raw({ type: "*/*", limit: "2mb" }), function(req, res, next) {
  const id = uuid();
  const fileName = `/tmp/file_${id}.jpg`;
  writeFile(fileName, req.body)
    .then(() => {
      return svgify(fileName);
    })
    .then(svg => res.type(".svg").send(svg))
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    })
    .then(() => {
      fs.unlinkSync(fileName);
      fs.unlinkSync(fileName + ".resized");
    });
});

app.listen(3000);
