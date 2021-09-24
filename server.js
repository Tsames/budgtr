/*********************
 Requirements
*********************/
const express = require("express");
const app = express();
const port = 3000;
const budgets = require("./models/budget");

/*********************
 Middleware
*********************/



/*********************
 Routes
*********************/



/*********************
 Server Listener
*********************/

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});