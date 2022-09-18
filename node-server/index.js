const app = require("express")();

app.get("/", (req, res) => {
  send("Hi There!");
})

app.listen(8080, () => { console.log("Listening on port 8080") })
