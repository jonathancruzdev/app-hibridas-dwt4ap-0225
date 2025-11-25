import { useState, useEffect } from "react";
import { io } from "socket.io-client"

const socket = io('http://localhost:3000/');



const Chat = () =>{
    const [ mensaje, setMensaje] = useState("");
    const [ mensajes, setMensajes] = useState([]);
    const [ usuario, setUsuario] = useState("");

    useEffect( () => {
        socket.on('mensaje', (data) => {
            console.log('Data Recibida ');
            setMensajes( (prev) => [...prev, data]);
        })

        return () => {
            socket.off('mensaje');
        };

    }, []);

    const enviarMensaje = () =>{
        if( mensaje.trim() === ""){
            return;
        }

        socket.emit("mensaje", {
            texto: mensaje,
            usuario: usuario
        })

        setMensaje("");
    }

    return (
        <>
            <div>
                <h4>Mensajes</h4>
           
                <div style={{
                    border: "2px solid #FFF",
                    minHeight: 100,
                    padding: 5
                }}>
                    {
                        mensajes.map( (item, index) => (
                            <p key={index}>
                                <strong>{item.usuario}: </strong> 
                                { item.texto}
                                <br />
                                <em> { item.fecha.toLocaleString()}</em>
                            </p>

                        ) )
                    }

                </div>
            </div>
            <div style={{ 
                display:"flex",
                flexDirection: "column",
                marginTop: 16,
                gap: 5 
            }}>
                <input 
                    value={usuario}
                    name="usuario"
                    onChange={ (e) => setUsuario( e.target.value)}
                    style={{ padding: 10}} 
                    type="text" 
                    placeholder="Nombre" 
                />
                <input
                    value={mensaje}
                    name="mensaje"
                    onChange={ (e) => setMensaje( e.target.value)}
                    style={{ padding: 10}} 
                    type="text" 
                    placeholder="mensaje"
                    
                />
                <button onClick={ enviarMensaje} type="button">Enviar</button>
            </div>

        </>
    )
}

export default Chat;
