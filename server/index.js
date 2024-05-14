const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");
const providerRouter = require("./routes/providerRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);
app.use("/api/provider", providerRouter);
app.get("/", (req, res) => res.json({ msg: "in servere" }));

const mongoURI =
  "mongodb+srv://itsmecharan08:fQO5udLpGGUzdkhp@cluster0.emhoeat.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect("mongodb://127.0.0.1:27017/CommunitySync")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(1337, () => console.log("Server running on port 1337"));
