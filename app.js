const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//  routes
app.get("/", function(req, res){
    res.render("index.ejs");
    console.log("index route");
});
app.get("/index", function(req, res){
    res.render("index.ejs");
    console.log("index route");
});

app.get("/job", function(req, res){
    res.render("job.ejs");
    console.log("job route");
});

app.get("/type", function(req, res){
    res.render("type.ejs");
    console.log("type route");
});

app.get("/os", function(req, res){
    res.render("os.ejs");
    console.log("os route");
});


//  server listener
// app.listen("8080", "127.0.0.1", function(){
//     console.log("Express Server is Running...");
// });

// Heroku Listener
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Running Express Server...");
});