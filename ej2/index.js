

const express = require('express');
const app = express();




app.get('/:maxnum', function(request, response) {
    let maxnum = request.params.maxnum;  //let {maxnum} = req.params
    response.send(randomNum(maxnum).toString());
})

function randomNum(maxnum) {
    return Math.floor(Math.random()*maxnum) + 1;

}
app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )




