const express = require("express")
const path = require("path")

const app = express();
const port = 2007;

app.use(express.static(path.join(__dirname, "../", "client", "public")))
console.log(path.join(__dirname, "../", "client", "public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "main.html"))
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});