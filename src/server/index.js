// header files
const express = require('express');
const routerApi = require('../routes/');
// http
const port = 8080;
const IP = "192.168.100.44";
// express app
const app = express();

app.use(express.json());

//routing
app.get('/', (req, res) => {
  res.send("Hola servidor");
});

routerApi(app);

//listener
app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
});
