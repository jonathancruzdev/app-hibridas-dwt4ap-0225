import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import {  createServer } from "http";
import { Server } from "socket.io";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use( cors());
app.use(  express.json());

// Creamos el Servidor 
const httpServer = createServer(app);

// Creamos el servidor Socket.io
const io = new Server( httpServer, {
    cors: { origin: "*"}
});

// 

io.on('connection', (socket) => {
    console.log(` Cliente Conectado ${socket.id}`);

    // Escuchamos el mensaje de los clientes
    socket.on("mensaje", (data) => {
        console.log("Mensaje desde el cliente");
        console.log(data);
        const fecha = new Date();
        // Enviamos la data a los clientes
        io.emit("mensaje", {
            id: socket.id,
            texto: data.texto,
            usuario: data.usuario,
            fecha: fecha
        })
    })

    socket.on('disconnect', () =>{
        console.log(`Cliente desconectado ${socket.id}`);
    })

})


app.get('/', (req, res) => {
    res.send('<h2> Servidor Socket');
})


httpServer.listen( PORT, () =>{
    console.log(`Servidor en el puerte ${PORT}`)
})