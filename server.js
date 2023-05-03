require('rootpath')();
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const webSocket = require('ws');
const cors = require('cors');
app.use(cors())
dotenv.config()



const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const { connection } = require('mongoose');
const { Server } = require('socket.io');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/uploads', express.static('./uploads'));
// use JWT auth to secure the api
app.use(jwt());



// api routes
app.use('/api/futurePedia', require('./futurePedia/futurePedia.routes'));

// global error handler
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port '   + process.env.URL + port);
});
 