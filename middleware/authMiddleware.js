const jwt = require("jsonwebtoken");

module.exports = function ( req, res, next){
    //leer token desde el header de post
    const token =req.header("x-auth-token");
    //console.log(token);
    
    // revisar si hay token
    if(!token){
        return res.status(400).json({msg:"no hay token"});
    }

    // validar el token

    try{
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        //console.log(cifrado.usuario);
        next();

    }catch(error){
        res.status(400).json({msg:"Token no valido"})
    }
}