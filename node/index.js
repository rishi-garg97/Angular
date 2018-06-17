const express = require("express");
const app = express();

app.use(express.static('public'));
app.get("/demo", function(req, res) {
    res.send("hello");
})
app.listen(8080, function() {
    console.log("server started")
})