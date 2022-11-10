require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const user = require('./routes/users');
const favorite = require('./routes/favorites');

app.use(express.json());
app.use(cors());

app.use('/auth', user);
app.use('/favorite', favorite);

app.listen(port, () => console.log(`Server connected to port ${port}`));