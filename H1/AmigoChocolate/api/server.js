console.log(process.env.DB_BANDEIRA_CSTRING);

const express = require('express');
const api = express();
const routes = require('./routes');
api.use(express.json());
api.use(routes);
api.listen(4200);