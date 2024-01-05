const express = require("express");
const app = express();
const Route = require("./routes");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello ");
});
app.use("/countries", Route);
app.listen(3000, () => {
  console.log("Listering on 3000");
});
