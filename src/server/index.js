// header files
const express = require('express');
const cors = require('cors');
const routerApi = require('../routes/');
//middlewares
const {   logErrors, errorHandler, boomErrorHandler } = require('../../middlewares/errorHandler');
// http
const port = 8080;
const IP = "192.168.100.44";
// express app
const app = express();

app.use(express.json());
//dar acceso a múltiples orígenes, cors
app.use(cors());

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
