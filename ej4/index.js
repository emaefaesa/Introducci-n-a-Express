
const express = require('express');
const funcion = require('./function')


const app = express();


app.get('/saludar/:nombre' , function(req,res){
    res.send(funcion(req.params.nombre))
})


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No hay servidor xiki')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )









