// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mi-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión a la base de datos establecida.');
});

module.exports = mongoose;

