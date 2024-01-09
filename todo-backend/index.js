const express = require("express");
const app = express();
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());

const port = 5000;

app.use("/api/v1",auth);
app.use("/api/v2",list);
app.get("/", (req, res) => {
  res.send("how are you");
});

app.listen(port, () => console.log(`Server is running on ${port}`));
