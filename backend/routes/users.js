const express = require('express');
const { getUsers } = require('../controllers/users');
const { createUsers } = require('../controllers/users');
const { deleteUsers } = require('../controllers/users');
const { updateUsers } = require('../controllers/users');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUsers);
router.patch('/users/:id', updateUsers);

module.exports = router;
