const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" })

exports.autenticarUsusario = async (req, res) => {
    const { password, email } = req.body;

    try {
        // revisar que el correo este registrado

        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({ msg: "este usuario no existe" });
        }

        //validar password

        const passwordOk = await bcryptjs.compare(password, usuario.password);

        if (!passwordOk) {
            return res.status(404).json({ msg: "password incorrecto" })
        }

        // crear y firmar token

        let payload = {
            usuario: { id: usuario.id }
        }
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '1m',
            },
            (error, token) => {
                if (error) throw error;
                // mensaje ok
                res.json({ token });
            }
        );
        //console.log("permitir ingresar")

    } catch (error) {
        console.log(error)
    }
}

exports.usuarioAutenticado = async (req, res) =>{
    try{
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario})
    }catch(error){
        res.status(403).json({msg:"Ocurrio un error"})
    }
}