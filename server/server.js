const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is Home Page")
});
app.get("/about", (req, res) => {
    res.send("This is about Page")
});

app.get("/services", (req, res) => {
    res.send("This is services Page")
});

app.get("/login", (req, res) => {
    res.send("This is login Page")
});


app.listen(3000, () => {
    console.log("server started at localhost 3000")
})