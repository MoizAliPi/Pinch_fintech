const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const files = require('./routes/api/files');

const app = express();

//bodyParser Middleware & cors
app.use(bodyParser.json());
app.use(cors());
//DB Config
const db = require('./config/keys').mongoURI;

//Connect MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

const port = 5000;

app.listen(port, () => console.log(`Server started listening to port ${port}`));

//Routes
app.use('/api/users', users);
app.use('/api/files', files);