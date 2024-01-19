
const express = require('express');


const app = express();


let personitas = ['Guillem', 'Iria', 'Albert', 'Martina']

app.get('/afegir/:nom', function(req, res){
 personitas.push = req.params.nom
    res.send(personitas)
})



app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No hay servidor xiki')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )









