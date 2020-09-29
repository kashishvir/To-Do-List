const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));

let items = [];
let workitems = [];

app.get("/", function(req, res)
{
  let day= date();
  res.render("list", {kindOfDay: day, newlistitems: items}); //ejs
  //res.send();
});

app.get("/work",function(req,res)
{
  res.render("list",{kindOfDay: "work list", newlistitems: workitems });
});



app.post("/", function(req,res)
{   let item= req.body.newItem;
  if(req.body.list=== "work")
  {
    workitems.push(item);
    res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }
});


app.listen(3000, function() {
  console.log("server is running on part 3000.");
});
