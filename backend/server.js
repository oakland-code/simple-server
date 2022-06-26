const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db')


connectDB()

const app = express();

app.use(morgan('tiny'))

app.use('/api/goals', require('./routes/goalRoutes') )




app.listen(port, () => {
    console.log(`Server running on PORT: ${port}...`);
})