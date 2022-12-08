const { db } = require('../database/db');

const getProductions = (_req, res) => {
  const q = 'SELECT * FROM CRUD.ProductionData';

  db.query(q, (err, data) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json(data);
  });
};

const createProduction = (req, res) => {
  const type = req.body.type;
  const quantity = req.body.quantity;
  const attractions = req.body.attractions;
  const suggestions = req.body.suggestions;
  const url_image = req.body.url_image;

  const query =
    'INSERT INTO CRUD.ProductionData (type, quantity, attractions, suggestions, url_image) VALUES (?, ?, ?, ?, ?)';

  db.query(
    query,
    [type, quantity, attractions, suggestions, url_image],
    (err, data) => {
      if (err) {
        res.status(400).json(err);
      }
      res.status(201).json({ msg: 'Cadastrado com sucesso!!!' });
    }
  );
};

module.exports = {
  getProductions,
  createProduction,
};
