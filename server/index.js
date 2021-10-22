const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database setup
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true
}).then(() => { console.log("Base de datos conectada")});

// Routes Setup
app.use('/api/category', require('./routes/categoryRoutes'));
app.use('/api/product', require('./routes/productRoutes'));
app.use('/api/auth', require ('./routes/authRoutes'));
// Listen to Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor de Bladi MERN esta ejecutando en el puerto ${port}`);
})