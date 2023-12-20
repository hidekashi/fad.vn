console.log("hello");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://tund3297:Mb123456@cluster0.8bji9zh.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => console.log("DB connection success")).catch((err) => {
        console.log(err);
    });

app.listen(5000, () => {
    console.log("Backend server is running")
});