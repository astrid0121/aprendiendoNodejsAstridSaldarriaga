/*var servidor = require('./server');

servidor.iniciar();*/

const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("HOLA")
    res.end();
})



app.listen(7575);
