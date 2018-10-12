'use strict';

// Dependencies
// =====================
const express = require('express');

// Setup our express app
const app = express();
const PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static(__dirname + '/public'));

// Require Routes
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
