const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async ( req, res) => {
    //console.log(req.body); 
    //res.json({msg: "post desde controller"})

    const { password, email } = req.body;

    try{
        // revisar unico correo

        let usuario = await Usuario.findOne ({ email });

        if(usuario){
            return res.status(400).json({msg:"este correo ya esxiste"});
        }

        //crear nuevo usuario
       usuario = new Usuario(req.body);

       //hash

       usuario.password = await bcryptjs.hash(password, 10)

        //guardar usuario en la db
        
        const guardarUsuario = await usuario.save();
        res.json(guardarUsuario);


    }catch(error){
        console.log(error)
    }
};