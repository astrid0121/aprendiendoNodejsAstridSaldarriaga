/*var servidor = require('./server');

servidor.iniciar();*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
//const calc = require ('./MiCalculadora')
const path = require('path');

app.set('view engine','ejs')
app.set('views',path.join(__dirname, '/views'));

app.use(express.static('./public'));

app.get("/", function(req,res){
    let user =['Astrid', 'Saldarriaga', 'Londoño']

    var nombre = "usuario SENA"

    
    res.render('pages/index.ejs',
    {name:nombre,
     usuario:user
    }
    );
})

app.listen(PORT, ()=>{
    console.log("ejecutando")
});


