require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// db config
const url = process.env.ATLAS_URL;
mongoose
  .connect(process.env.ATLAS_URL, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const user = require("./routes/api/user");
const payment = require("./routes/api/payment");

app.use("/api/user/", user);
app.use("/api/payment/", payment);

app.use((req, res, next) => {
  res.send("Welcome to Express");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
