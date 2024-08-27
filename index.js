const express = require("express");
require('dotenv').config();

const database = require("./config/database");
database.connect();


const app = express();
const port = process.env.PORT;

// CORS
const cors = require("cors");
// CORS
// Cách 1: Tất cả tên miền được phép truy cập
app.use(cors());

// Cách 2: Áp dụng cho 1 tên miền cụ thể
// const corsOptions = {
//   origin: 'https://abc.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));
// End CORS

// parse application/json
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// API
const routesApi = require("./routes/client/index.route");
routesApi(app);



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});