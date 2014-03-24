var servidor = require('http');
servidor.createServer(iniciarServidor).listen(8888);

function iniciarServidor (requiere, respuesta) {
    console.log('Petición recibida');
   /* writeHead: Envia una cabecera al navegador
    * 200: Indica el estatus OK
    * Content-Type: Indica el tipo de información que se esta enviando
   */
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
   // respuesta.get('/hola',function(req,res){
   //    res.send('hola mundo');
   // });
   respuesta.write('<h1><p>Hola mundo!!!</p></h1>');
   respuesta.end();
}

console.log('El servidor esta corriendo en http://127.0.0.1:8888/');
