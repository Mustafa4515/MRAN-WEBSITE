const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cookieParser())

const ErrorHandlerware = require(".//middleware/catchAsyncErrors");

//Route import

const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
app.use("/api/v1", user);


app.use("/api/v1", product);

app.use("/api/v1", order);

//  Middleware for Error

app.use(ErrorHandlerware);

module.exports = app;
