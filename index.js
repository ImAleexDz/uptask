const express = require('express');
const routes = require('./routes')
//librería de express
const path = require('path')
const bodyParser = require('body-parser')

//Crear una aplicación de express
const app = express();

//Donde cargar los archivos estáticos (css)
app.use(express.static('public'))

//Habilitar pug
app.set('view engine', 'pug')

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'))

//Habilitar body parser para ller datos del formulario
app.use(bodyParser.urlencoded({extended: true}))

//Ruta para el home
app.use('/', routes())


//Puerto a ser escuchado
app.listen(3005);


