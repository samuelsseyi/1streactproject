const express = require("express")
const App = express()
const ejs = require ("ejs")
const PORT = 3000

App.set("view engine", "ejs")

App.get("/ejs", (req, res) =>{
  res.render("index", {name:"Samuel"})
})

App.get("/welcome",(req, res)=>{
  console.log("Welcome To Your Node Homepage");
  res.send("Welcome To Your Node Homepage Samuel");
})

App.get("/index", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html")
})

App.listen(PORT,()=>{
  console.log(`Running this app on PORT ${PORT}`);
})