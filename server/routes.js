const express = require('express');
const router = express.Router();

const mysqlConnection  = require('./db.js');


router.get('/api/propiedades', (req, res) => {
  mysqlConnection.query('SELECT * FROM propiedades', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/api/propiedades/aptos', (req, res) => {
  mysqlConnection.query('SELECT * FROM propiedades WHERE prop_tipo = "Apartamento"', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/api/propiedades/casas', (req, res) => {
  mysqlConnection.query('SELECT * FROM propiedades WHERE prop_tipo = "Casa"', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM propiedades WHERE prop_id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
