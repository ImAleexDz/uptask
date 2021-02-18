const express = require('express');
const routes = require('./routes')
//librería de express
const path = require('path')

//Crear una aplicación de express
const app = express();

//Habilitar pug
app.set('view engine', 'pug')

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))

//Ruta para el home
app.use('/', routes())


//Puerto a ser escuchado
app.listen(3005);


