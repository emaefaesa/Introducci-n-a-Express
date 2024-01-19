
const express = require('express');


const app = express();


let persona = {
    nombre: "",
    apellidos: "",
    edad: 0
}

app.get('/nombre/:nombre', function(req, res){
/*     let {nombre} = req.params
 */    persona.nombre = req.params.nombre
    res.send(persona)
})


app.get('/nombre/:apellidos', function(req, res){
    persona.apellidos = req.params.apellidos
    res.send(persona)
})


app.get('/nombre/:edad', function(req, res){
    persona.edad = req.params.edad
    res.send(persona)
})


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No hay servidor xiki')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )









