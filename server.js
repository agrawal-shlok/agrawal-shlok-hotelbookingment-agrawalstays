const express = require("express");
const app = express();

const dbconfig = require("./db");
const roomsroute = require("./routes/Roomsroute")


app.use('/api/rooms', roomsroute)

const port = process.env.port || 5000;

app.listen(port, () => console.log(`node server started using nodemon`));
