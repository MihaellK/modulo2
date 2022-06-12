const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'dbCurriculo.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("../frontend/"));

app.use(express.json());

app.get('/skills', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM tbSkill';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});