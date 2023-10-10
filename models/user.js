
// models/usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  edad: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

