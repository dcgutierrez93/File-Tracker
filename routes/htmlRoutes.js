const path = require('path');

module.exports = function(app) {
    app.get("/", (req, res) => {
         res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/views/login.html"));
    });
}
