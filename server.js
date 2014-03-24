// var servidor = require('http');
// servidor.createServer(iniciarServidor).listen(8888);

// function iniciarServidor (requiere, respuesta) {
//     console.log('Petición recibida');
//     writeHead: Envia una cabecera al navegador
//     * 200: Indica el estatus OK
//     * Content-Type: Indica el tipo de información que se esta enviando

//     respuesta.writeHead(200, {'Content-Type': 'text/html'});
//    // respuesta.get('/hola',function(req,res){
//    //    res.send('hola mundo');
//    // });
//    respuesta.write('<h1><p>Hola mundo!!!</p></h1>');
//    respuesta.end();
// }



var express = require('express');
var app = express();
var mensajes = [],
    Peticionespendientes=[];
app.get('/',function(req,res){
  res.send('<h2>hola bienvenido</h2>');
});
// app.get('/mensajes/:msj1',function (req,res){
//   res.send('hola tu mensaje es:  '+ req.params.msj1);
// });

app.get('/mensajes/new/:msj',function(req,res) {
    mensajes.push(req.params.msj);
    Peticionespendientes.forEach(function(res){
      res.send(mensajes,'<script type="text/javascript">history.go(0)</script>');
    });
    res.send('Gracias por tu mensaje: '+ req.params.msj);
});
app.get('/mensajes/lista',function(req,res){
    // res.send(mensajes,'<script>window.setTimeout(function(){location.reload()},6000)</script>');
    Peticionespendientes.push(res);
});
app.listen(3000);
console.log('El servidor esta corriendo en http://127.0.0.1:3000/');
