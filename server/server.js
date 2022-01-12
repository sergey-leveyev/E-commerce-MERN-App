const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("hellooo");
});

app.listen(PORT, () => {
  console.log(`server is listenning on port ${PORT}`);
});
