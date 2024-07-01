// JS
//https://mdbootstrap.com/docs/react/extended/contact/

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(upload.none());

app.listen(port, () => {
  console.log('Express started on port: ', port);
});