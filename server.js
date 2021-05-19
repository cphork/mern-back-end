
require("dotenv").config();

const peopleRouter = require("./controllers/car")

const PORT = process.env.PORT;


const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


const mongoose = require("./db/connection");


const app = express();


app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <----- logging for debugging


app.get("/", (req, res) => res.send("BOOM! It'a working!")); // <--- Route to test server

app.use("/cars", peopleRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));