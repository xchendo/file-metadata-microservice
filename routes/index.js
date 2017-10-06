var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer();
var fs = require("fs");


router.get('/', (req, res) => {
  res.render('index', {title:'Hey', message:'Hello there'});
});

router.post('/upload', upload.single('file'), (req, res, next) => {
  
  res.json({size: req.file.size});
});

module.exports = router;