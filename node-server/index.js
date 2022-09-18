const app = require("express")();

app.get("/", (req, res) => {
  console.log(req)
  res.send("Hi There!");
});

app.listen(8080, () => {
  console.log("Hi There!");
});
