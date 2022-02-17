"use strict";

const fs = require('fs');

const checkDir = (path, callback) => {
    fs.stat(path, (err, stats) => {
        if (err && err.code === 'ENOENT') return callback(null, true);
        if (err) return callback(err);

        return callback(null, !stats.isDirectory());
    });
};

const currentPath = __dirname;
let path = `${currentPath}/javascript_200`;

checkDir(path, (err, isTrue) => {
    if (err) return console.log(err);

    if (!isTrue) {
        console.log("Directory already exists");
        path = `${currentPath}/Javascript/js200_new`;
    }

    fs.mkdir(path, (err) => {
        if (err) console.log(err);
        console.log(`${path} directory`);
    });
});
