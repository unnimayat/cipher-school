const express = require("express");
require("./config");
const User = require("./content");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = await result.toObject();
  res.send(result);
});
app.get("/content", async (req, res) => {
  let user = await User.find();
  if (user.length > 0) res.send(user);
  else res.send({ result: "error" });
});
app.get("/content/:id", async (req, res) => {
  let result = await User.findOne({ id: req.params.id })
  if (result) res.send(result);
  else res.send({ result: "Error" });
});
app.delete("/delete/:id", async (req, res) => {
  let result = await User.deleteOne({ id: req.params.id });
});

app.listen(5000);
