const { db } = require('../database/db');
const md5 = require('md5');

const getUsers = (_req, res) => {
  const q = 'SELECT * FROM CRUD.Users';

  db.query(q, (err, data) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json(data);
  });
};

const createUsers = (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const district = req.body.district;
  const zip_code = req.body.zip_code;
  const city = req.body.city;
  const state = req.body.state;
  const email = req.body.email;
  const phone = md5(req.body.phone);

  const q = 'SELECT * FROM CRUD.Users WHERE email = ?';
  const query =
    'INSERT INTO CRUD.Users (name, address, district, zip_code, city, state, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(q, [email], (err, data) => {
    if (err) {
      res.json(err);
    }
    if (data.length === 0) {
      db.query(
        query,
        [name, address, district, zip_code, city, state, email, phone],
        (err, data) => {
          if (err) {
            res.status(400).json(err);
          }
          res.status(201).json({ msg: 'Cadastrado com sucesso!!!' });
        }
      );
    } else {
      res.status(400).send({ msg: 'Usuário já cadastrado!!!' });
    }
  });
};

const deleteUsers = (req, res) => {
  const id = req.params.id;

  const q = 'DELETE FROM CRUD.Users WHERE id = ?';

  db.query(q, [id], (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ msg: 'Usuário deletado com sucesso!!!' });
    }
  });
};

const updateUsers = (req, res) => {
  const id = req.params.id;
  const phone = md5(req.body.phone);
  const { name, email } = req.body;

  const q = 'UPDATE CRUD.Users SET name = ?, email = ?, phone = ? WHERE id = ?';
  const query = 'SELECT * FROM CRUD.Users WHERE email = ?';

  db.query(query, [email], (err, data) => {
    if (err) {
      res.json(err);
    }
    if (data.length === 0) {
      db.query(q, [name, email, phone, id], (err, data) => {
        if (err) {
          res.status(400).json(err);
        }
        res.status(201).json({ msg: 'Usuário atualizado com sucesso!!!' });
      });
    } else {
      res.status(400).send({ msg: 'Usuário já cadastrado!!!' });
    }
  });
};

module.exports = {
  getUsers,
  createUsers,
  deleteUsers,
  updateUsers,
};
