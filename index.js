const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/", (req, res) => {
  res.send("Server is running on port 5000");
});

app.listen(5000, console.log("Server is running on PORT 5000"));
