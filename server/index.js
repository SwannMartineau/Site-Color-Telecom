const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Diabolodead931",
    database: "cruddatabase",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.post("/api/insert", (req, res) => {
    const day_of_week = req.body.day_of_week
    const heure_debut = req.body.heure_debut
    const heure_fin = req.heure_fin

    const sqlInsert = "INSERT into créneaux (day_of_week, heure_debut, heure_fin) VALUES (?,?,?) ";
    db.query(sqlInsert, [day_of_week, heure_debut, heure_fin], (err, result) => {
        console.log(result);
    });

    const sqlDelete = "DELETE * FROM créneaux WHERE  utilisateur.id == créneaux.id_utilisateur";
    db.query(sqlInsert, [day_of_week, heure_debut, heure_fin], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});