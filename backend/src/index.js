const express = require("express");
const { connectDB } = require("./mongo/connection");
const cors = require("cors");
const categoryRouter = require("./routers/categoryRouter");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/category", categoryRouter);

connectDB().then(() => console.log("Connected to database!"));

const server = app.listen(3005, () => {
  console.log("Server is up and running ⚡");
});
