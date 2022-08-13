/*var servidor = require('./server');

servidor.iniciar();*/

const express = require('express');
const app = express();
const calc = require ('./MiCalculadora')

app.get("/", function(req,res){
    res.send("HOLA")
    console.log(calc.Sumar(7,2))
})



app.listen(9010, ()=>{
    console.log("ejecutando")
});
