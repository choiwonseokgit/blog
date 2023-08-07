const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://cs0328:a12345@cluster0.4gfyvr1.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongoDB connected..!!"))
  .catch((err) => console.log(err));

//mongodb+srv://cs0328:<password>@cluster0.4gfyvr1.mongodb.net/?retryWrites=true&w=majority

app.get("/", (req, res) => {
  res.send("Hello World! 최원석의 blog 서버이다.");
});
//cs0328, a12345
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
