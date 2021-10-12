// header files
const express = require('express');
const cors = require('cors');
const routerApi = require('../routes/');
//middlewares
const {   logErrors, errorHandler, boomErrorHandler } = require('../../middlewares/errorHandler');
// http
const port = process.env.PORT || 8080;
const IP = "192.168.100.44";
// express app
const app = express();

app.use(express.json());
//dar acceso a múltiples orígenes, cors
const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://192.168.100.44', 'http://192.168.100.9'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

//routing
app.get('/', (req, res) => {
  res.send("Hola servidor");
});

routerApi(app);
//using error middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//listener
app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
});
