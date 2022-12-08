const express = require('express');
const { getProductions } = require('../controllers/production');
const { createProduction } = require('../controllers/production');

const routerProduction = express.Router();

routerProduction.get('/production', getProductions);
routerProduction.post('/production', createProduction);

module.exports = routerProduction;
