const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config({ path: path.join(__dirname, "../", ".env") });

const app = express();
const PORT = process.env.PORT || 8033;
global.__basedir = __dirname;

app.use(helmet());  // Enable security headers

app.use(cors());    // Enable CORS for all requests

const welcomeMsg = { title: "Welcome to the pdf table extractor application." };

app.use(morgan("dev")); // Enable logging

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    req.setTimeout(4 * 60 * 1000 + 1); 
    next();
});

// routes
app.use("/api/v1/", v1DevicesRouter);

//Default route
app.get("/", (req, res) => {
    console.log("Dirname = ", __dirname);
    res.sendFile(path.join(__dirname + "/v1/public/index.html"));
});

app.listen(PORT, () => {
    console.log("Dirname = ", __dirname);
    console.log('Server running on port ' + PORT) + '.';
});

module.exports = app;