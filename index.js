const express = require("express");
require('dotenv').config();

const database = require("./config/database");
database.connect();


const app = express();
const port = process.env.PORT;

// parse application/json
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// API
const routesApi = require("./routes/client/index.route");
routesApi(app);



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});