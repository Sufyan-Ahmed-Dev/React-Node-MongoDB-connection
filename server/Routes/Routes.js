const express = require("express");
const Router = express()

Router.get("/", (req, res) => {
    res.send("This is Home Page");
});

Router.get("/about", (req, res) => {
    res.send("This is about Page");
});

Router.get("/services", (req, res) => {
    res.send("This is services Page");
});

Router.get("/login", (req, res) => {
    res.send("This is login Page");
});

Router.post("/getData", (req, res) => { 
    console.log(req.body)
    res.json({ message : req.body})
})

module.exports = Router;