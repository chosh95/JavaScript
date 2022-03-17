const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const UPLOAD_PATH = 'uploads/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_PATH),
    filename: (req, file, cb) => cb(null, file.fieldname + '_' + Date.now()
        + path.extname(file.originalname))
});
const upload = multer({storage});

const app = express();

app.use((err, req, res, next) => {
    req.status(500).send("File Upload Fails");
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/upload', cors(), upload.single('file'), (req, res, next) => {
    if (!req.file) return next(400);
    res.status(200).send("File Upload Successes")
});

app.get('/file_list', cors(), (req, res, next) => {
    fs.readdir(path.join(__dirname, UPLOAD_PATH), (err, files) => {
        if (err) return next(err);
        res.status(200).send(files);
    });
});

app.listen(3000);
