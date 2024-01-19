const express = require('express');
const app = express();



app.get('/hola', function(request, response) {
    response.send('<h1>Hola MundooooOoOoOo! :)</h1>');
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )