require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require("cors");

const mongoString = process.env.DATABASE_URL;

mongoose.set("strictQuery", false);
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => { console.log(error) })
database.once('connected', () => { console.log('Database Connected'); })

app.use(express.json());
app.use(cors());
app.use('/calculator-api', routes);
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})