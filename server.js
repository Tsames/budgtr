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

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

/*********************
 Routes
*********************/

app.get('/budget',(req,res) => {
  res.render("index.ejs", {budget: budget});
});

app.get('/budget/new', (req,res) => {
  res.render("new.ejs");
});

app.post('/budget', (req,res) => {
  budget.push(req.body);
  console.log(`New budget, ${req.body.name}, created!`);
  res.redirect('/budget');
});

app.get('/budget/:id', (req,res) => {
  res.render("show.ejs", {budget: budget[req.params.id]})
});

/*********************
 Server Listener
*********************/

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});