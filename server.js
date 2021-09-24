/*********************
 Requirements
*********************/
const express = require("express");
const app = express();
const port = 3000;
const budget = require("./models/budget");

/*********************
 Middleware
*********************/

app.use(express.static('public'))

/*********************
 Routes
*********************/

app.get('',(req,res) => {
  res.render("index.ejs", {budget: budget});
})

/*********************
 Server Listener
*********************/

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});