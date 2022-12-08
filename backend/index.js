const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const productionRoutes = require('./routes/productions');

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(productionRoutes);

app.listen(3001, () => {
  console.log('rodando na porta 3001');
});
