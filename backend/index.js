const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user")

dotenv.config();

mongoose.connect(process.env.MANGO_URL)
    .then(() => console.log("DB connection success"))
    .catch((err) => console.log(err));

app.use(express.json());
    
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running !")
});


