const express = require('express');

//Crear una aplicación de express
const app = express();

//Ruta para el home
app.use('/', (req, res) => {
    //Lo que se muestra en la página
    res.send('Hola')
})


//Puerto a ser escuchado
app.listen(3005);


