import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const validarJWT = (request, response, next ) => {
    const jwt = request.headers.autorization;
    if( !jwt){
        response.status(401).json({msg: 'Falta el token'});
    }

    console.log({jwt});

    next();
}

export { validarJWT };