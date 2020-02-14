const http=require('http');

const app=require('./app');

const normalizePort=val=>{
    const port=parseInt(val,10);
    if(isNaN(port)){
        return val;
    }
    if(port >=0){
        return port;
    }
    return false;
}


const port=normalizePort(process.env.PORT || 8000);

app.set('port',process.env.PORT ||8000);
const server=http.createServer(app);

const errorHandler=error=>{
    const address=server.address();
    const bind=typeof address === 'string' ? 'pipe' + address : 'port' + port;

    if(error.syscall !== 'listen'){
        throw error;
    }

    switch(error.code){
        case 'EACCES':
            console.log(bind + 'require elevated privelage');
            process.exit(1);
            break;
        case 'EDDINUSE':
            console.log(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }

}

server.on('error',errorHandler);

server.on('listen',()=>{
    const address=server.address();
    const bind=typeof address === 'string' ? 'pipe' + address : 'port' + port;

    console.log('listen on ' + bind);
});


server.listen(port);