'use strict';

// Dependencies
// =====================
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

// Setup our express app
const app = express();
const PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/public'));

// Require Routes
require("./routes/htmlRoutes.js")(app);
// require("./routes/apiRoutes.js")(app);

// Handle Files storage
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

app.post("/api/Upload", function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});

var upload = multer({
    storage: Storage
}).array("imgUploader", 3);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
