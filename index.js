const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected..!!"))
  .catch((err) => console.log(err));

//mongodb+srv://cs0328:<password>@cluster0.4gfyvr1.mongodb.net/?retryWrites=true&w=majority

app.get("/", (req, res) => {
  res.send("Hello World! 최원석의 blog 서버이다.");
});

app.post("/register", (req, res) => {
  //회원 가입 할때 필요한 정보들을 client 에서 가져오면
  //그것들을 DB에 넣어준다.
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
