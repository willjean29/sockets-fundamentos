var socket = io();

socket.on('connect',function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos la conexion con el servidor');
});

// enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Jean Osco',
    mensaje: 'Hola mundo'
},function(resp){
    console.log('respuesta server: ',resp)
});

// recibir informacion
socket.on('enviarMensaje',function(mensaje){
    console.log(mensaje)
});