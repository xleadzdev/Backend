require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

let port = process.env.PORT || 3000; //PORT export PORT=portNumber in terminal
// MongoDB Connection Setup Start
const mongoString = process.env.DATABASE_URL_REMOTE;
mongoose.set("strictQuery", false);
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
// MongoDB Connection Setup End

const app = express();
app.use(cors());

app.use(express.json());

// Setting up basic middleware for all Express requests
app.use(bodyParser.json()); // Send JSON responses
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen({ port }, () => {
  console.log(`Server Started at ${port}`);
});
