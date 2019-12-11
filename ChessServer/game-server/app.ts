import { pinus } from 'pinus';
import { preload } from './preload';

/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload();

var fs = require('fs');

/**
 * Init app for client.
 */
var app = pinus.createApp();
app.set('name', 'ChessServer');

// app configuration
app.configure('production|development', 'connector', function(){
  app.set('connectorConfig',
    {
      connector : pinus.connectors.hybridconnector,
      heartbeat : 3,
      useDict : true,
      useProtobuf : true,
      ssl: {
        type: 'wss',
      	key: fs.readFileSync('../../shared/server.key'),
  			cert: fs.readFileSync('../../shared/server.crt')
      }
    });
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});