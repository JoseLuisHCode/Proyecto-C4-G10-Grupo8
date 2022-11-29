const mongoose = require('mongoose');

const conectarDB = async () => {
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://proyectoC4:Aw!-38LfW6228Cc@cluster0.ddkletm.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`mongo db conectado en : ${url} `);
    }catch (error){
        console.log(`error : ${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDB;
