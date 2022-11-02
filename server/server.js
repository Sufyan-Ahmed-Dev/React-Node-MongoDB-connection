const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./.env" });

const DataBase = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.connect(DataBase)
    .then(() => {
        console.log("Data Base connnected ");
    })
    .catch((err) => {
        console.log("Not connected Error");
    });

app.get("/", (req, res) => {
    res.send("This is Home Page");
});

app.get("/about", (req, res) => {
    res.send("This is about Page");
});

app.get("/services", (req, res) => {
    res.send("This is services Page");
});

app.get("/login", (req, res) => {
    res.send("This is login Page");
});

app.listen(PORT, () => {
    console.log(`Server Start at ${PORT}`);
});
