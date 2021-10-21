const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


//Middleware

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes.js');

app.use('/posts', posts);
//connect to DB
mongoose.connect(process.env.CONNECTION_DB, {useNewUrlParser: true}, () => { console.log("connected to DB")})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));