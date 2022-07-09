const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Diabolodead931",
    database: "cruddatabase",
});

app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO utilisateur (Nom, Prenom) VALUES ('inception', 'good movie');"
    db.query(sqlInsert, (err, result)=> {
        res.send("hello world");
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});