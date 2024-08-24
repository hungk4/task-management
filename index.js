const express = require("express");
require('dotenv').config();

const database = require("./config/database");
database.connect();


const app = express();
const port = process.env.PORT;

const routesApi = require("./routes/client/index.route");
routesApi(app);



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});