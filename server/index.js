const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3001;

const mongooses = require("mongoose");
const UserModel = require("./models/Users");
//const MemoryStatus = require('./models/memory')

const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://user:1234@cluster0.mywey5t.mongodb.net/test");

app.get("/memory", (req, res) => {
  MemoryStatus.find({}, (err, result) => {
    if (err) {
      // 만약 전체 컬렉션을 읽어오고 에러가 발생할 시
      res.json(err); //에러 메시지 브라우저로 retur
    } else {
      res.json(result); // db에 데이터가 여러개 있으면
    }
  });
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.get("/", (req, res) => {
  res.send("<h1>서비스 준비중입니다..</h1>");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.get("/document", (req, res) => {
  res.json({ message: "도큐먼트에 들어오셨습니당" });
});

app.listen({ port }, () => {
  //포트 번호 고정시킴!
  console.log("3001 포트로 서비스가 시작됨...");
});
