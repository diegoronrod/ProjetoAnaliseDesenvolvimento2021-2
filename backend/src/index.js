const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//app.use(cors({
//    origin: 'http://exemplo.com'
//}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);