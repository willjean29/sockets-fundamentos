const {io} = require('../server');

io.on('connection',(client) => {
    console.log('Usuario conectado');
    // enviar mensaje
    client.emit('enviarMensaje',{
        nombre: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });
    client.on('disconnect',() => {
        console.log('Usuario desconenctado');
    });

    // escuchar el cliente
    client.on('enviarMensaje',(data,callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);
    });

});
