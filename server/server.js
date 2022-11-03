const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

require("./DataBase/DataBase")
app.use(express.json());


app.use(require("./Routes/Routes"))

app.listen(PORT, () => {
    console.log(`Server Start at ${PORT}`);
});
