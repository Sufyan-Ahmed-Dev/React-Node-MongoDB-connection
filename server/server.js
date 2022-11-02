const express = require("express");
const app = express();

app.get("/", (res, req) => {
    res.send("Hello world")
});

app.listen(3000, () => {
    console.log("server started at localhost 3000")
})