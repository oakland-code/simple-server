const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors');

connectDB()

const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('tiny'))

app.use('/api/goals', require('./routes/goalRoutes') )

// This function overrides the default express error handler
 app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}...`);
})