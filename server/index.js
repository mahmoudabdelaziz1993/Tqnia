const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const morgan = require("morgan");
// if in Development load variables from .env
process.env.NODE_ENV !== "production" && require("dotenv").config();
////////////////////////////////////////



mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.on('open', () => { console.log(" connected to db "); })

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/api', apiRouter)

app.listen(process.env.PORT)
    .on('listening', () => console.log(` app is on live now on http://localhost:${process.env.PORT}`))