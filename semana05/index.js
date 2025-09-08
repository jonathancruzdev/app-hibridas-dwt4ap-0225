/* 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerAPI = require('./routes/index');
*/

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerAPI from './routes/index.js';
dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

// Nos conectamos a la DB
mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on('error', () => { console.error('Error de conexión')});
db.once('open', () => { console.log('Conexión con la DB Correcta 👌')});


const app = express();
app.use(  express.json() );
app.get('/', (request, response) => {
    response.send('<h1> API 🐔 </h1>');
})

routerAPI(app);
app.listen(PORT, () => {
    console.log(`API 🐔 en el puerto ${PORT}`);
} )