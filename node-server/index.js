const app = require("express")();

app.get("/", (req, res) => {
  console.log(req)
  res.send("BYE There!");
});

app.listen(8080, () => {
  console.log("Hi There!");
});
