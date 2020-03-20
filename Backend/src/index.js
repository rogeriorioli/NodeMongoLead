const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.mongourl,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
     useFindAndModify: false
})


const app = express();



app.use(express.json());
app.use(routes);

app.listen(process.env.port);