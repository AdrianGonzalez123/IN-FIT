const express = require('express');
const cors = require('cors');
const app = express();


//Configuracion

app.set('port', process.env.PORT || 4000);


//middlewares

app.use(cors());
app.use(express.json());

//rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de IN-FIT');
});

// ruta para api de usuarios
app.use('/api/usuarios', require('./routes/users.routes'));
app.use('/api/freeusuarios', require('./routes/freeUsers'));
app.use('/api/premiumusuarios', require('./routes/userspremium'));

module.exports = app;