const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connection = require("./config/db");
const { authRouter } = require("./routes/user.routes");
const { countryRouter } = require("./routes/country.routes");
const { auth } = require("./middlewares/auth.middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/countries", auth, countryRouter);


const port = process.env.port || 8000;

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB");
        console.log(`Server is running on port ${port}`);
    } catch (err) {
        console.log({message: err.message});
    }
});