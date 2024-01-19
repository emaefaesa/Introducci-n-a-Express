const express = require('express');
const app = express();

let lista = ['Guillem', 'Iria', 'Martina', 'Albert', 'Tinyas'];

app.get('/personas', function(req, res) {
    res.send(lista.join());
}
);

app.get('/personas/:nombre', function(req, res) {
    let nombre = req.params.nombre;
    let index = lista.findIndex((e) => e === nombre)

    console.log(index)
    res.send({
        lista[index]
    })
})


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )

