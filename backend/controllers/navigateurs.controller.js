const asyncHandler = require('express-async-handler');
const db = require('../config/db');

// ADD NAVIGATEUR
const addNavigateur = asyncHandler(async (req, res) => {
    const  {nomNavigateur, prenomNavigateur, telNavigateur, emailNavigateur} = req.body;

    const sql = "INSERT INTO `navigateurs` (`nomNavigateur`, `prenomNavigateur`, `telNavigateur`, `emailNavigateur`) VALUES (?, ?, ?, ?)";
    const values = [nomNavigateur, prenomNavigateur, telNavigateur, emailNavigateur];

    db.query(sql, values, (err, data) => {
        if (err) {
            res.status(500).send({error: err});
            return;
        }
        res.status(201).send({message: "Navigateur ajouté"});
    })
})

module.exports = {addNavigateur};