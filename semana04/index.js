const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerAPI = require('./routes/index');
// Nos conectamos a la DB
mongoose.connect('mongodb://127.0.0.1:27017/apipollo');
const db = mongoose.connection;

db.on('error', () => { console.error('Error de conexión')});
db.once('open', () => { console.log('Conexión con la DB Correcta 👌')});



dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.get('/', (request, response) => {
    response.send('<h1> API 🐔 </h1>');
})

routerAPI(app);
app.listen(PORT, () => {
    console.log(`API 🐔 en el puerto ${PORT}`);
} )