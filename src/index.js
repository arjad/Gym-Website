const express= require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const p = path.join(__dirname, "../public");
const temppath = path.join(__dirname,"../templates/views");
const hbspath = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs")
app.set("views", temppath)

hbs.registerPartials(hbspath)

app.get("/",(req,res)=>{
    res.render("index.hbs")
})
app.get("/about",(req,res)=>{
    res.render("about.hbs")
})
app.get("/blog",(req,res)=>{
    res.render("blog.hbs")
})
app.get("/contactus",(req,res)=>{
    res.render("contact.hbs")
})
app.get("*",(req,res)=>{
    res.render("error.hbs")
})
app.listen(8000,()=>{
    console.log("listening");
})