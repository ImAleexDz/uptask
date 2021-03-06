exports.proyectosHome = (req, res) => {
    //Lo que se muestra en la página
    res.render('index', {
        nombrePagina: 'Proyectos'
    })
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) => {
    //Enviar a la consola lo que el usuairo escriba
    // console.log(req.body)

    //validar que se tenga algo en el input
    const { nombre } = req.body;
    let errores = [];

    if(!nombre) {
        errores.push({
            'texto': 'Agrega un nombre al proyecto'
        })
    }

    //si hay errores pasar errores a la vista
    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }
}