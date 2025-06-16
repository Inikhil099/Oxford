const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./dbConnection");
const EnrollRouter = require("./routes/userRoutes")
const app = express();
const PORT = 3000;

connectDB("mongodb://127.0.0.1:27017/oxford").then(() => {
  console.log("db connected");
});

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/",EnrollRouter)

app.listen(PORT, (e) => {
  console.log("server running on port", PORT);
});
