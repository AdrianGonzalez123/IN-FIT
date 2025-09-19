const {Schema, model} = require('mongoose');


//Ejemplo para crear un esquema de usuario, cambiar segun las necesidades
const UsuarioSchema = new Schema({
    nombre: String,
    email: String,
    password: String
},
{
    timestamps: true
})
module.exports = model('Usuario', UsuarioSchema);