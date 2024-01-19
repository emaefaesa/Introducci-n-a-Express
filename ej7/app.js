const express = require('express');
let randomNum = require('./function')
let array = require('./array')

const app = express();



app.get('/num',  function(req, res) {
    let randomIndex = randomNum();
    array[randomIndex] ++;

    res.send(array)
})   

//ej8 

app.get('/borrar/:indice', function(req, res){
    if (req.params.indice < array.lenght){
        array[req.params.indice] = 0
        res.send(array)
    }else{
        res.send("El índice indicado no está en el array")
    }
    
}) 



app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )

